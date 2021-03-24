import React from 'react';
import {StyleSheet, View} from "react-native";

function TextInput({ placeholder }) {
  return (
    <TextInput style={styles.textInput} placeholder={placeholder} />
  )
}

const styles = StyleSheet.create({
  textInput: {
    borderColor: 'gray',
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

export default TextInput;
