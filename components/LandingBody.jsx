import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, StyleSheet, KeyboardAvoidingView,
} from 'react-native';
import { BlurView } from 'expo-blur';

function LandingBody({ children }) {
  return (
    <KeyboardAvoidingView
      behavior="position"
      style={styles.container}
    >
      <BlurView intensity={100} style={styles.blurContainer} tint="light">
        <View style={styles.backingView}>
          <Text style={styles.title}>ImageUs</Text>
          <Text style={styles.subtitle}>The easiest way to share images.</Text>
          {children}
        </View>
      </BlurView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 32,
  },
  subtitle: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 18,
    color: 'gray',
  },
  blurContainer: {
    borderRadius: 20,
    overflow: 'hidden',
  },
  container: {
    borderRadius: 20,
    padding: 10,
  },
  backingView: {
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
});

LandingBody.defaultProps = {
  children: <> </>,
};

LandingBody.propTypes = {
  children: PropTypes.node,
};

export default LandingBody;
