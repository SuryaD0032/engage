import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity,ScrollView } from 'react-native';

const CardView = ({handleSport,handleEnter,handleSpecial}) => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.card}
        onPress={handleSport}
      >
        <Image source={require('../assets/icons/sports.jpeg')} style={styles.image} resizeMode='contain' />
        <Text style={styles.name1}>SPORTS</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={handleEnter}
      >
        <Image source={require('../assets/icons/entertainments.jpg')} style={styles.image} resizeMode='contain' />
        <Text style={styles.name2}>ENTERTAINMENT</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={handleSpecial}
      >
        <Image source={require('../assets/icons/specialevents.jpg')} style={styles.image} resizeMode='contain' />
        <Text style={styles.name3}>SPECIAL EVENTS</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.extraPadding} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    content:{
     alignItems: 'center',
    },
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 10,
  },
  card: {
    width: 334,
    height: 157,
    borderRadius: 10,
    backgroundColor: '#F5FEFD',
    marginBottom: 10,
    overflow: 'hidden',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    shadowColor: 'black',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    borderRadius:10,
    borderColor:'#E1E8ED'
  },
  image: {
    width: 110,
    height: 120,
    left:24,
    borderWidth:1,
    borderRadius:10

  },
  name1: {
    padding: 18,
    fontSize: 18,
    fontFamily: 'Montserrat-ExtraBoldItalic',
    right:50
  },
  name2: {
    padding: 18,
    fontSize: 18,
    fontFamily: 'Montserrat-ExtraBoldItalic',
    right:0
  },
  name3: {
    padding: 18,
    fontSize: 18,
    fontFamily: 'Montserrat-ExtraBoldItalic',
    right:0  },
  extraPadding: {
    height: 60, 
  },
});

export default CardView;

