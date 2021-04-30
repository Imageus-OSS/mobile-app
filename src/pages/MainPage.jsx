import React, { useEffect, useContext } from 'react';
import {
  Text, StyleSheet, SafeAreaView, Share,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, Feather } from '@expo/vector-icons';
import PhotoGrid from '../components/main/PhotoGrid';
import API from '../api/API';
import GroupsStateContext from '../contexts/GroupStateContext';
import GroupDispatch from '../contexts/GroupDispatchContext';
import UserDispatchContext from '../contexts/UserDispatchContext';
import Downloader from '../api/Downloader';
import UserContext from '../contexts/UserContext';
import ShareButton from '../components/main/ShareButton';

function MainPage() {
  const navigation = useNavigation();
  const dispatch = useContext(GroupDispatch);
  const userDispatch = useContext(UserDispatchContext);
  const { groups, index, images } = useContext(GroupsStateContext);
  const user = useContext(UserContext);

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

  async function shareGroup() {
    // eslint-disable-next-line no-underscore-dangle
    const group = await API.getGroup(groups[index].id || groups[index]._id);
    const url = `https://www.imageus.io/invite/${group.inviteCode}?groupId=${group.id}`;
    try {
      await Share.share({
        url,
      }).catch(error => alert(error.message));
    } catch (error) {
      alert(error.message);
    }
  }

  useEffect(() => {
    if (user === undefined) {
      navigation.navigate('Login');
    }
    (async () => {
      if (user == null) {
        return;
      }
      await getGroups(user);
      await populatePhotos();
    })();
  }, [user]);

  useEffect(() => {
    // Setup header stuffs
    navigation.setOptions({
      headerRight: () => (<Feather name="share" size={24} style={{ marginRight: 20 }} color="black" onPress={shareGroup} />),
    });
    (async () => {
      let fetchedUser;
      let jwt;
      try {
        fetchedUser = JSON.parse(await AsyncStorage.getItem('user'));
        jwt = await AsyncStorage.getItem('jwt');
        userDispatch({
          type: 'setUser',
          payload: fetchedUser,
        });
      } catch (err) {
        navigation.navigate('Login');
        return;
      }

      if (!fetchedUser || !jwt) {
        userDispatch({
          type: 'setUser',
          payload: null,
        });
        navigation.navigate('Login');
        return;
      }
      if (groups.length < 1) {
        return;
      }
      populatePhotos(groups[index].id);
    })();
  }, []);

  useEffect(() => {
    if (!groups || groups.length < 1) {
      return;
    }
    populatePhotos(groups[index].id);
  }, [index]);

  function onShare() {
    navigation.navigate('Capture');
  }

  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      <Text style={styles.title}>{groups[index] ? groups[index].name : 'Loading...'}</Text>
      <PhotoGrid photos={images ?? []} onRefresh={() => populatePhotos(groups[index].id)} />
      <ShareButton>
        <Ionicons onPress={onShare} name="camera" size={24} color="black" />
      </ShareButton>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontFamily: 'Poppins_600SemiBold',
    marginLeft: 24,
    marginTop: 10,
    marginBottom: 10,
  },
});

export default MainPage;
