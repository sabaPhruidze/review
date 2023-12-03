import React, {useState} from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import Home from './screens/Home';
import About from './screens/About';
import ReviewDetails from './screens/ReviewDetails';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#eee',
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
        }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'gameZone',
            headerStyle: {
              backgroundColor: '#333',
            },
          }}
        />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen
          name="ReviewDetails"
          component={ReviewDetails}
          options={{
            title: 'Review Details',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
