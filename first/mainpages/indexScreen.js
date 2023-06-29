import { StyleSheet, Text, View,StatusBar } from 'react-native';
import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Tabs from '../bars/bottomnavbar';
import TopNavigationBar from '../bars/topbar';
import { useNavigationState } from '@react-navigation/native';
import ProfileScreen from './ProfileScreen';
import { useState } from 'react';
import otherProf from '../userpages/otherprofile';
import notification from '../userpages/notification';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

export default function IndexScreen() {
   const navigation = useNavigation();
    const navigationState = useNavigationState((state) => state);
    console.log(navigationState);
   
    const handleprofile = () => {
      navigation.navigate('Profile');
    };
    const handlenotification = () => {
      navigation.navigate('notification');
    };
    const handlesearch = () => {
      navigation.navigate('search');
    };
    const logItemFromAsyncStorage = async () => {
      try {
        const uid = await AsyncStorage.getItem('UserID');
        console.log(uid);
      } catch (error) {
        console.log('Error retrieving item from Async Storage:', error);
      }
    };
    
    logItemFromAsyncStorage();
  return (
    <View style={styles.container}>
    <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent={true} />
    <TopNavigationBar handleprofile={handleprofile} handlenotification={handlenotification} handlesearch={handlesearch} />
    <Tabs navigationState={navigationState} />
  </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
      },

})
;