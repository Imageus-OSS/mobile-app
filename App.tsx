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
import { UserProvider } from './src/contexts/UserContextDispatch';
import { GroupsProvider } from './src/contexts/GroupsContextDispatch';

export default function App(): JSX.Element {
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
    void loadFonts();
  }, []);

  if (loadedFonts) {
    return (
      <NavigationContainer>
        <UserProvider>
          <GroupsProvider>
            <Stack />
          </GroupsProvider>
        </UserProvider>
      </NavigationContainer>
    );
  }
  return null;
}
