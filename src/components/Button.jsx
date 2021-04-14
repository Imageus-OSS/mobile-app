import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

function Button({
  variant, type, title, onPress,
}) {
  const colorScheme = colorSchemes[type][variant];

  return (
    <TouchableOpacity style={[styles.button, colorScheme]} onPress={onPress}>
      <Text style={[styles.buttonText, { color: colorScheme.color }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const colorSchemes = {
  accent: {
    primary: {
      color: '#0058b1',
      backgroundColor: 'rgba(101,177,255,.2)',
    },
    danger: {
      color: 'red',
      backgroundColor: '#ffc2c2',
    },
  },
  default: {
    primary: {
      color: 'white',
      backgroundColor: '#007AFF',
    },
    danger: {
      color: 'white',
      backgroundColor: 'red',
    },
  },
};

const styles = StyleSheet.create({
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'DMSans_700Bold',
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007AFF',
    color: 'white',
    borderRadius: 10,
    minHeight: 40,
    minWidth: '100%',
    padding: 10,
    fontSize: 24,
    margin: 5,
  },
});

Button.defaultProps = {
  onPress: () => {},
  variant: 'primary',
  type: 'default',
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['primary', 'danger']),
  onPress: PropTypes.func,
  type: PropTypes.oneOf(['default', 'accent']),
};

export default Button;
