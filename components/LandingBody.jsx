import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, StyleSheet, KeyboardAvoidingView,
} from 'react-native';

function LandingBody({ children }) {
  return (
    <KeyboardAvoidingView
      behavior="position"
      style={styles.container}
    >
      <View>
        <Text style={styles.title}>ImageUs</Text>
        <Text style={styles.subtitle}>The easiest way to share images.</Text>
        {children}
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 54,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 32,
    color: 'gray',
  },
});

LandingBody.defaultProps = {
  children: <> </>,
};

LandingBody.propTypes = {
  children: PropTypes.node,
};

export default LandingBody;
