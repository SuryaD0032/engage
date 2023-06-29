import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal,Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation ,  useIsFocused } from '@react-navigation/native';
import  { useContext } from 'react';
import { DropdownContext } from './DropdownContext';
import {  useFocusEffect } from '@react-navigation/native';


const DropdownMenu = () => {
    const { isDropdownVisible, setIsDropdownVisible, selectedItem, setSelectedItem } = useContext(DropdownContext);
    
    const isFocused = useIsFocused();
  

  const handlePress = () => {
    setIsDropdownVisible(!isDropdownVisible);
    
      
  };

  useEffect(() => {
    if (!isFocused) {
      setIsDropdownVisible(false);
    }
  }, [isFocused]);

  useFocusEffect(
    React.useCallback(() => {
      setIsDropdownVisible(false);
    }, [])
  );

  const navigation = useNavigation();

  const handleItemPress = (item) => {
    setSelectedItem(item);
    setIsDropdownVisible(false);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.dropdown} onPress={handlePress} disabled={!isFocused}>
      <Image source={isDropdownVisible ? require('../assets/icons/privacy.png') : null} style={styles.Icons} />

       
      </TouchableOpacity>
      <Modal visible={isDropdownVisible} transparent animationType="slide">
        <View style={styles.dropdownModalContainer}>
          <View style={styles.dropdownItemsContainer}>
            <TouchableOpacity style={styles.dropdownItem} onPress={() => navigation.navigate('privacy')}>
            <Image source={require('../assets/icons/privacy.png')} style={styles.Icons} />
              <Text style={styles.dropdownItemText}>Privacy</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.dropdownItem} onPress={() => navigation.navigate('language')}>
            <Image source={require('../assets/icons/world.png')} style={styles.Icons} />
              <Text style={styles.dropdownItemText}>Language</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.dropdownItem} onPress={() => navigation.navigate('contact')}>
            <Image source={require('../assets/icons/contact-mail.png')} style={styles.Icons} />
              <Text style={styles.dropdownItemText}>Contact Us </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.dropdownItem} onPress={() => navigation.navigate('about')}>
            <Image source={require('../assets/icons/info.png')} style={styles.Icons} />
              <Text style={styles.dropdownItemText}>About Us</Text>
            </TouchableOpacity>
            <View style={styles.logoutcontainer}>
            <TouchableOpacity style={styles.logout} onPress={() => handleItemPress('logout')}>
            <Image source={require('../assets/icons/logout.png')} style={styles.logouticon} />
              <Text style={styles.logouttext}>LOGOUT</Text>
            </TouchableOpacity>
            </View>
          </View>
          
          <TouchableOpacity style={styles.closeButton} onPress={handlePress}>
            <Image source={require('../assets/icons/xmark.png')} style={styles.clearIcon} />
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
    
  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    height:31,
    width:31,
  },
  dropdownText: {
    marginRight: 10,
  },
  dropdownModalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  dropdownItemsContainer: {
    backgroundColor:"#f5fefd",
    borderRadius:20,
    paddingVertical: 20,
    width:380, 
    alignSelf:"center"
  },
  dropdownItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0)',
  },
  dropdownItemIcon: {
    marginRight: 0,
  },

  Icons:{
    width:20,
    height:20
  },
  
  dropdownItemText: {
    fontSize: 16,
    padding:20,
    fontFamily: 'Montserrat-Bold'
  },
  logoutContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
   
  },
  logout: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0,
    paddingHorizontal: 5,
    alignSelf:"center"
  },
  logouttext: {
    fontSize: 18,
    fontFamily: 'Montserrat-ExtraBold',
  },
  logouticon: {
    height: 20,
    width: 20,
    marginRight: 10,
  },
  closeButton: {
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: 'rgba(255, 255, 255, 0)', 
    
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
 
  clearButton: {
    marginLeft: 5,
    padding: 5,
    marginTop:15
  },
  clearIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
});

export default DropdownMenu;