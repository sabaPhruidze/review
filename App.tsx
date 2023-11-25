import React, {useState} from 'react';

import {StatusBar, StyleSheet, Text, View} from 'react-native';
import Home from './screens/Home';
import About from './screens/About';
import ReviewDetails from './screens/ReviewDetails';

function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <Home />
      <About />
      <ReviewDetails />
      <Text style={styles.text}>saba</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    textAlign: 'center',
    fontFamily: 'NunitoBold',
  },
});

export default App;
