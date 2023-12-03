import {View, Text, FlatList, Touchable, TouchableOpacity} from 'react-native';
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

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ReviewDetails', item)}>
            <Text style={globalStyles.titleText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Home;
