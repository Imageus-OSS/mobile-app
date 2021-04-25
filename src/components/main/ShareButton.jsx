import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, StyleSheet } from 'react-native';

function ShareButton({ children, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    borderRadius: 30,
    height: 60,
    width: 60,
    right: 40,
    bottom: 40,
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,

    elevation: 24,
  },
});

ShareButton.defaultProps = {
  children: <> </>,
  onPress: () => {},
};

ShareButton.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
};

export default ShareButton;
