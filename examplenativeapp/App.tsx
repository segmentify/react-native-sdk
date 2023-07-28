import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NativeBaseProvider} from 'native-base';
import {Router} from './src/router/Router';

export default function App() {
  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.container}>
        <Router />
      </SafeAreaView>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFF',
  },
});
