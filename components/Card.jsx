import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet, View, Text, KeyboardAvoidingView,
} from 'react-native';

const Card = ({ title, children }) => (
  <KeyboardAvoidingView
    behavior="position"
    style={styles.container}
  >
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View>
        {children}
      </View>
    </View>
  </KeyboardAvoidingView>
);

Card.defaultProps = {
  children: <> </>,
};

Card.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: '600',
    margin: 20,
    textAlign: 'left',
    width: '100%',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '100%',
    padding: 10,
  },
});

export default Card;
