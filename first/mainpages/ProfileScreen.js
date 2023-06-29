import { StyleSheet, Text, View,TouchableOpacity,Image,StatusBar, ImageBackground} from 'react-native';
import React from 'react';
import { useState ,useEffect } from 'react';
import { ScrollView,  TextInput } from 'react-native-gesture-handler';
import Editprof from '../userpages/editprofile';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DropdownMenu from '../pages/menu';
import { DropdownProvider } from '../pages/DropdownContext';

export default function ProfileScreen({navigation}) {
  const EditProfile = () => {
    navigation.navigate('Editprof',{cname});
  }
  const menu = () => {
    navigation.navigate('menu');
  }
  const logItemFromAsyncStorage = async () => {
    try {
      const uid = await AsyncStorage.getItem('UserID');
      setuid(uid);
    } catch (error) {
      console.log('Error retrieving item from Async Storage:', error);
    }
  };
  

  const back = () => {
    navigation.goBack();
  } 
  const [uid,setuid] = useState('');
  const [cname,setname] = useState('');
  const [age,setage] = useState('');
  const [profession,setprofession] = useState('');
  const [location,setplace] = useState('');
  const [about,setabout] = useState('');
  const [interests,setinterest] = useState('');
  const [languages,setlanguage] = useState('');
  const [insp,setinsp] = useState('');
  const [availability,setavailablility] = useState('');
  const [image,setimage]= useState('');
  const data = {

  };
  const LoadProfile = async () => {
    try {
      const response = await fetch('http://192.168.29.34:5000/fetch-user-details', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({"uid":uid}),
      });
      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        if(responseData['res']==true){
          console.log('Profile Loaded successfully!', responseData);
          const profileData = responseData['data'][0];
          setname(profileData.name);
          setage(profileData.age);
          setprofession(profileData.profession);
          setabout(profileData.about);  
          setinterest(profileData.interest);
          setplace(profileData.location);
          setinsp(profileData.rolemodel);
          setlanguage(profileData.languages);
          setavailablility(profileData.availability);
          setimage(profileData.profilepic);
        }
        else {
          console.log('Failed Load Profile:', response.status);  
        } 
      } else {
        console.log('No Load Profile:', response.status);
      }
    } catch (error) {
      console.log('Error Loading Profile:', error);
    }
  };
  useEffect(() => {
    logItemFromAsyncStorage();
      LoadProfile();
  });
  return (
    <View style={{backgroundColor:'#E1E8ED',height:1000,top:'4.672804041287183%',}}>
    <View style={{flexDirection:'row',height:128,backgroundColor:'#0A0A67',alignItems:'center',alignSelf:'center'}}>
        <TouchableOpacity style={{left:'52%',bottom:'10%'}} onPress={back}>
     <Image source={require('../assets/icons/goback2.png')} style={styles.sicon} />
        </TouchableOpacity>
        <TouchableOpacity style={{left:'230%',bottom:'10%'}} onPress={EditProfile}>
     <Image source={require('../assets/icons/edit.png')} style={styles.sicon} />
        </TouchableOpacity>
        <View style={{left:'240%',bottom:'10%'}}>
        <ImageBackground style={{width:31,height:31,resizeMode:'contain'}} source={require('../assets/icons/menu.png')}>
        <DropdownProvider>
        <DropdownMenu/>
        </DropdownProvider>
        </ImageBackground>
        </View>
        <Text style={{fontSize:20,color:'#F5FEFD',fontFamily:'Montserrat-ExtraBold',left:'74%',bottom:'2%'}}>PROFILE</Text>
        <Text style={{fontSize:14,color:'#F5FEFD',fontFamily:'Montserrat-BoldItalic',right:'85%',top:'15%'}}>FOLLOWERS</Text>
        <Text style={{fontSize:14,color:'#F5FEFD',fontFamily:'Montserrat-BoldItalic',left:'18%',top:'15%'}}>FOLLOWING</Text>
        <View style={{height:100,width:100,backgroundColor:'white',borderRadius:50,right:'145%',top:'17%',shadowColor: 'black',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,}}>
         <Image source={{uri : image}} style={styles.icon} />
        </View>
    </View>
    <TextInput value={cname} editable={false} style={{alignSelf:'center',height:24,fontSize:16,top:66,fontFamily:"Montserrat-ExtraBoldItalic",color:'black',backgroundColor:'#E1E8ED',alignItems:'center',alignContent:'center'}}></TextInput>
    <View style={{alignItems:'center',height:70}}>
    </View>    
    <ScrollView style={{height:1200}}>
      <View style={{flexDirection:'column',height:1150,alignItems:'center'}}>
      <Text style={[styles.texty,{top:7}]}>AGE & PROFESSION</Text>
      <TextInput value={`${age} - ${profession}`} editable={false} style={[styles.inp1,{height:44,top:15}]}></TextInput>
      <Text style={[styles.texty,{top:23}]}>PLACE & LOCATION</Text>
      <TextInput value={location} editable={false} style={[styles.inp1,{height:44,top:31}]}></TextInput>
      <Text style={[styles.texty,{top:39}]}>ABOUT ME</Text>
      <TextInput value={about} editable={false} style={[styles.inp1,{height:97,top:46}]}></TextInput>
      <Text style={[styles.texty,{top:55}]}>INTERESTS</Text>
      <TextInput value={interests} editable={false} style={[styles.inp1,{height:97,top:62}]}></TextInput>
      <Text style={[styles.texty,{top:71}]}>LANGUAGES KNOWN</Text>
      <TextInput value={languages} editable={false} style={[styles.inp1,{height:44,top:78}]}></TextInput>
      <Text style={[styles.texty,{top:86}]}>AVAILABLE TIME/DAYS</Text>
      <TextInput value={availability} editable={false} style={[styles.inp1,{height:44,top:94}]}></TextInput>
      <Text style={[styles.texty,{top:102}]}>INSPIRATION</Text>
      <TextInput value={insp} editable={false} style={[styles.inp1,{height:44,top:110}]}></TextInput>
      <Text style={[styles.texty,{top:118}]}>EMAIL-ID</Text>
      <TextInput editable={false} style={[styles.inp1,{height:44,top:126}]}></TextInput>
      <View style={{height:2,backgroundColor:'#0A0A67',width:'100%',top:192}}></View>
      <Text style={{fontSize:30,alignSelf:'center',fontWeight:'bold',top:212,color:'#0A0A67'}}>ENGAGE</Text>
      </View>
    </ScrollView>
 </View>
  );
}

const styles = StyleSheet.create({
  sicon:{
    height:31,
    width:31
  },
  icon:{
    height:100,
    width:100,
    resizeMode:'contain',
    borderRadius:50
  },
  butt:
  {height:20,width:60,borderRadius:10,borderWidth:1,top:70},
  texty:{
    fontSize:12,
    fontWeight:'500',
  },
  inp1:{
    width:309,
    backgroundColor:'white',
    shadowColor: 'black',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    borderRadius:20,
    textAlign:'center' ,
    color:'black',
    fontStyle:'italic'
  }
})
;