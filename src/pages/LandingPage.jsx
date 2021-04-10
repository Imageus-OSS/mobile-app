import React, { useState } from 'react';
import {
  ImageBackground, StyleSheet,
} from 'react-native';
import LandingBody from '../components/LandingBody';
import LoginCard from '../components/landing/LoginCard';
import RegisterCard from '../components/landing/RegisterCard';

function LoginModal({ onLogin }) {
  const [card, setCard] = useState('login');

  const cards = {
    login: <LoginCard switchCard={setCard} />,
    register: <RegisterCard switchCard={setCard} />,
  };

  return (
    <ImageBackground source={require('../../assets/App-Splash.png')} style={styles.image}>
      <LandingBody>
        {cards[card]}
      </LandingBody>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'stretch',
    justifyContent: 'center',
    width: '100%',
  },
});

export default LoginModal;
