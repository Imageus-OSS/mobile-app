import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

function MainPage() {
  const navigation = useNavigation();

  async function checkUser() {
    let jwt;
    let user;
    try {
      user = await AsyncStorage.getItem('user');
      jwt = await AsyncStorage.getItem('jwt');
    } catch (err) {
      navigation.navigate('Login');
    }

    if (!user || !jwt) {
      navigation.navigate('Login');
    }
  }

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <Text>Something goes here... idk</Text>
    </View>
  );
}

export default MainPage;
