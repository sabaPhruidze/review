import React from 'react';
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function HomeStack() {
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

export default HomeStack;
