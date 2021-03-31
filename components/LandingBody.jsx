import React from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { BlurView } from 'expo-blur';

function LandingBody({ children }) {
  return (
    <KeyboardAvoidingView
      behavior="position"
      style={styles.container}
    >
      <BlurView intensity={100} style={styles.blurContainer} tint="light">
        <Text style={styles.title}>ImageUs</Text>
        <Text style={styles.subtitle}>The easiest way to share images.</Text>
        {children}
      </BlurView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 24,
    color: 'gray',
  },
  blurContainer: {
    padding: 20,
    borderRadius: 20,
    overflow: 'hidden',
  },
  container: {
    borderRadius: 20,
    padding: 10,
  },
});

LandingBody.defaultProps = {
  children: <> </>,
};

LandingBody.propTypes = {
  children: PropTypes.node,
};

export default LandingBody;
