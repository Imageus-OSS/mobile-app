import { DrawerActions, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  View, StyleSheet, Text, ScrollView, TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Avatar from '../components/Avatar';
import ListItem from '../components/main/ListItem';
import API from '../api/API';
import { useGroups, useGroupsState } from '../hooks/group';
import { useUser, useUserState } from '../hooks/user';
import { User } from '../types';

function GroupDrawer(): JSX.Element {
  const { groups, index } = useGroupsState();
  const { dispatch } = useGroups();
  const navigation = useNavigation();
  const user = useUserState();
  const { dispatch: userDispatch } = useUser();
  const [imgURL, setImgURL] = useState<string | null>(null);

  function onItemPress(pressedIndex: number) {
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
      type: 'updateUser',
      payload: {} as User,
    });
  }

  useEffect(() => {
    if (!user) {
      return;
    }
    void (async () => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const info = await API.getInfo(user.token!, user.id);
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setImgURL(info.imgURL!);
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
              <Avatar size={50} firstName={user?.firstName ? user.firstName : ''} lastName={user?.lastName ? user.lastName : ''} uri={imgURL || ''} />
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
                imageURL={group.thumbnail ? group.thumbnail.URL : undefined}
                title={group.name}
                members={group.memberCount}
                index={groupIndex}
                active={groupIndex === index}
                onPress={onItemPress}
                key={group.id}
              />
            ))}
          </View>
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
