import {View, Text, Button} from 'react-native';
import React from 'react';
import {globalStyles} from '../styles/Global';
const ReviewDetails = ({navigation}: {navigation: any}) => {
  const pressHandler = () => {
    navigation.goBack();
  };
  return (
    <View style={globalStyles.container}>
      <Text>Review details</Text>
      <Button title="go back to About page" onPress={pressHandler} />
    </View>
  );
};

export default ReviewDetails;
