import React from 'react';
import PropTypes from 'prop-types';
import {
  View, ViewPropTypes, StyleSheet, TextInput, Text,
} from 'react-native';

function Input({
  placeholder, secureTextEntry, style, onChangeText, value, error,
}) {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        autoCapitalize="none"
        secureTextEntry={secureTextEntry}
        style={[styles.textInput, style]}
        placeholder={placeholder}
        onChangeText={onChangeText}
      />
      {error
        ? <Text style={styles.errorView}>{error}</Text> : null}
    </View>
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
  },
  errorView: {
    margin: 5,
    color: 'red',
  },
  container: {
    marginBottom: 12,
  },
});

Input.defaultProps = {
  value: '',
  error: null,
  placeholder: '',
  secureTextEntry: false,
  style: {},
  onChangeText: () => {},
};

Input.propTypes = {
  value: PropTypes.string,
  onChangeText: PropTypes.func,
  placeholder: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  style: ViewPropTypes.style,
  error: PropTypes.string,
};

export default Input;
