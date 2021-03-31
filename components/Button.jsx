import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

function Button({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007AFF',
    color: 'white',
    borderRadius: 10,
    minHeight: 40,
    minWidth: 100,
    padding: 10,
    fontSize: 24,
  },
});

Button.defaultProps = {
  onPress: () => {},
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func,
};

export default Button;
