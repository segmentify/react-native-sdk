import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import {NativeBaseProvider} from 'native-base';
import {Router} from './src/router/Router';
import {ToastProvider} from 'react-native-toast-notifications';

export default function App() {
  return (
    <NativeBaseProvider config={{suppressColorAccessibilityWarning: true}} disableSSRWarning>
      <SafeAreaView style={styles.container}>
        <ToastProvider
          renderType={{
            custom_toast: toast => (
              <View
                style={{
                  minWidth: '80%',
                  maxWidth: '95%',
                  paddingHorizontal: 15,
                  paddingVertical: 10,
                  backgroundColor: '#fff',
                  marginVertical: 4,
                  borderRadius: 8,
                  borderColor: '#00C851',
                  borderWidth: 1,
                  borderLeftColor: '#00C851',
                  borderLeftWidth: 6,
                  justifyContent: 'center',
                  paddingLeft: 16,
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    color: '#333',
                    fontWeight: 'bold',
                  }}>
                  {toast.data.title}
                </Text>
                {toast.data.messages &&
                  Object.keys(toast.data.messages).map((key, index) => {
                    return (
                      <Text
                        key={index}
                        style={{color: '#7d7d7d', fontSize: 14, marginTop: 2}}>
                        {key}: {toast.data.messages[key]}
                      </Text>
                    );
                  })}
              </View>
            ),
          }}>
          <Router />
        </ToastProvider>
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
