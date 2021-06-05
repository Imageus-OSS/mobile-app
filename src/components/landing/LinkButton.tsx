import React from 'react';
import { Text, StyleSheet } from 'react-native';

type LinkButtonProps = {
  title: string;
  onPress?: () => void;
  children?: React.ReactNode; 
};

function LinkButton({ title, onPress, children }: LinkButtonProps): JSX.Element {
  return (
    <Text style={styles.button} onPress={onPress}>
      {title}
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 13,
    fontSize: 15,
    color: '#007AFF',
    textAlign: 'center',
  },
});

export default LinkButton;
