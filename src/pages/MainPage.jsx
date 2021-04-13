import React, { useEffect, useState } from 'react';
import { View, Modal, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginModal from './LandingPage';

function MainPage() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  async function checkUser() {
    try {
      await AsyncStorage.getItem('user');
      await AsyncStorage.getItem('jwt');
    } catch (err) {
      setLoggedIn(false);
    }
  }

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <View style={{ backgroundColor: 'white' }}>
      <Modal
        presentationStyle="formSheet"
        animationType="slide"
        visible={isLoggedIn}
      >
        <LoginModal onLogin={() => setLoggedIn(false)} />
      </Modal>
      <Text>Something goes here... idk</Text>
    </View>
  );
}

export default MainPage;
