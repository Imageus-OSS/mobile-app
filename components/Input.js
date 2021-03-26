import React from 'react';
import {StyleSheet, TextInput} from "react-native";

function Input({ placeholder, secureTextEntry }) {
  return (
    <TextInput autoCapitalize="none" secureTextEntry={secureTextEntry} style={styles.textInput} placeholder={placeholder} />
  )
}

const styles = StyleSheet.create({
  textInput: {
    borderColor: '#c9c9c9',
    backgroundColor: 'white',
    borderRadius: 10,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 40,
    minWidth: '75%',
    padding: 10,
    marginBottom: 12,
  },
});

export default Input;
