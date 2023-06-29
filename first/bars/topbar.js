import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet,Text } from 'react-native';

const TopNavigationBar = ({handleprofile,handlenotification,handlesearch}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.button, { marginRight: -20,}]} onPress={handleprofile} >
        <Image source={require('../assets/icons/profile.png')} style={styles.icon}/>
      </TouchableOpacity>
      <Text style={styles.text}>ENGAGE</Text>
      <View style={styles.rightIconsContainer}>
        <TouchableOpacity style={[styles.button, styles.notificationButton]} onPress={handlenotification}>
          <Image source={require('../assets/icons/notification.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handlesearch}>
          <Image source={require('../assets/icons/search.png')} style={styles.sicon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#E1E8ED',
    top:0,
    height:61,
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20
  },
  button: {
    padding: 8,
  },
  icon: {
    width: 25,
    height: 25, },
  sicon: {
    width:25,
    height:25,},
  text: {
     fontFamily:'Montserrat-ExtraBold',fontSize: 24,
     marginRight:20,
     color:'#0a0a67'
  },
  rightIconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationButton: {
    marginRight: 8,
  },
});

export default TopNavigationBar;
