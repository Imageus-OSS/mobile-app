import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
import {
  Poppins_600SemiBold, Poppins_500Medium, Poppins_400Regular,
} from '@expo-google-fonts/poppins';
import MainPage from './src/pages/MainPage';

export default function App() {
  const [loadedFonts, setLoadedFonts] = useState(false);

  async function loadFonts() {
    await Font.loadAsync({
      Poppins_500Medium,
      Poppins_600SemiBold,
      Poppins_400Regular,
    });

    setLoadedFonts(true);
  }

  useEffect(() => {
    loadFonts();
  }, []);

  if (loadedFonts) {
    return (
      <View style={styles.container}>
        <MainPage />
        { /* eslint-disable-next-line react/style-prop-object */ }
        <StatusBar style="auto" />
      </View>
    );
  }
  return null;
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
