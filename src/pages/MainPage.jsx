import React, { useEffect, useContext } from 'react';
import { View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import PhotoGrid from '../components/main/PhotoGrid';
import API from '../api/API';
import GroupsStateContext from '../contexts/GroupStateContext';
import GroupDispatch from '../contexts/GroupDispatchContext';

function MainPage() {
  const navigation = useNavigation();
  const dispatch = useContext(GroupDispatch);
  const { groups, index, images } = useContext(GroupsStateContext);

  let jwt;
  let user;

  async function checkUser() {
    try {
      await AsyncStorage.clear();
      user = JSON.parse(await AsyncStorage.getItem('user'));
      jwt = await AsyncStorage.getItem('jwt');
      await getGroups();
      await populatePhotos();
    } catch (err) {
      navigation.navigate('Login');
    }

    if (!user || !jwt) {
      navigation.navigate('Login');
    }
  }

  async function populatePhotos() {
    if (groups.length < 1) {
      return;
    }

    const group = groups[index];
    const res = await API.getGroupImages(group.id);
    dispatch({
      type: 'setImages',
      payload: res.images,
    });
  }

  async function getGroups() {
    await API.getGroups(user.id).then(fetchedGroups => {
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
  }, []);

  useEffect(() => {
    populatePhotos(groups[index].id);
  }, [index]);

  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <PhotoGrid photos={images ?? []} />
    </View>
  );
}

export default MainPage;
