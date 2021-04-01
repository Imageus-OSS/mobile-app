import React from 'react';
import { Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

function LinkButton({ title, onPress, children }) {
  return (
    <Text style={styles.button} onPress={onPress}>
      {title}
      {children}
    </Text>
  );
}

LinkButton.defaultProps = {
  onPress: () => {},
  children: <></>,
};

LinkButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  children: PropTypes.node,
};

const styles = StyleSheet.create({
  button: {
    padding: 13,
    fontSize: 15,
    color: '#007AFF',
    textAlign: 'center',
  },
});

export default LinkButton;
