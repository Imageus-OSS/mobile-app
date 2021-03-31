import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TextInput } from 'react-native';

function Input({ placeholder, secureTextEntry }) {
  return (
    <TextInput
      autoCapitalize="none"
      secureTextEntry={secureTextEntry}
      style={styles.textInput}
      placeholder={placeholder}
    />
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderColor: '#c9c9c9',
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    height: 40,
    padding: 10,
    marginBottom: 12,
  },
});

Input.defaultProps = {
  placeholder: '',
  secureTextEntry: false,
};

Input.propTypes = {
  placeholder: PropTypes.string,
  secureTextEntry: PropTypes.bool,
};

export default Input;
