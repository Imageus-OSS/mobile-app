import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet, View, Text, KeyboardAvoidingView,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const LandingCard = ({ title, children, error }) => (
  <KeyboardAvoidingView
    style={styles.container}
  >
    <View style={styles.container}>
      {
        error && (
          <View style={styles.errorView}>
            <Text style={styles.errorText}>{error}</Text>
            <AntDesign name="close" size={24} color="white" />
          </View>
        )
      }
      <Text style={styles.title}>{title}</Text>
      <View>
        {children}
      </View>
    </View>
  </KeyboardAvoidingView>
);

LandingCard.defaultProps = {
  children: <> </>,
  error: undefined,
};

LandingCard.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
  error: PropTypes.string,
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 24,
    fontWeight: '600',
    margin: 20,
    textAlign: 'center',
    width: '100%',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '100%',
    padding: 10,
  },
  errorView: {
    backgroundColor: 'red',
    borderRadius: 10,
    width: '100%',
    height: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    maxWidth: '100%',
  },
  errorText: {
    fontSize: 16,
    color: 'white',
  },
});

export default LandingCard;
