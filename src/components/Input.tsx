import React from 'react';
import {
  View, StyleSheet, TextInput, Text, TextStyle
} from 'react-native';
import { FormikProps } from 'formik';

type InputProps = {
  placeholder: string;
  secureTextEntry: boolean;
  style: TextStyle;
  onChangeText: (value: string) => void;
  value: string;
  error: string | null;
  autoCorrect: boolean;
} & FormikProps<Record<string, string>>;

function Input({
  placeholder, secureTextEntry = false, style, onChangeText, value, error, autoCorrect = true,
}: Partial<InputProps>): JSX.Element {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        autoCapitalize="none"
        secureTextEntry={secureTextEntry}
        style={[styles.textInput, style]}
        placeholder={placeholder}
        onChangeText={onChangeText}
        autoCorrect={autoCorrect}
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

export default Input;
