import React from 'react';
import * as Speech from "expo-speech";
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  setInterval(()=>{
    Speech.speak(`I am a test`);
  }, 2000);

  return (
     <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
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
