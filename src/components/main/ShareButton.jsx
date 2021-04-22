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
    right: 20,
    bottom: 20,
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
