import React from 'react';
import {
  StyleSheet, TouchableOpacity, Text, ViewStyle, TextStyle,
} from 'react-native';

type ButtonProps = {
  type?: 'default' | 'accent';
  variant?: 'primary' | 'danger';
  title: string;
  onPress?: () => void;
  style?: ViewStyle & TextStyle;
};

function Button({
  variant = 'primary', type = 'default', title, onPress, style,
}: ButtonProps): JSX.Element {
  const colorScheme = colorSchemes[type][variant];

  return (
    <TouchableOpacity style={[styles.button, colorScheme, style]} onPress={onPress}>
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

export default Button;
