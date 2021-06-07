import React, { useEffect } from 'react';
import {
  Text, StyleSheet, SafeAreaView, Share,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, Feather } from '@expo/vector-icons';
import PhotoGrid from '../components/main/PhotoGrid';
import API from '../api/API';
import Downloader from '../api/Downloader';
import ShareButton from '../components/main/ShareButton';
import { useGroups, useGroupsState } from '../hooks/group';
import { useUser, useUserState } from '../hooks/user';
import { User } from '../types';

function MainPage(): JSX.Element {
  const navigation = useNavigation();
  const { dispatch } = useGroups();
  const { dispatch: userDispatch } = useUser();
  const { groups, index, images } = useGroupsState();
  const user = useUserState();

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

  async function getGroups(fetchedUser: User) {
    await API.getGroups(fetchedUser.id).then(fetchedGroups => {
      dispatch({
        type: 'init',
        payload: {
          groups: fetchedGroups,
          index: 0,
          images: [],
        },
      });
    });
  }

  async function shareGroup() {
    // eslint-disable-next-line no-underscore-dangle
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const group = await API.getGroup(groups[index].id! || groups[index]._id!);
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
    if (user === undefined || !user.id) {
      navigation.navigate('Login');
    }
    void (async () => {
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
      headerRight: function ShareButton() {
        return (
          <Feather name="share" size={24} style={{ marginRight: 20 }} color="black" onPress={shareGroup}/>
        );
      },
    });
    void (async () => {
      let fetchedUser;
      let jwt;
      try {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        fetchedUser = JSON.parse((await AsyncStorage.getItem('user'))!);
        jwt = await AsyncStorage.getItem('jwt');
        userDispatch({
          type: 'updateUser',
          payload: fetchedUser,
        });
      } catch (err) {
        navigation.navigate('Login');
        return;
      }

      if (!fetchedUser || !jwt) {
        userDispatch({
          type: 'updateUser',
          payload: {} as User,
        });
        navigation.navigate('Login');
        return;
      }
      if (groups.length < 1) {
        return;
      }
      void populatePhotos();
    })();
  }, []);

  useEffect(() => {
    if (!groups || groups.length < 1) {
      return;
    }
    void populatePhotos();
  }, [index]);

  function onShare() {
    navigation.navigate('Capture');
  }

  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      <Text style={styles.title}>{groups[index] ? groups[index].name : 'Loading...'}</Text>
      <PhotoGrid photos={images ?? []} onRefresh={populatePhotos} />
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
