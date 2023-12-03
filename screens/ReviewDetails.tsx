import {View, Text, Button} from 'react-native';
import React from 'react';
import {globalStyles} from '../styles/Global';
const ReviewDetails = ({navigation, route}: {navigation: any; route: any}) => {
  // const pressHandler = () => {
  //   navigation.goBack();
  // };
  return (
    <View style={globalStyles.container}>
      <Text>{route.params.title}</Text>
      <Text>{route.params.body}</Text>
      <Text>{route.params.rating}</Text>
      {/* <Button title="go back to About page" onPress={pressHandler} /> */}
    </View>
  );
};

export default ReviewDetails;
