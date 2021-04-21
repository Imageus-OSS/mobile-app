import { DrawerActions, useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import {
  View, StyleSheet, Text, ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../components/Button';
import ListItem from '../components/main/ListItem';
import GroupDispatch from '../contexts/GroupDispatchContext';
import GroupsStateContext from '../contexts/GroupStateContext';

function GroupDrawer() {
  const { groups, index } = useContext(GroupsStateContext);
  const dispatch = useContext(GroupDispatch);
  const navigation = useNavigation();

  function onItemPress(pressedIndex) {
    dispatch({
      type: 'setIndex',
      payload: pressedIndex,
    });

    // Dismiss Drawer.
    navigation.dispatch(DrawerActions.closeDrawer());
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
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
});

export default GroupDrawer;
