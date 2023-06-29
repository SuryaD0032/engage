import { StyleSheet, Text, View,TouchableOpacity,Image} from 'react-native';
import React from 'react';
import { useState,useEffect } from 'react';
import { ScrollView,  TextInput } from 'react-native-gesture-handler';
import Editprof from '../userpages/editprofile';
import { useNavigation } from '@react-navigation/native';
import IndexScreen from '../mainpages/indexScreen';
import { Dimensions } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function OtherProf1() {
  const route = useRoute();
const { OuserId } = route.params;
const [ouid,setouid] = useState('');
const [name,setname] = useState('');
const [age,setage] = useState('');
const [profession,setprofession] = useState('');
const [place,setplace] = useState('');
const [about,setabout] = useState('');
const [interests,setinterest] = useState('');
const [languages,setlanguage] = useState('');
const [insp,setinsp] = useState('');
const [availability,setavailablility] = useState('');
const [image,setimage] = useState('');

const LoadOtherProfile = async () => {
    try {
        console.log(OuserId);
      const response = await fetch('http://192.168.29.34:5000/fetch-other-users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
           ouid:OuserId
        }
        ),
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
    LoadOtherProfile();
    setouid(OuserId);
    console.log(OuserId);
  }, []);

  const navigation = useNavigation(); 
  const back = () => {
    navigation.goBack();
  }
  const [toggleButton, setToggleButton] = useState(true);
  const [backgroundColor, setBackgroundColor] = useState('#E1E8ED');
  
  const handlePress = () => {
    setToggleButton(!toggleButton);
    setBackgroundColor(toggleButton ? '#0A0A67' : '#E1E8ED');
  };
  return (
    
    <View style={{backgroundColor:'#E1E8ED',top:'4.672804041287183%',alignItems:'center',justifyContent:'center'}}>
    <View style={{alignContent:'center',height:128,width:'100%',backgroundColor:'#0A0A67',marginBottom:'8%'}}>
        <TouchableOpacity style={{left:15,top:18}} onPress={back}>
     <Image source={require('../assets/icons/goback2.png')} style={styles.sicon} />
        </TouchableOpacity>
        <TextInput value={name} style={{fontSize:20,color:'#F5FEFD',fontWeight:'bold',backgroundColor:'#0A0A67',height:26,alignSelf:'center'}}></TextInput>
        <Text style={{fontSize:12,color:'#F5FEFD',fontFamily:'Montserrat-BoldItalic',top:'42%',left:'6%'}}>FOLLOWERS</Text>
        <Text style={{fontSize:12,color:'#F5FEFD',fontFamily:'Montserrat-BoldItalic',top:'29%',left:'71%'}}>FOLLOWING</Text>
        <View style={{height:100,width:100,backgroundColor:'white',borderRadius:50,bottom:10,alignSelf:'center',shadowColor: 'black',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,}}>
         <Image source={{uri : image}} style={styles.icon} />
        </View>
    </View>
       <View style={{alignItems:'center',height:70}}>
    <TouchableOpacity style={[styles.butt, { backgroundColor: backgroundColor }]} onPress={handlePress}>
{toggleButton ? (
  <Text style={{fontSize:12,color:'black',alignSelf:'center',top:'15.8587145676%',fontFamily:'Montserrat-ExtraBoldItalic'}}>FOLLOW</Text>
) : (
  <Text style={{fontSize:12,color:'white',alignSelf:'center',top:'15.8587145676%',fontFamily:'Montserrat-BoldItalic'}}>FOLLOWING</Text>
)}
</TouchableOpacity>
 </View>    
    <ScrollView style={{height:1200}} showsVerticalScrollIndicator={false}>
      <View style={{flexDirection:'column',height:1050,alignItems:'center'}}>
      <Text style={[styles.texty,{top:7,right:'24%'}]}>AGE & PROFESSION</Text>
      <TextInput value={`${age} - ${profession}`} editable={false} style={[styles.inp1,{height:44,top:15}]}></TextInput>
      <Text style={[styles.texty,{top:23,right:'24%'}]}>PLACE & LOCATION</Text>
      <TextInput value={place} editable={false} style={[styles.inp1,{height:44,top:31}]}></TextInput>
      <Text style={[styles.texty,{top:39,right:'34%'}]}>ABOUT ME</Text>
      <TextInput value={about} editable={false} style={[styles.inp1,{height:97,top:46}]}></TextInput>
      <Text style={[styles.texty,{top:55,right:'33.5%'}]}>INTERESTS</Text>
      <TextInput value={interests} editable={false} style={[styles.inp1,{height:97,top:62}]}></TextInput>
      <Text style={[styles.texty,{top:71,right:'21%'}]}>LANGUAGES KNOWN</Text>
      <TextInput value={languages} editable={false} style={[styles.inp1,{height:44,top:78}]}></TextInput>
      <Text style={[styles.texty,{top:86,right:'18.5%'}]}>AVAILABLE TIME/DAYS</Text>
      <TextInput value={availability} editable={false} style={[styles.inp1,{height:44,top:94}]}></TextInput>
      <Text style={[styles.texty,{top:102,right:'30%'}]}>INSPIRATION</Text>
      <TextInput value={insp} editable={false} style={[styles.inp1,{height:44,top:110}]}></TextInput>
         </View>
      <View style={{height:2,backgroundColor:'#0A0A67',width:'100%',bottom:'32%'}}></View>
      <Text style={{fontSize:30,alignSelf:'center',fontWeight:'bold',color:'#0A0A67',bottom:'30%'}}>ENGAGE</Text>
      <View style={{height:50}}></View>
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
  {height:24,width:100,borderRadius:10,borderWidth:1,top:40},
  texty:{
    fontSize:14,
    fontFamily:'Montserrat-Bold'
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
    textAlign:'center',
    fontFamily:'Montserrat-Regular',
    color:'#111111'
  }
})
;

