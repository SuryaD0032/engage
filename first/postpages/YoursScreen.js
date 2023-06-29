import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PostedScreen = () => {
  const navigation = useNavigation();
  const [uid, setUid] = useState('');
  const [eventdata, setEventData] = useState([]);

  const HandleRequest = () => {
    navigation.navigate('Request');
  };

  const logItemFromAsyncStorage = async () => {
    try {
      const uid = await AsyncStorage.getItem('UserID');
      setUid(uid);
    } catch (error) {
      console.log('Error retrieving item from Async Storage:', error);
    }
  };

  const fetchData = async () => {
    try {
      const response = await fetch('http://192.168.29.34:5000/get-users-post', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          uid: uid,
        }),
      });
      const data = await response.json();
      console.log(data);
      setEventData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    logItemFromAsyncStorage();
  }, []);

  useEffect(() => {
    if (uid) {
      fetchData();
    }
  }, [uid]);

  return (
    <View style={{ alignContent: 'center', alignItems: 'center', top: 14 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {eventdata.map((event) => (
          <View
            key={event.id}
            style={{
              width: 326,
              height: 213,
              shadowColor: 'black',
              shadowOffset: { width: 4, height: 4 },
              shadowOpacity: 0.2,
              shadowRadius: 4,
              elevation: 4,
              backgroundColor: '#F5FEFD',
              borderColor: 'black',
              margin: 18,
              borderRadius: 20,
              alignItems: 'center',
              flex: 1,
              justifyContent: 'center',
            }}
          >
            <View style={styles.img}>
              <Image
                source={{ uri: event.imageurl }}
                style={{ width: 289, height: 129, resizeMode: 'contain', borderRadius: 20 }}
              />
            </View>
            <Text style={{ fontFamily: 'Montserrat-SemiBoldItalic', fontSize: 12, alignSelf: 'flex-start', left: '7%', top: '11%' }}>
              {event.title}
            </Text>
            <TouchableOpacity
              onPress={HandleRequest}
              style={{
                width: 145,
                height: 40,
                bottom: '1%',
                left: '22%',
                justifyContent: 'center',
                backgroundColor: '#0a0a67',
                borderRadius: 10,
                alignContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text style={{ color: 'white', fontFamily: 'Montserrat-ExtraBold', fontSize: 16, alignSelf: 'center' }}>SEE REQUEST</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 289,
    height: 129,
    backgroundColor: 'white',
    borderRadius: 20,
    alignSelf: 'center',
    bottom: '0%',
  },
});

export default PostedScreen;
