import React, { useState, useEffect } from 'react';import { View, Text, TouchableOpacity, StyleSheet,TextInput,Image} from 'react-native';
import ResendOtpTimer from './resend';import CountryPicker from 'react-native-country-picker-modal';
import Ionicons from 'react-native-vector-icons/Ionicons';import Toast from 'react-native-toast-message';

const CheckboxValidation = ({ onMobileNumber,isVerificationCompleted }) => {
  const [isChecked, setIsChecked] = useState(false);const [isOtpRequested, setIsOtpRequested] = useState(false);
  const [isGetOtp, setisGetOtp] = useState(false);const [mobileNumber, setMobileNumber] = useState('');const [countryCode, setCountryCode] = useState('');
  const [country, setCountry] = useState(null);const [withCountryNameButton, setWithCountryNameButton] = useState(false)
  const [showCountry, setShowCountry] = useState(false); const [withFlag, setWithFlag] = useState(true)
  const [withEmoji, setWithEmoji] = useState(true); const [withFilter, setWithFilter] = useState(true)
  const [withAlphaFilter, setWithAlphaFilter] = useState(false); const [withCallingCode, setWithCallingCode] = useState(false)
  const onSelect = (country: Country) => {
    setCountryCode(country.cca2)
    setCountry(country)
  }
  const handleCheckboxToggle = () => {
    setIsChecked(!isChecked);   
  };
  const handleSubmit = async () => {  
      if (isChecked) {
      console.log('Terms and Condition accepted');
      setIsOtpRequested(true);
      console.log('Country Code:', countryCode);
      console.log('Country:', country);
      console.log('Mobile Number:', mobileNumber);
      try {
        console.log('inside')
  const response = await fetch('http://192.168.29.34:5000/get-otp', {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      mobileNumber
    }),
  });
  if (response.ok) {
    const responseData = await response.json();
    console.log('Response:', responseData["message"]);
    Toast.show({
      type: 'success', 
      position:'top',
      text1: 'Otp Sent successfully', 
      visibilityTime: 2000,
      style: styles.toastContainer,
    });
    onMobileNumber(mobileNumber);
  } else {
    console.error('Error:', response.status);
  }
  } catch (error) {
  console.error('Error:', error);
  }    
    } else {
      console.log('Terms and Condition Agreement Required!');
    }
  };
  const handleOtpResend = () => {
    handleSubmit(); // Trigger the handleSubmit function again
  };
  const handleShowResendButtonChange = (value) => {
    setShowResendButton(value);
  };
  return (
    <View style={styles.container}>
    <View style={{flexDirection:'row',alignItems:'center',left:20,top:60}}>
      <TouchableOpacity style={{width:100, height:40,borderRadius:5,backgroundColor:'white',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
      <CountryPicker
        {...{
          countryCode,
          withFilter,
          withFlag,
          withCountryNameButton,
          withAlphaFilter,
          withCallingCode,
          withEmoji,
          onSelect,
        }}
        visible={showCountry}
      />
      <Text>+{country?.callingCode}</Text>
      <Ionicons name='caret-down-outline' size={18} color={'#0A0A67'}></Ionicons>
      </TouchableOpacity>
    </View>   
    <TextInput 
        value={mobileNumber}
        onChangeText={text => setMobileNumber(text)}keyboardType='numeric' maxLength={10} style={{width: 220, height:40, top:60, borderRadius:5, backgroundColor:'white',left:25,textAlign:'center',fontSize:20}}></TextInput>
      <TouchableOpacity
        style={styles.checkbox}
        onPress={handleCheckboxToggle}>
        {isChecked && <Text style={styles.checkmark}>✓</Text>}
      </TouchableOpacity>
      <TouchableOpacity >
        <Text style={{top:139, left:-256}}>I agree to the </Text>
          <Text style={{color: 'blue',
    textDecorationLine: 'underline', fontSize: 12,
    top: 121,left:-170,color:'white'}}>terms and conditions</Text>
        </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
    <Text style={styles.buttonText}>GET OTP</Text>
    </TouchableOpacity>
    {isOtpRequested &&
        <ResendOtpTimer onOtpResend={handleOtpResend} onShowResendButtonChange={handleShowResendButtonChange}
        isVerificationCompleted={isVerificationCompleted} />}
        <Toast ref={(ref) => Toast.setRef(ref)}  />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
   backgroundColor:'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    borderRadius: 5,
    right:256,
    top: 130
  },
  checkmark: {
    fontSize: 12,
  },
  button: {
    backgroundColor: '#0A0A67',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    width:180,
    height:40,
    right:374,
    alignSelf:'center',
    top:200
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    alignSelf:'center',
    fontStyle:'bold'
  },
  flagContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'gray',
  },
  flag: {
    fontSize: 20,
    marginRight: 5,
  },
  countryCode: {
    fontSize: 16,
  },
  toastContainer:{
    marginBottom: 'auto', // Push the toast message to the bottom
    marginTop: 1000,
  }


});

export default CheckboxValidation;