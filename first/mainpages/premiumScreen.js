import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import LottieView from 'lottie-react-native';

const PremiumScreen = () => {
  

  return (
    <View style={styles.container}>
     <LottieView
        source={require('../assets/animation/comingsoon.json')}
        autoPlay
        loop
        style={styles.animation}
      />
    
    </View>
  );
};

const styles = StyleSheet.create({
  animation: {
    width: 100,
    height: 500,
  },
  container: {
    flex: 1,
    alignSelf:"center",
    justifyContent:"center",
    backgroundColor:"#ffffff"
      },
 
});

export default PremiumScreen;