import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import LandingPage from './pages/LandingPage';

export default function App() {
  return (
    <View style={styles.container}>
      <LandingPage />
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
    padding: 0,
    margin: 0,
  },
});
