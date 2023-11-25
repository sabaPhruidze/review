import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const ReviewDetails = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Review details</Text>
    </View>
  );
};

export default ReviewDetails;

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  text: {
    color: 'black',
  },
});
