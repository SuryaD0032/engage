import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { saveEvent, unsaveEvent } from '../redux/actions';
import store from '../redux/store';
import AsyncStorage from '@react-native-async-storage/async-storage';

const NewScreen = ({ savedEvents, saveEvent, unsaveEvent }) => {
  const logItemFromAsyncStorage = async () => {
    try {
      const uid = await AsyncStorage.getItem('UserID');
      setuid(uid);
    } catch (error) {
      console.log('Error retrieving item from Async Storage:', error);
    }
  };
  logItemFromAsyncStorage();
  const[uid,setuid] = useState('');

  const fetchData = async () => {
    try {
      const response = await fetch('http://192.168.29.34:5000/event-details', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          category: '',
        }),
      });
      const data = await response.json();
      console.log(data);
      setEventData(data);
    } catch (error) {
      console.error(error);
    }
  };

  const Onengage = (eventId) => {
    navigation.navigate('post', { eventId });
  };

  const OnProfile = (OuserId) => {
    navigation.navigate('other1', { OuserId });
  };

  const [eventData, setEventData] = useState([]);
  const [selectedEvents, setSelectedEvents] = useState([]);
  const navigation = useNavigation();
  console.log(eventData);

  useEffect(() => {
    fetchData();
  }, []);

  const handlePress = (eventId, saved) => {
    const user_id = '2'; 
    const state = saved ? 'no' : 'yes';
    setSelectedEvents((prevSelectedEvents) => {
      if (prevSelectedEvents.includes(eventId)) {
        unsaveEvent(eventId);
        sendSavedState(eventId, user_id, 'no'); 
        return prevSelectedEvents.filter((id) => id !== eventId);
      } else {
        saveEvent(eventId);
        sendSavedState(eventId, user_id, 'yes'); 
        return [...prevSelectedEvents, eventId];
      }
    });
  };

  const sendSavedState = async (eventId, user_id, state) => {
    try {
      const response = await fetch('http://192.168.29.34:5000/like-unlike-post', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          event_id: eventId,
          user_id: user_id,
          state: state,
        }),
      });
    } catch (error) {
      console.error(error);
    }
  };

  const MAX_CHARACTERS_PER_LINE = 40;
  const fontSize = 10;
  const lineCharacterLimit = Math.floor(309 / (fontSize * 0.6));

  return (
    <View style={{ alignContent: 'center', alignItems: 'center', top: 14 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {eventData.map((event) => (
          <View
            key={event.event_id}
            style={{
              width: 310,
              height: 290,
              shadowColor: 'black',
              shadowOffset: { width: 4, height: 4 },
              shadowOpacity: 0.2,
              shadowRadius: 4,
              elevation: 4,
              backgroundColor: '#F5FEFD',
              borderColor: 'black',
              margin: 18,
              borderRadius: 20,
            }}
          >
            <Image
              style={{ resizeMode: 'contain', width: 48, height: 48, borderRadius: 24, left: 23, top: 24 }}
              source={{ uri: event.profilepic }}
            ></Image>
            <View style={{ alignSelf: 'flex-start', left: 79, bottom: 10 }}>
              <TouchableOpacity onPress={() => OnProfile(event.user_id)}>
                <Text style={{ fontSize: 14, fontFamily: 'Montserrat-ExtraBoldItalic' }}>{event.name}</Text>
              </TouchableOpacity>
            </View>
            <View style={{ width: 25, height: 25, left: 238, bottom: 32 }}>
              <TouchableOpacity onPress={() => handlePress(event.event_id ,selectedEvents.includes(event.event_id))}>
                {selectedEvents.includes(event.event_id) ? (
                  <Image source={require('../assets/icons/fullheart.png')} style={{ width: 25, height: 25 }} />
                ) : (
                  <Image source={require('../assets/icons/heart.png')} style={{ width: 25, height: 25 }} />
                )}
              </TouchableOpacity>
            </View>
            <Text style={{ fontSize: 14, fontFamily: 'Montserrat-BoldItalic', left: '12.69%', bottom: '2%' }}>
              TITLE :
            </Text>
            <Text
              style={{
                color: 'black',
                fontSize: 14,
                textAlign: 'left',
                fontFamily: 'Montserrat-Italic',
                width: 170,
                bottom: '8.1%',
                left: '35%',
              }}
            >
              {event.title}
            </Text>
            <Text style={{ fontSize: 14, fontFamily: 'Montserrat-BoldItalic', left: '12.69%', bottom: '7%' }}>
              DESCRIPTION :
            </Text>
            <Text
              editable={false}
              multiline={true}
              maxLength={200}
              style={{
                width: 250,
                height: 80,
                left: '9%',
                bottom: '6.5%',
                fontSize: 12,
                textAlignVertical: 'top',
                maxWidth: fontSize * 0.6 * lineCharacterLimit,
                lineHeight: 16,
                paddingTop: 2,
                paddingBottom: 2,
                paddingHorizontal: 2,
                color: 'black',
                fontFamily: 'Montserrat-Italic',
              }}
            >
              {'   '}
              {event.description}
            </Text>
            <Text style={{ fontSize: 14, fontFamily: 'Montserrat-BoldItalic', left: '12.69%', bottom: '7%' }}>
              LOCATION :
            </Text>
            <Text
              style={{
                width: 140,
                color: 'black',
                height: 20,
                left: '5%',
                bottom: '7%',
                fontSize: 12,
                textAlign: 'center',
                fontFamily: 'Montserrat-Italic',
              }}
            >
              {event.address}
            </Text>
            <View
              style={{
                width: 110,
                height: 45,
                alignItems: 'center',
                borderRadius: 10,
                bottom: 55,
                left: 173,
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: '#0a0a67',
                  width: 110,
                  height: 45,
                  alignItems: 'center',
                  borderRadius: 10,
                }}
                onPress={() => Onengage(event.event_id)}
              >
                <Text style={{ color: 'white', fontFamily: 'Montserrat-ExtraBold', top: 12, fontSize: 16 }}>
                  ENGAGE
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
        <View style={{ width: '100%', height: 200 }}></View>
      </ScrollView>
    </View>
  );
};

const mapStateToProps = (state) => ({
  savedEvents: state.savedEvents,
});

const mapDispatchToProps = (dispatch) => ({
  saveEvent: (eventId) => dispatch(saveEvent(eventId)),
  unsaveEvent: (eventId) => dispatch(unsaveEvent(eventId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewScreen);

const styles = StyleSheet.create({});
