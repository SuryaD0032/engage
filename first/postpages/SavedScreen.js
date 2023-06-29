import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SavedScreen = ({ savedEvents }) => {

  const logItemFromAsyncStorage = async () => {
    try {
      const uid = await AsyncStorage.getItem('UserID');
      setUid(uid);
    } catch (error) {
      console.log('Error retrieving item from Async Storage:', error);
    }
  };

  const [uid,setuid] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Saved Posts</Text>
      {savedEvents.map((event) => (
        <Text key={event} style={styles.eventItem}>
          {event}
        </Text>
      ))}
    </View>
  );
};

const mapStateToProps = (state) => ({
  savedEvents: state.savedEvents,
});

export default connect(mapStateToProps)(SavedScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  eventItem: {
    fontSize: 16,
    marginBottom: 10,
  },
});

