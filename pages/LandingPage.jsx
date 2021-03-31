import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import LandingBody from '../components/LandingBody';
import LoginCard from '../components/LoginCard';

function LandingPage() {
  return (
    <ImageBackground source={require('../assets/App-Splash.png')} style={styles.image}>
      <LandingBody>
        <LoginCard />
      </LandingBody>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%',
  },
});

export default LandingPage;
