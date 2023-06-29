import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

export default function SportCard() {
  const fetchData = async () => {
    try {
      const response = await fetch('http://192.168.29.34:5000/event-details', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          category: 'sport',
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

  useEffect(() => {
    fetchData();
  }, []);

  const [eventData, setEventData] = useState([]);
  const navigation = useNavigation();

  const handlePress = (eventId) => {
    setEventData((prevData) =>
      prevData.map((event) =>
        event.event_id === eventId ? { ...event, isLiked: !event.isLiked } : event
      )
    );
  };

  const MAX_CHARACTERS_PER_LINE = 40;
  const fontSize = 10;
  const lineCharacterLimit = Math.floor(309 / (fontSize * 0.6));

  return (
    <View style={{ alignContent: 'center', alignItems: 'center', top: '4.672804041287183%' }}>
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
              <TouchableOpacity>
                <TextInput value={event.name} style={{ fontSize: 14, fontWeight: '600', bottom: 5 }}></TextInput>
              </TouchableOpacity>
            </View>
            <View style={{ width: 25, height: 25, left: 238, bottom: 32 }}>
              <TouchableOpacity onPress={() => handlePress(event.event_id)}>
                {event.isLiked ? (
                  <Image source={require('../assets/icons/fullheart.png')} style={{ width: 25, height: 25 }} />
                ) : (
                  <Image source={require('../assets/icons/heart.png')} style={{ width: 25, height: 25 }} />
                )}
              </TouchableOpacity>
            </View>
            <Text style={{ fontSize: 12, fontWeight: '600', left: 41 }}>TITLE :</Text>
            <TextInput
              editable={false}
              value={event.title}
              style={{ width: 170, left: 80, bottom: 23, color: 'black', fontSize: 14, textAlign: 'center' }}
            ></TextInput>
            <Text style={{ fontSize: 12, fontWeight: '600', left: 41, bottom: 25 }}>DESCRIPTION :</Text>
            <TextInput
              editable={false}
              value={event.description}
              multiline={true}
              maxLength={200}
              style={{
                width: 250,
                height: 90,
                left: 30,
                bottom: 28,
                fontSize: 12,
                textAlignVertical: 'top',
                maxWidth: fontSize * 0.6 * lineCharacterLimit,
                lineHeight: 16,
                paddingTop: 12,
                paddingBottom: 12,
                paddingHorizontal: 16,
                color: 'black',
              }}
            ></TextInput>
            <Text style={{ fontSize: 12, fontWeight: '600', left: 41, bottom: 30 }}>LOCATION :</Text>
            <TextInput
              editable={false}
              value={event.location}
              style={{
                width: 140,
                color: 'black',
                height: 20,
                left: 30,
                bottom: 33,
                fontSize: 12,
                textAlign: 'center',
              }}
            ></TextInput>
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
                <Text style={{ color: 'white', fontWeight: '600', top: 12, fontSize: 14 }}>ENGAGE</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
        <View style={{ width: '100%', height: 200 }}></View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});