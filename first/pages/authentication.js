import React, { useState, useRef } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const OtpInput = ({ onOtpChange }) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = useRef([]);

  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Focus on the next input box
    if (value !== '' && index < 3) {
      inputRefs.current[index + 1].focus();
    }

     // Pass the updated OTP value to the parent component
     const otpValue = newOtp.join('');
     onOtpChange(otpValue);
  };

  const handleOtpKeyPress = (index, key) => {
    // Remove value and focus on the previous input box when backspace is pressed
    if (key === 'Backspace' && index > 0 && otp[index] === '') {
      const newOtp = [...otp];
      newOtp[index - 1] = '';
      setOtp(newOtp);
      inputRefs.current[index - 1].focus();

       // Pass the updated OTP value to the parent component
       const otpValue = newOtp.join('');
       onOtpChange(otpValue);
    }
  };

  return (
    <View style={styles.container}>
      {otp.map((value, index) => (
        <TextInput
          key={index}
          ref={(ref) => (inputRefs.current[index] = ref)}
          style={[
            styles.input,
            value === '' && styles.emptyInput, 
          ]}
          value={value}
          maxLength={1}
          keyboardType="numeric"
          onChangeText={(text) => handleOtpChange(index, text)}
          onKeyPress={({ nativeEvent }) =>
            handleOtpKeyPress(index, nativeEvent.key)
          }
        />
      ))}
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent:'space-between',
    paddingHorizontal:60,
    top:230,

  },
  input: {
    width: 41,
    height: 41,
    fontSize: 24,
    backgroundColor:'white',
    borderRadius: 5,
    textAlign: 'center',
  },

  emptyInput: {
    borderColor: 'red',
    borderWidth: 1,
  },
});

export default OtpInput;
