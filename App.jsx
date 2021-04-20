import React, { useEffect, useState, useReducer } from 'react';
import * as Font from 'expo-font';
import {
  Poppins_600SemiBold, Poppins_500Medium, Poppins_400Regular,
} from '@expo-google-fonts/poppins';
import {
  DMSans_500Medium, DMSans_400Regular, DMSans_700Bold,
} from '@expo-google-fonts/dm-sans';
import { NavigationContainer } from '@react-navigation/native';
import Stack from './src/pages/Navigation';
import UserContext from './src/contexts/UserContext';
import GroupContextDispatch, { groupReducer } from './src/contexts/GroupDispatchContext';
import GroupStateContext from './src/contexts/GroupStateContext';

export default function App() {
  const [loadedFonts, setLoadedFonts] = useState(false);
  const [groupData, dispatch] = useReducer(groupReducer, {
    groups: [],
    images: [],
    index: -1,
  });

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
      <UserContext.Provider>
        <GroupContextDispatch.Provider value={dispatch}>
          <GroupStateContext.Provider value={groupData}>
            <NavigationContainer>
              <Stack />
            </NavigationContainer>
          </GroupStateContext.Provider>
        </GroupContextDispatch.Provider>
      </UserContext.Provider>
    );
  }
  return null;
}
