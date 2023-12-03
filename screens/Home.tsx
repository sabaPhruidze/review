import {View, Text, Button} from 'react-native';
import React, {useState} from 'react';
import {globalStyles} from '../styles/Global';

const Home = ({navigation}: {navigation: any}) => {
  interface Review {
    title: string;
    rating: number;
    body: string;
    key: number;
  }
  const [reviews, setReviews] = useState<Review[]>([
    {
      title: 'Zelda Breath of Fresh Air',
      rating: 5,
      body: 'lorem ipsum',
      key: 1,
    },
    {
      title: 'Gotta Catch Them All (Again)',
      rating: 4,
      body: 'lorem ipsum',
      key: 2,
    },
    {
      title: 'Not So "Final" Fantasy',
      rating: 3,
      body: 'lorem ipsum',
      key: 3,
    },
  ]);
  const pressHandler = () => {
    navigation.push('About');
  };
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home</Text>
      <Button title="go to About page" onPress={pressHandler} />
    </View>
  );
};

export default Home;
