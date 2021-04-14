import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import {
  Poppins_600SemiBold, Poppins_500Medium, Poppins_400Regular,
} from '@expo-google-fonts/poppins';
import {
  DMSans_500Medium, DMSans_400Regular, DMSans_700Bold,
} from '@expo-google-fonts/dm-sans';
import { NavigationContainer } from '@react-navigation/native';
import Stack from './src/pages/Navigation';

export default function App() {
  const [loadedFonts, setLoadedFonts] = useState(false);

  async function loadFonts() {
    await Font.loadAsync({
      Poppins_500Medium,
      Poppins_600SemiBold,
      Poppins_400Regular,
      DMSans_500Medium,
      DMSans_400Regular,
      DMSans_700Bold,
    });

    setLoadedFonts(true);
  }

  useEffect(() => {
    loadFonts();
  }, []);

  if (loadedFonts) {
    return (
      <NavigationContainer>
        <Stack />
      </NavigationContainer>
    );
  }
  return null;
}
