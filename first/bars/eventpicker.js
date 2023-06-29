import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const DropdownPicker = ({ onCategoryChange, onSubCategoryChange }) => {
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');

  const handleCategoryChange = (value) => {
    setCategory(value);
    setSubCategory('');
    onCategoryChange(value);
  };

  const handleSubCategoryChange = (value) => {
    setSubCategory(value);
    onSubCategoryChange(value);
  };

  const subCategories = {
    sports: ['sport-1', 'sport-2', 'sport-3', 'sport-4', 'sport-5'],
    entertainment: ['entertainment-1', 'entertainment-2', 'entertainment-3', 'entertainment-4', 'entertainment-5'],
    specialevents: ['specialevent-1', 'specialevent-2', 'specialevent-3', 'specialevent-4', 'specialevent-5'],
  };

  const categoryOptions = [
    { label: 'Sports', value: 'sports' },
    { label: 'Entertainment', value: 'entertainment' },
    { label: 'Special Events', value: 'specialevents' },
  ];

  const subCategoryOptions = subCategories[category] || [];

  return (
    <View style={styles.container}>
    <View style={styles.inputContainer}>
      <RNPickerSelect
        placeholder={{ label: 'Select', value: null }}
        onValueChange={handleCategoryChange}
        items={categoryOptions}
        value={category}
        style={{
      inputIOS: styles.input,
      inputAndroid: styles.input,}}
      />
      </View>
      <View style={styles.inputContainer1}>

      <RNPickerSelect
        placeholder={{ label: 'Select Subcategory', value: null }}
        onValueChange={handleSubCategoryChange}
        items={subCategoryOptions.map((item) => ({ label: item, value: item }))}
        value={subCategory}
      />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer1: {
    width: 150,
    height: 44,
    borderRadius: 20,
    backgroundColor: 'white',
    paddingHorizontal: 8,
    marginBottom: 16,
    alignItems: 'center',
    alignSelf: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    left:85,
    bottom:51,
    fontSize:12,

  },
  inputContainer: {
    width: 150,
    height: 44,
    borderRadius: 20,
    backgroundColor: 'white',
    paddingHorizontal: 8,
    marginBottom: 16,
    alignItems: 'center',
    alignSelf: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    right:85,
    top:8,
  },
  input: {
    fontSize: 4, 
    fontWeight:'100'
  },
});

export default DropdownPicker;
