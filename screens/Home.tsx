import {View, Text, Button} from 'react-native';
import React from 'react';
import {globalStyles} from '../styles/Global';

const Home = ({navigation}: {navigation: any}) => {
  const pressHandler = () => {
    navigation.navigate('About');
  };
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home</Text>
      <Button title="go to review" onPress={pressHandler} />
    </View>
  );
};

export default Home;
