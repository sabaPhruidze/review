import {View, Text} from 'react-native';
import React from 'react';
import {globalStyles} from '../styles/Global';

const Home = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home</Text>
    </View>
  );
};

export default Home;
