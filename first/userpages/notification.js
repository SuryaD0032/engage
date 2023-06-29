import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet,Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useState } from 'react';


const Notification = ({navigation}) => {
  Handleback = () => {
    navigation.goBack();
  }
  const [status, setStatus] = useState('');

  const handleAccept = () => {
    setStatus('Accepted');
  };

  const handleReject = () => {
    setStatus('Rejected');
  };
  const handlecontinue = () => {
    navigation.navigate('Request');
  };


  return (
    <View>
    <View style={styles.container}>
      <TouchableOpacity style={[styles.button, { marginRight: -56,top:'3.5%',left:'-70%'}]} onPress={Handleback} >
        <Image source={require('../assets/icons/goback.png')} style={styles.icon}  />
      </TouchableOpacity>
      <Text style={styles.text}>NOTIFICATION</Text>
        <TouchableOpacity style={[styles.button, styles.notificationButton]}>
          <Image source={require('../assets/icons/notification.png')} style={styles.icon} />
        </TouchableOpacity>
        </View>
        <View style={{alignItems:'center',alignSelf:'center', top:'6.672804041287183%',flexDirection:'column'}}>
        <ScrollView>
          <View style={[styles.cards,{height:120}]}>
          <Image
              style={{ resizeMode: 'contain', width: 35, height: 35, borderRadius: 24, left: 16, top: 21 }}
              source={require('../assets/icons/best.png')}
            ></Image>
            <Text style={{fontFamily:'Montserrat-SemiBold',fontSize:12,bottom:'4%',left:'17%'}}>wants to engage with you</Text>
            <View style={styles.scontainer}>
            {status !== 'Accepted' && status !== 'Rejected' && (
        <TouchableOpacity style={[styles.button, styles.acceptButton]} onPress={handleAccept}>
          <Text style={[styles.buttonText,{color:'#FFF'}]}>ACCEPT</Text>
        </TouchableOpacity>
      )}

      {status !== 'Accepted' && status !== 'Rejected' && (
        <TouchableOpacity style={[styles.button, styles.rejectButton]} onPress={handleReject}>
          <Text style={[styles.buttonText,{color:'#0a0a67'}]}>DECLINE</Text>
        </TouchableOpacity>
      )}

      {status === 'Accepted' && <Text style={styles.statusText}>Accepted.</Text>}
      {status === 'Rejected' && <Text style={styles.statusText}>Declined.</Text>}
    </View>
          </View>
          <View style={[styles.cards,{height:90,alignItems:'center',flexDirection:'column',justifyContent:'space-between',padding:5}]}>
          <Text style={{fontFamily:'Montserrat-SemiBold',fontSize:12,color:'#0a0a67',top:10}}>You and are Engaged!!</Text>
          <TouchableOpacity style={[styles.button,{backgroundColor:'#0a0a67',top:2}]} onPress={handlecontinue}>
          <Text style={[styles.buttonText,{color:'#fff'}]}>CONTINUE</Text>
        </TouchableOpacity>
          </View>
          </ScrollView>
        </View>
 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#E1E8ED',
    top:'9.672804041287183%',
    height:61,
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
    justifyContent:'center'
  },
  icon: {
    width: 35,
    height: 35,
  },
  sicon: {
    width:25,
    height:25,
  },
  text: {
     fontFamily:'Montserrat-BoldItalic',fontSize: 24,top:'3.5%',left:'0%'
  },
  notificationButton: {
    top:'3.5%',left:'50%'
  },
  cards: {
    width: 325,
              shadowColor: 'black',
              shadowOffset: { width: 4, height: 4 },
              shadowOpacity: 0.2,
              shadowRadius: 4,
              elevation: 4,
              backgroundColor: '#F5FEFD',
              borderColor: 'black',
              margin: 5,
              borderRadius: 20,
  },
  scontainer: {
    alignItems: 'center',
    marginTop: 20,
    flexDirection:'row',
    justifyContent:'space-between',
    width:'65%',
    alignSelf:'center'
  },
  button: {
    width: 100,
    height: 33,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  acceptButton: {
    backgroundColor: '#0a0a67',

  },
  rejectButton: {
    backgroundColor: '#e1e8ed',
  },
  buttonText: {
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
  },
  statusText: {
    marginTop: 10,
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
    left:'250%'
  
  },
});

export default Notification;