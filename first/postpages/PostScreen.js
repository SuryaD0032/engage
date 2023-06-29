import { StyleSheet, Text, View,TouchableOpacity,Image, Button} from 'react-native';
import React from 'react';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { useNavigation ,useRoute} from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';
import { useState,useEffect } from 'react';
import { Linking } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function PostScreen() {
  const route = useRoute();
  const { eventId } = route.params;
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
    const navigation = useNavigation();
    const [location, setLocation] = useState(null);
    const [imageurl,setimageurl] = useState('');
    const [image,setimage] = useState('');
    const [title,settitle] = useState('');
    const [Description,setDescription] = useState('');
    const [TeamDescription,setTeamDescription] = useState('');
    const [Date,setDate] = useState('');
    const [ftime,setftime] = useState('');
    const [ttime,setttime] = useState('');
    const [eventtype,seteventtype] = useState('');
    const [address,setaddress] =useState('');
    const [amount,setAmount] = useState('');
    const [No_required,setPersonRequired] = useState(null);
    const [name,setname] = useState('');
    const [age,setage] = useState('');
    const [profession,setprofession] = useState('');
    const [place,setplace] = useState('');
    const [about,setabout] = useState('');
    const [interests,setinterest] = useState('');
    const [languages,setlanguage] = useState('');
    const [insp,setinsp] = useState('');
    const [availability,setavailablility] = useState('');
    const [otheruser,setotheruser] = useState('');

    const back = () => {
        navigation.goBack();
      }  
      const [eventid,seteventid] = useState('');
      useEffect(() => {
        seteventid(eventId);
        console.log(eventId);
        fetchData();
      }, []);
      const Request = async () => {
        if (toggleButton === true){
          try {
            const response = await fetch('http://192.168.29.34:5000/request-engage', {
              method: 'POST',
              mode: 'cors',
              headers: {
              'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                    eventid:eventId,
                    request_id:uid
                }),
            });
            const response1 = await response.json();
           console.log(response1);
           if(response1.res === true){
            console.log('requested successfully');
            handlePress();
           }else{
            console.log('hi');
           }
  
          } catch (error) {
            console.log('Error Loading Post:', error);
          }
          
        }
        else{
          try {
            const response = await fetch('http://192.168.29.34:5000/delete-request', {
              method: 'POST',
              mode: 'cors',
              headers: {
              'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                    eventid:eventId,
                    request_id:uid
                }),
            });
            const response1 = await response.json();
           console.log(response1);
           if(response1.res === true){
            handlePress();
            console.log('unrequested successfully');
           }else{
            console.log('hi');
           }
  
          } catch (error) {
            console.log('Error Loading Post:', error);
          }
        }
       
       
      };
      const [toggleButton, setToggleButton] = useState(true);
      const [backgroundColor, setBackgroundColor] = useState('#0A0A67');
      
      const handlePress = () => {
        setToggleButton(!toggleButton);
        setBackgroundColor(toggleButton ? '#00BA00' : '#0A0A67');
      };
      const fetchData = async () => {
       
        try {
          const response = await fetch('http://192.168.29.34:5000/particular-event-details', {
            method: 'POST',
            mode: 'cors',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                  event_id:eventId
              }),
          });
          if (response.ok) {
            const responseData = await response.json();
            console.log(responseData);
              console.log('Post Loaded', responseData);
              const peventData = responseData['data'][0];
              settitle(peventData.title);
              setDescription(peventData.description);
              setTeamDescription(peventData.team_description);
              setDate(peventData.edate);  
              setftime(peventData.estime);
              setttime(peventData.eetime);
              setPersonRequired(peventData.required);
              setaddress(peventData.address);
              setimageurl(peventData.imageurl);
              setimage(peventData.profilepic);
              setAmount(peventData.amount);
              seteventtype(peventData.category);
              setname(peventData.name);
              setplace(peventData.location);
              setage(peventData.age);
              setabout(peventData.about);
              setinterest(peventData.interest);
              setlanguage(peventData.languages);
              setavailablility(peventData.availability);
              setprofession(peventData.profession);
              setinsp(peventData.rolemodel);
              setotheruser(peventData.user_id);

              console.log(parseInt(peventData.required));
              console.log(amount);
              const locationStr = peventData.elocation.replace(/'/g, '"');
              const locationObj = JSON.parse(locationStr);
             setLocation({
           latitude: locationObj.latitude,
           longitude: locationObj.longitude
            });
            
  
          } else {
            console.log('No Load Post:', response.status);
          }
        } catch (error) {
          console.log('Error Loading Post:', error);
        }
      };
      const openGoogleMaps = () => {
        if (location) {
          const { latitude, longitude } = location;
          const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
          Linking.openURL(url);
        }
      };
      const Handleotheruser = () => {
        navigation.navigate('other',{name,about,age,place,profession,interests,insp,availability,otheruser,languages,image});
      }
  
  return (
    <View style={{alignContent:'center',backgroundColor:'white',height:1000,flex:1,justifyContent:'center',top:'4.672804041287183%'}}>
    <View style={{height:80,width:'100%'}}>
    <View style={{height:31,width:31}}>
    <TouchableOpacity style={{left:15,top:23}} onPress={back}>
     <Image source={require('../assets/icons/goback.png')} style={styles.sicon} />
        </TouchableOpacity>
    </View>
    <Image style={{resizeMode:'contain',width:48,height:48,borderRadius:24,left:290,bottom:16}} source={{uri: image}}></Image>
       <View style= {{alignSelf:'flex-start',left:130,bottom:54}}>
    <TouchableOpacity style={{top:'20%'}} onPress={Handleotheruser}>
    <Text style={{color:'#14171a',fontSize:14,fontFamily:'Montserrat-Bold',textAlign:'right',width:150,}}>{name}</Text>
    </TouchableOpacity>
    </View>
    </View>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.img}>
        <Image source={{uri : imageurl}} style={{ width: 334,
         height: 246, resizeMode: 'contain', borderRadius: 20 }} />
        </View>
        <View style={{flexDirection:'column',height:1150,top:10}}>
        <View style={{marginBottom:30,justifyContent:'center'}}>
        <TextInput editable={false} value={title} style={[styles.inp4,{color:'#14171a',height:34,top:10,}]}></TextInput>
     
        </View>
      <Text style={[styles.texty,{bottom:10}]}>DESCRIPTION ABOUT THE EVENT </Text>
      <TextInput editable={false} value={Description} multiline={true} style={[styles.inp2,{color:'#14171a',top:0,lineHeight: 16,
        paddingTop: 12,
        paddingBottom: 12,
        paddingHorizontal: 16}]}></TextInput>
      <Text style={[styles.texty,{top:5}]}>DESCRIPTION ABOUT OUR FRIENDS/GANG </Text>
      <TextInput value={TeamDescription} multiline={true} editable={false} style={[styles.inp2,{color:'#14171a',top:10,textAlignVertical:'top',lineHeight: 16,
        paddingTop: 12,
        paddingBottom: 12,
        paddingHorizontal: 16}]}></TextInput>
          <Text style={[styles.texty,{top:12}]}>LOCATION/ADDRESS</Text>
      <TextInput value={address} multiline={true} editable={false} style={[styles.inp2,{color:'#14171a',top:15,lineHeight: 16,
        paddingTop: 12,
        paddingBottom: 12,
        paddingHorizontal: 16}]}></TextInput>
           <View  style={{
               width:'80%',
              shadowColor: 'black',
              shadowOffset: { width: 4, height: 4 },
              shadowOpacity: 0.2,
              shadowRadius: 4,
              elevation: 4,
              backgroundColor: '#e1e8ed',
              borderColor: 'black',
              margin: '5%',
              borderRadius: 20,
              alignSelf:'center',
              alignItems:'center',
              marginBottom:'1%',
            }}>
             <Text style={[styles.texty1,{top:20,right:'30%'}]}>EVENT </Text>
      <TextInput value={eventtype} editable={false} style={[styles.inp1,{color:'#14171a',backgroundColor:'#e1e8ed',bottom:'1.5%',left:'5%'}]}></TextInput>
 
      <Text style={[styles.texty1,{top:4,right:'31.5%'}]}>DATE </Text>
      <TextInput value={Date} editable={false} style={[styles.inp1,{color:'#14171a',bottom:'4.5%',textAlignVertical:'top',backgroundColor:'#e1e8ed',left:'5%'}]}></TextInput>
      <Text style={[styles.texty1,{right:'31.5%',bottom:'2.3%'}]}>TIME </Text>
      <TextInput value={ftime} editable={false} style={[styles.inp1,{color:'#14171a',top:'2.5%',backgroundColor:'#e1e8ed'}]}></TextInput>
      <TextInput value={ttime} editable={false} style={[styles.inp1,{color:'#14171a',backgroundColor:'#e1e8ed',left:'35%',bottom:'5%'}]}></TextInput>
      <Text style={[styles.texty1,{bottom:'23%',}]}>FROM</Text>
      <Text style={[styles.texty1,{bottom:'27.8%',left:'35%'}]}>TO</Text>
      <Text style={[styles.texty1,{right:'32%',bottom:'21.5%'}]}>GMT</Text>
      <Text style={[styles.texty1,{bottom:'15%',right:'11%'}]}>PERSONS REQUIRED </Text>
      <TextInput value={No_required ? No_required.toString() : ''} editable={false} style={[styles.inp1,{color:'#14171a',bottom:'22%',left:'30%',backgroundColor:'#e1e8ed'}]}></TextInput>
   
         <Text style={[styles.texty1,{bottom:'15%',right:'26%'}]}>AMOUNT </Text>
      <TextInput value={amount} editable={false} style={[styles.inp1,{color:'#14171a',bottom:'21.5%',left:'10%',backgroundColor:'#e1e8ed'}]}></TextInput>
  <TouchableOpacity style={{backgroundColor:'#0a0a67',width:112,height:45,backgroundColor: backgroundColor,borderRadius:10,bottom:'10%'}} onPress={Request}>
{toggleButton ? (
  <Text style={{color:'white',alignSelf:'center',top:11,fontFamily:'Montserrat-ExtraBold',fontSize:17}}>REQUEST</Text>
) : (
  <Text style={{color:'white',alignSelf:'center',top:11,fontFamily:'Montserrat-ExtraBold',fontSize:17}}>REQUESTED</Text>
)}
</TouchableOpacity>
      </View>
      <Text style={[styles.texty,{top:28}]}>LOCATION ON THE MAP :</Text>
      <View style={{ width: 300, height: 300,top:40,alignSelf:'center'}}>
      <MapView
        style={{ flex: 1, }}
        region={
          location
            ? {
                latitude: location.latitude,
                longitude: location.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }
            : null
        }
        zoomEnabled={true}
      >
        {location && <Marker coordinate={location} />}
      </MapView>
    </View>
   
    <View style={{alignSelf:'center',width:112,height:45,top:90}}>
     
    <TouchableOpacity style={{backgroundColor:'#0a0a67',width:112,height:30,borderRadius:10,alignSelf:'center',bottom:'50%'}} onPress={openGoogleMaps}>
    <Text style={{color:'white',alignSelf:'center',top:5,fontFamily:'Montserrat-Bold',fontSize:12,}}>OPEN IN GMAP</Text>
    </TouchableOpacity>
    </View>
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
      img: {
        width:334,
        height:246,
        backgroundColor:'white',
        borderRadius:20,
        alignSelf:'center',
        top:8
      },
      texty:{
        fontSize:14,
        fontFamily:'Montserrat-Bold',
        left:28
      },
      texty1:{
        fontSize:14,
        fontFamily:'Montserrat-Bold',
      },
      inp1:{
        backgroundColor:'white',
        textAlign:'center',
        fontSize:14,
        fontFamily:'Montserrat-Regular',
      },
      inp4:{
        backgroundColor:'white',
        textAlign:'center',
        fontSize:20,
        fontFamily:'Montserrat-ExtraBoldItalic',
        alignSelf:'center'
      },
      inp2:{
        backgroundColor:'white',
        fontSize:12,
        alignSelf:'center',
        textAlignVertical:'top',
        width:309,
        fontFamily:'Montserrat-SemiBold'
      },
      inp3:{
        width:100,
        backgroundColor:'white',
        textAlign:'center',
        fontSize:14,
      },
})
;