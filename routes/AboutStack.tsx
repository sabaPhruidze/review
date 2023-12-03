import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import About from '../screens/About';

const Stack = createNativeStackNavigator();

function AboutStack() {
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
          name="About"
          component={About}
          options={{
            title: 'About gameZone',
            headerStyle: {
              backgroundColor: '#333',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AboutStack;
