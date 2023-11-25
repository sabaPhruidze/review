import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About</Text>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  text: {
    color: 'black',
  },
});
