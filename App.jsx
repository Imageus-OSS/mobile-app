import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import LandingBody from './components/LandingBody';
import LoginCard from './components/LoginCard';

export default function App() {
  return (
    <View style={styles.container}>
      <LandingBody>
        <LoginCard />
      </LandingBody>
      { /* eslint-disable-next-line react/style-prop-object */ }
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
