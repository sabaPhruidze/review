import {View, Text, Button} from 'react-native';
import React from 'react';
import {globalStyles} from '../styles/Global';
const About = ({navigation}: {navigation: any}) => {
  const pressHandler = () => {
    navigation.navigate('ReviewDetails');
  };
  return (
    <View style={globalStyles.container}>
      <Text>About</Text>
      <Button title="go to Review page" onPress={pressHandler} />
    </View>
  );
};

export default About;
