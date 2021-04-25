import { DrawerActions, useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react';
import {
  View, StyleSheet, Text, ScrollView, TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Avatar from '../components/Avatar';
import Button from '../components/Button';
import ListItem from '../components/main/ListItem';
import API from '../api/API';
import GroupDispatch from '../contexts/GroupDispatchContext';
import GroupsStateContext from '../contexts/GroupStateContext';
import UserDispatchContext from '../contexts/UserDispatchContext';
import UserContext from '../contexts/UserContext';

function GroupDrawer() {
  const { groups, index } = useContext(GroupsStateContext);
  const dispatch = useContext(GroupDispatch);
  const navigation = useNavigation();
  const user = useContext(UserContext);
  const userDispatch = useContext(UserDispatchContext);
  const [imgURL, setImgURL] = useState(null);

  function onItemPress(pressedIndex) {
    dispatch({
      type: 'setIndex',
      payload: pressedIndex,
    });

    // Dismiss Drawer.
    navigation.dispatch(DrawerActions.closeDrawer());
  }

  async function logout() {
    await AsyncStorage.clear();
    userDispatch({
      type: 'setUser',
      payload: undefined,
    });
  }

  useEffect(() => {
    if (!user) {
      return;
    }
    (async () => {
      const info = await API.getInfo(user.token, user.id);
      setImgURL(info.imgURL);
    })();
  }, [user]);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
          >
            <View style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 20,
            }}
            >
              <Avatar size={50} firstName={user ? user.firstName : ''} lastName={user ? user.lastName : ''} uri={imgURL} />
              <View style={{
                marginLeft: 20,
              }}
              >
                <Text style={styles.name}>{user ? user.firstName : ''}</Text>
                <Text style={styles.name}>{user ? user.lastName : ''}</Text>
              </View>
            </View>
            <TouchableOpacity onPress={logout}>
              <MaterialIcons name="logout" size={24} color="black" />
            </TouchableOpacity>
          </View>

          <Text style={styles.title}>Your Groups</Text>
          <View style={styles.groupList}>
            {groups.map((group, groupIndex) => (
              <ListItem
                imageURL={group.thumbnail ? group.thumbnail.URL : null}
                title={group.name}
                members={group.memberCount}
                index={groupIndex}
                active={groupIndex === index}
                onPress={onItemPress}
                key={group.id}
              />
            ))}
          </View>
          <Button type="accent" title="Join Group" />
          <Button type="accent" title="Create Group" />
        </View>
      </ScrollView>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 20,
    overflow: 'hidden',
  },
  title: {
    fontSize: 16,
    fontFamily: 'Poppins_600SemiBold',
    marginBottom: 10,
  },
  groupList: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 10,
  },
  name: { fontSize: 18, fontFamily: 'DMSans_500Medium' },
});

export default GroupDrawer;
