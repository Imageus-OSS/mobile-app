import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Card from "./components/Card";
import LoginCard from "./components/LoginCard";
import RegisterCard from "./components/RegisterCard";

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <LoginCard />
        <RegisterCard />
        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
