import React, { useEffect, useContext } from 'react';
import { View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import PhotoGrid from '../components/main/PhotoGrid';
import API from '../api/API';
import GroupsStateContext from '../contexts/GroupStateContext';
import GroupDispatch from '../contexts/GroupDispatchContext';
import UserDispatchContext from '../contexts/UserDispatchContext';
import Downloader from '../api/Downloader';
import UserContext from '../contexts/UserContext';

function MainPage() {
  const navigation = useNavigation();
  const dispatch = useContext(GroupDispatch);
  const userDispatch = useContext(UserDispatchContext);
  const { groups, index, images } = useContext(GroupsStateContext);
  const user = useContext(UserContext);

  async function checkUser() {
    let fetchedUser;
    let jwt;
    try {
      fetchedUser = JSON.parse(await AsyncStorage.getItem('user'));
      jwt = await AsyncStorage.getItem('jwt');
      await getGroups(fetchedUser);
      await populatePhotos();
    } catch (err) {
      navigation.navigate('Login');
    }

    if (!fetchedUser || !jwt) {
      userDispatch({
        type: 'setUser',
        payload: null,
      });
      navigation.navigate('Login');
    }
  }

  async function populatePhotos() {
    if (!groups || groups.length < 1) {
      return;
    }

    const group = groups[index];
    const res = await API.getGroupImages(group.id);
    dispatch({
      type: 'setImages',
      payload: res.images,
    });

    await Downloader.downloadImages(res.images);
  }

  async function getGroups(fetchedUser) {
    await API.getGroups(fetchedUser.id).then(fetchedGroups => {
      dispatch({
        type: 'init',
        payload: {
          groups: fetchedGroups,
          index: 0,
          images: null,
        },
      });
    });
  }

  useEffect(() => {
    checkUser();
  }, [user]);

  useEffect(() => {
    if (groups.length < 1) {
      return;
    }
    populatePhotos(groups[index].id);
  }, [index]);

  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <PhotoGrid photos={images ?? []} />
    </View>
  );
}

export default MainPage;
