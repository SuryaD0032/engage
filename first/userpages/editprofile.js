import { StyleSheet, Text, View,TouchableOpacity,Image} from 'react-native';
import React from 'react';
import { useState } from 'react';
import { ScrollView,  TextInput } from 'react-native-gesture-handler';
import ProfileScreen from '../mainpages/ProfileScreen';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRoute } from '@react-navigation/native';
import { Linking } from 'react-native';

export default function Editprof() {
 // const route = useRoute();
 // const { cname } = route.params;
 // console.log(cname);
  const [uid,setuid] = useState('');
  const [name,setname] = useState('');
  const [dob,setdob] = useState('');
  const [profession,setprofession] = useState('');
  const [place,setplace] = useState('');
  const [about,setabout] = useState('');
  const [interest,setinterest] = useState('');
  const [language,setlanguage] = useState('');
  const [insp,setinsp] = useState('');
  const [availability,setavailablility] = useState('');
  const data = {   
  };
  data.name = name;
  data.dob = dob;
  data.uid = uid ;
  data.profession = profession; 
  data.location = place;
  data.about = about;
  data.interest = interest;
  data.rolemodel = insp; 
  data.availability = availability;
  data.languages = language;
  data.profilepic = imgData;
  console.log(data);

    const handleSubmit = async () => {
        try {
          console.log(data)
          const updatedData = { ...data, profilepic: imgData.imageurl };
          const response = await fetch('http://192.168.29.34:5000/insert-users-details', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            
            body: JSON.stringify(updatedData),
          });
          if (response.ok) {
            const responseData = await response.json();
            console.log(responseData);
            if(responseData['res']==true)
            console.log('Profile updated successfully!', responseData);
            else {
              console.log('Failed to update Profile:', response.status);
            }
          } else {
            console.log('Failed to update Profile:', response.status);
          }
        } catch (error) {
          console.log('Error updating Profile:', error);
        }
      };
      
    const navigation = useNavigation();
    const cancel = () => {
        navigation.navigate('Profile');
    }
    const right = () => {
        navigation.navigate('Profile');
    }
    const [toggleButton, setToggleButton] = useState(true);
const [backgroundColor, setBackgroundColor] = useState('#0A0A67');
// const logItemFromAsyncStorage = async () => {
//   try {
//     const uid = await AsyncStorage.getItem('UserID');
//     console.log(uid);
//     setuid(uid);
//   } catch (error) {
//     console.log('Error retrieving item from Async Storage:', error);
//   }
// };

// logItemFromAsyncStorage();

