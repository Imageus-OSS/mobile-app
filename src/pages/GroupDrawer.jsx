import React from 'react';
import {
  View, StyleSheet, Text, ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../components/Button';
import ListItem from '../components/main/ListItem';

const groups = [
  {
    title: 'Group TBA',
    imageURL: null,
    members: 103,
  },
  {
    title: 'Socks n Sandals',
    imageURL:
      'https://images.unsplash.com/photo-1617450599731-0ec86e189589?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    members: 592,
  },
  {
    title: 'Architecture',
    imageURL:
      'https://images.unsplash.com/photo-1617538781052-b49b1bc7cbe1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1866&q=80',
    members: 900,
  },
  {
    title: 'JavaScript Junkies',
    imageURL:
      'https://images.unsplash.com/photo-1617541224621-c6dbd1bb5bbb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80',
    members: 1,
  },
  {
    title: 'This is a group with a title that should show ellipses',
    imageURL: null,
    members: 420,
  },
];

function GroupDrawer() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Your Groups</Text>
          <View style={styles.groupList}>
            {groups.map(group => (
              <ListItem imageURL={group.imageURL} title={group.title} members={group.members} />
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
