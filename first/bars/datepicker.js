import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Modal, TouchableWithoutFeedback } from 'react-native';
import DatePicker from 'react-native-modern-datepicker';
import moment from 'moment';

const MyDatePicker = ({onDateSelect}) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);

  useEffect(() => {
    const currentDateFormatted = moment().format('YYYY-MM-DD');
    setCurrentDate(currentDateFormatted);
  }, []);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    onDateSelect(date);
  };

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };

  const closeModal = () => {
    setShowDatePicker(false);
  };

  return (
    <View style={styles.containerWrapper}> <View style={styles.container}>
      <TouchableOpacity onPress={toggleDatePicker}>
        <Text style={{color:'gray'}}>Select Date</Text>
      </TouchableOpacity>
      <Modal
        visible={showDatePicker}
        transparent
        animationType="fade" >
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={styles.modalOverlay} />
        </TouchableWithoutFeedback>
        <View style={styles.modalContainer}>
          <View style={styles.datePickerContainer}>
            <DatePicker
              current={currentDate}
              selected={selectedDate}
              mode="calendar"
              minuteInterval={30}
              onSelectedChange={handleDateSelect}
              minDate={currentDate}   /> </View>
          <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity></View>
      </Modal>
      <TextInput style={{ shadowColor: 'black',
        shadowOffset: { width: 4, height: 4 },   shadowOpacity: 0.2,   shadowRadius: 4,  elevation: 4,  backgroundColor:'white',
        height:44,  borderRadius:20, width:100, textAlign:'center', color:'gray'}} 
        value={selectedDate} editable={false} />
    </View> </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  datePickerContainer: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    elevation: 5,
    padding: 10,
    width:300,
    height:300,
    bottom:200
  },
  closeButton: {
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#F4722B',
    borderRadius: 5,
    bottom:100
  },
  closeButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  containerWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 110 
  },
});

export default MyDatePicker;