const handlePress = () => {
  setToggleButton(!toggleButton);
  setBackgroundColor(toggleButton ? '#00BA00' : '#0A0A67');
};
const [imgData, setData] = useState({imageurl:null});
const [serverImagePath, setServerImagePath] = useState('');
const handleImageUpload = async () => {
  const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
  if (permissionResult.granted === false) {
    alert('Permission to access camera roll is required!');
    return;
  }
  

  const pickerResult = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });
  if (!pickerResult.canceled) {
    const formData = new FormData();
    formData.append('image', {
      uri: pickerResult.uri,
      name: 'profilepic.jpg',
      type: 'image/jpeg',
    });
    fetch('http://192.168.29.34:5000/upload-image', {
      method: 'POST',
      mode:'cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',  },
      body: formData,
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
        setServerImagePath(responseData.serverimagepath)
        setData({ ...imgData, imageurl: responseData.filename });
      })
      .catch((error) => {
        console.error(error);
      });
  }
};

 
  return (
    <View style={{backgroundColor:'#E1E8ED',height:1000,top:'4.672804041287183%',alignItems:'center'}}>
    <View style={{alignContent:'center',flexDirection:'row',height:128,width:'100%',backgroundColor:'#0A0A67',alignItems:'center'}}>
        <TouchableOpacity style={{left:'8%',bottom:'10%'}} onPress={handleSubmit}>
     <Image source={require('../assets/icons/correct.png')} style={styles.sicon} />
        </TouchableOpacity>
        <TouchableOpacity style={{left:'220%',bottom:'10%'}} onPress={cancel}>
     <Image source={require('../assets/icons/wrong.png')} style={styles.sicon} />
        </TouchableOpacity>
        <Text style={{fontSize:20,color:'#F5FEFD',fontFamily:'Montserrat-ExtraBold',left:'55%',bottom:'10%'}}>PROFILE</Text>
        <View style={{height:100,width:100,backgroundColor:'white',borderRadius:50,top:'12%',right:'20%',shadowColor: 'black',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,}}>
         {imgData.imageurl && <Image source={{ uri: serverImagePath }} style={styles.icon}/>}
        </View>
        <TouchableOpacity style={{width:150,height:30,backgroundColor:'#0A0A67',borderRadius:20,alignSelf:'center',right:'117%',top:'31%'}} onPress={handleImageUpload}>
        <Text style={{ color: 'white', fontSize: 10,alignSelf:'center',top:10,fontFamily:'Montserrat-Bold' }}>UPLOAD PROFILE IMAGE</Text>
        </TouchableOpacity> 
    </View>
    <View style={{alignItems:'center',height:70}}>
    
    </View>    
    <ScrollView style={{height:1200,}} showsVerticalScrollIndicator={false}>
      <View style={{flexDirection:'column',height:1200,}}>
      <Text style={[styles.texty,{top:7}]}>NAME</Text>
      <TextInput onChangeText={text =>  setname(text)} style={[styles.inp1,{height:44,top:15}]}></TextInput>
      <Text style={[styles.texty,{top:23}]}>DOB</Text>
      <TextInput placeholder='eg : DD/MM/YYYY' onChangeText={text =>  setdob(text)} style={[styles.inp1,{height:44,top:31}]}></TextInput>
      <Text style={[styles.texty,{top:39}]}>PROFESSION</Text>
      <TextInput onChangeText={text =>  setprofession(text)} style={[styles.inp1,{height:44,top:46}]}></TextInput>
      <Text style={[styles.texty,{top:55}]}>PLACE & LOCATION</Text>
      <TextInput onChangeText={text =>  setplace(text)} style={[styles.inp1,{height:44,top:62}]}></TextInput>
      <Text style={[styles.texty,{top:71}]}>ABOUT ME</Text>
      <TextInput onChangeText={text =>  setabout(text)} style={[styles.inp1,{height:97,top:78}]}></TextInput>
      <Text style={[styles.texty,{top:86}]}>INTERESTS</Text>
      <TextInput onChangeText={text =>  setinterest(text)} style={[styles.inp1,{height:97,top:94}]}></TextInput>
      <Text style={[styles.texty,{top:102}]}>LANGUAGES KNOWN</Text>
      <TextInput onChangeText={text =>  setlanguage(text)} style={[styles.inp1,{height:44,top:110}]}></TextInput>
      <Text style={[styles.texty,{top:118}]}>AVAILABLE TIME/DAYS</Text>
      <TextInput onChangeText={text =>  setavailablility(text)} style={[styles.inp1,{height:44,top:126}]}></TextInput>
      <Text style={[styles.texty,{top:134}]}>INSPIRATION</Text>
      <TextInput onChangeText={text =>  setinsp(text)} style={[styles.inp1,{height:44,top:142}]}></TextInput>
      <Text style={[styles.texty,{top:150}]}>EMAIL-ID</Text>
      <TextInput style={[styles.inp1,{height:44,top:158}]}></TextInput>
  
      <TouchableOpacity style={[styles.butt, { backgroundColor: backgroundColor }]} onPress={handlePress}>
{toggleButton ? (
  <Text style={{fontSize:10,color:'white',
  alignSelf:'center',top:2,fontFamily:'Montserrat-BoldItalic'}}>VERIFY</Text>
) : (
  <Text style={{fontSize:10,color:'white',
  alignSelf:'center',top:2,fontFamily:'Montserrat-BoldItalic'}}>VERIFIED ✔</Text>
)}
</TouchableOpacity>
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
  {height:20,width:65,borderRadius:10,top:170,left:240},
  texty:{
    fontSize:14,
    fontFamily:'Montserrat-Bold',
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
    fontFamily:'Montserrat-Regular' 
  }
})
;