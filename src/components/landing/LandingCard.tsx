import React from 'react';
import {
  StyleSheet, View, Text, KeyboardAvoidingView,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

type LandingCardProps = {
  title: string;
  children: React.ReactNode;
  error: string | null;
};

const LandingCard = ({ title, children, error }: LandingCardProps): JSX.Element => (
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
