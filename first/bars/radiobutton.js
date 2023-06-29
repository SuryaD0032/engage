import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

const RadioButton = ({onSelectionChange}) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [textInputValue, setTextInputValue] = useState('');


  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    onSelectionChange(option === 'option1', textInputValue);
  };
  const handleTextInputChange = (value) => {
    setTextInputValue(value);
    if (selectedOption === 'option1') {
      onSelectionChange(true, value);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleOptionSelect('option1')} style={styles.radioButton}>
        {selectedOption === 'option1' && <View style={styles.radioDot} />}
        <Text style={{color:'#0A0A67',fontSize:12,alignSelf:'center',top:7}}>PAY</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleOptionSelect('option2')} style={styles.radioButton1}>
        {selectedOption === 'option2' && <View style={styles.radioDot} />}
        <Text style={{color:'#0A0A67',fontSize:12,alignSelf:'center',top:7}}>NON-PAY</Text>
      </TouchableOpacity>

      {selectedOption === 'option1' && (
        <TextInput
          style={styles.textInput}
          placeholder="Enter amount"
          keyboardType='numeric'
          maxLength={6}
          onChangeText={handleTextInputChange}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    bottom:38,
    right:80
  },
  radioButton1: {
    flexDirection: 'row',
    alignItems: 'center',
    bottom:54,
    left:80
  },
  radioDot: {
    width: 12,
    height: 12,
    borderRadius: 8,
    marginRight: 8,
    backgroundColor: '#0A0A67',
    top:7,
    color:'#0A0A67'
  },
  radioLabel: {
    fontSize: 30,    
  },
  textInput: {
    width: 100,
    height: 44,
    borderRadius: 20,
    backgroundColor:'white',
    shadowColor: 'black',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
   textAlign:'center',
   bottom:30
  },
});

export default RadioButton;
