import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import CheckboxValidation from './checkbox';

const ResendOtpTimer = ({ onOtpResend,onShowResendButtonChange,isVerificationCompleted }) => {
  const [timer, setTimer] = useState(60);
  const [showResendButton, setShowResendButton] = useState(false);

  useEffect(() => {
    let interval = null;

    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else {
      setShowResendButton(true);
      clearInterval(interval);
      if(!isVerificationCompleted){
        onShowResendButtonChange(true);
      }
     
    }

    return () => clearInterval(interval);
  }, [timer]);

  const handleResendOtp = () => {
    // Perform logic to resend OTP
    console.log('Resending OTP...');
    setTimer(60);
    setShowResendButton(false);
    onOtpResend(); 
    onShowResendButtonChange(false);
  };

  return (
    <View style={styles.container}>
      {showResendButton ? (
        <TouchableOpacity style={{flexDirection: 'row',}} onPress={handleResendOtp}>
        <Text style={{right:560, top:400}}>Didn't receive otp? </Text>
          <Text style={styles.resendButton}>Resend OTP</Text>
        </TouchableOpacity>
      ) : (
        <Text style={styles.timer}>{timer} seconds remaining</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
  },
  resendButton: {
    color: 'blue',
    textDecorationLine: 'underline',
    right:560,
    top:400
  },
  timer: {
    fontSize: 14,
    right:530,
    color:'red',
    top:400
  },
});

export default ResendOtpTimer;