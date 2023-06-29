import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Slideshow from '../bars/slideshow';
import CardView from '../cards&buttons/cardview';
import { useNavigation } from '@react-navigation/native';
import SportsCard from '../cards&buttons/SportsCard';
import SpecialCard from '../cards&buttons/SpecialCard';
import EnterCard from '../cards&buttons/EnterCard';

const HomeScreen = ({navigation}) => {
  const images = [
    require('../assets/icons/sports.jpeg'),
    require('../assets/icons/entertainments.jpg'),
    require('../assets/icons/specialevents.jpg'),
  ];
  const handleSport = () => {
    navigation.navigate('sports');
  }
  const handleSpecial = () => {
    navigation.navigate('special');
  }
  const handleEnter = () => {
    navigation.navigate('enter');
  };
  return (
    <View style={styles.container}>
      <Slideshow images={images} />
      <View style={styles.contentContainer} >
      <CardView handleSport={handleSport} handleEnter={handleEnter} handleSpecial={handleSpecial} />      
      </View>  
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default HomeScreen;