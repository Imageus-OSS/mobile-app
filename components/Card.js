import React from 'react';
import { StyleSheet, View, Text, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import Button from "./Button";
import Input from "./Input";

const Card = ({ title }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Input />
        <Button title="Button Test" />
      </View>
    </KeyboardAvoidingView>

  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 48,
    fontWeight: "600",
    margin: 20,
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: "75%",
    padding: 20,
  },
})

export default Card;
