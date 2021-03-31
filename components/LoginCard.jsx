import React from 'react';
import { StyleSheet } from 'react-native';
import Card from './Card';
import Input from './Input';
import Button from './Button';

function LoginCard() {
  return (
    <Card title="Login">
      <Input placeholder="Username" style={styles.input} />
      <Input placeholder="Password" style={styles.input} secureTextEntry />
      <Button title="Login" />
    </Card>
  );
}

const styles = StyleSheet.create({
  input: {
    borderColor: 'transparent',
    backgroundColor: 'rgba(219, 219, 219, 0.5)',
  },
});

export default LoginCard;
