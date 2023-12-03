// import React, {useState} from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
// import Home from './screens/Home';
// import About from './screens/About';
// import ReviewDetails from './screens/ReviewDetails';

// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeStack from './routes/HomeStack';

// const Stack = createNativeStackNavigator();

function App() {
  return <HomeStack />;
}

export default App;
