import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CheckboxValidation from '../pages/checkbox';
import OtpInput from '../pages/authentication';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import ResendOtpTimer from '../pages/resend';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen() {

        const [otp, setOtpValue] = useState('');
        const [mobileNumber, setMobileNumber] = useState('');
        const [isNumberFetched, setIsNumberFetched] = useState(false);
        const [showResendButton, setShowResendButton] = useState(false);
        const [isVerificationCompleted, setIsVerificationCompleted] = useState(false); 

        const navigation = useNavigation();
      
        const handleOtpChange = (otp) => {
          setOtpValue(otp);
        };
        const handleMobileNumber = (mobileNumber) => {
            console.log('Mobile Number:', mobileNumber);
            setMobileNumber(mobileNumber);
            setIsNumberFetched(true);
            console.log('Fetched the number')
          };

          const handleShowResendButtonChange = (value) => {
            setShowResendButton(value);
          };

    const verifyotp = async () => {        
        try {
      const response = await fetch('http://192.168.29.34:5000/verify-otp', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',  },
      body: JSON.stringify({
        otp,
        mobileNumber   
      }),   });
      if (response.ok) {
      const responseData = await response.json();
      console.log(responseData);
      console.log('Response:', responseData["message"]);
      if (responseData["message"] === "done") {
        const uid = responseData.data.uid.toString();
        AsyncStorage.setItem('UserID', uid);
        console.log(uid);
        navigation.navigate('index');
        setIsVerificationCompleted(true);
    } else {   console.log('Response message is not "done"');  }
      } else { console.error('Error:', response.status); }
      } catch (error) {   console.error('Error:', error);  } };
      useEffect(() => {
        if (navigation.isFocused()) {
          setShowResendButton(false);
          setMobileNumber('');
          setOtpValue('');
          setIsNumberFetched(false);
          setIsVerificationCompleted(false);
        }
      }, [navigation]);

  return (

    <LinearGradient  colors={['#0A0A67', 'rgba(12, 12, 48, 0)']}
    style={styles.container}>
    <View>
    <Text style={{color: 'white', fontStyle: 'italic',fontSize:20, top:60, left:30}}>Are You Ready To</Text>
    <Text style={{color: 'white', fontStyle: 'italic',fontSize:20, top:60,left:30}}>Engage.....</Text>
    <Image source={require('../assets/Group.png')} style={{width: 100,height:100,left: 240,bottom:15}}></Image>
    <Text style={styles.l1}>Enter Your Mobile No</Text>
    <CheckboxValidation onMobileNumber={handleMobileNumber}
     onShowResendButtonChange={handleShowResendButtonChange}
     setShowResendButton={setShowResendButton}
     isVerificationCompleted={isVerificationCompleted}
     />
    <OtpInput onOtpChange={handleOtpChange}/>
    {isNumberFetched && !showResendButton && (
          <TouchableOpacity style={styles.button} onPress={verifyotp}>
            <Text style={styles.buttonText}>VERIFY OTP</Text>
          </TouchableOpacity>
        )}
    </View>
    </LinearGradient>     
  );
}


const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  l1:{
   color: 'white',fontStyle: 'bold',fontSize:20, top:30,left:30 
  }, 
  button: {
    backgroundColor: '#0A0A67',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    width:180,
    height:40,
    alignSelf:'center',
    top: 270
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    alignSelf:'center',
    fontStyle:'bold'
  },


})
;
