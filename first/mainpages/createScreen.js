import { StyleSheet, Text, View,TouchableOpacity,Image, Button} from 'react-native';
import React from 'react';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { useState,useRef,useEffect} from 'react';
import MyDatePicker from '../bars/datepicker';
import DropdownPicker from '../bars/eventpicker';
import RadioButton from '../bars/radiobutton';
import Location from '../bars/maps';
import { useCallback } from 'react';
import * as ImagePicker from 'expo-image-picker';
import {useRoute } from '@react-navigation/native';

export default function CreateScreen({navigation}) {
  const [image, setImage] = useState(null);
  const route = useRoute();
  const goback= () =>{
    navigation.goBack();
  }
 
  /*const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };*/
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
        name: 'eventpic.jpg',
        type: 'image/jpeg',
      });

      fetch('http://192.168.29.34:5000/upload-image', {
        method: 'POST',
        mode:'cors',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        },
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

  const uploadPost = async () => { 
    const data = {   
    };
    data.title = Title; data.required = personRequired; data.edate = selectedDate; 
     data.team_description = TeamDescription; data.main_category = selectedCategory;
    data.category = selectedSubCategory;data.elocation = selectedLocation; data.address = Address;
    data.paytype = payType;data.amount = Amount;data.user_id = "2" ;    data.description = Description; 
    data.estime = timeFrom; data.eetime = timeTo; data.description = Description; data.imageurl = imgData.imageurl;
    try {
      const response = await fetch('http://192.168.29.34:5000/insert-post-details', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        const responseData = await response.json();
        if(responseData['res']==true)
        console.log('Post uploaded successfully!', responseData);
        else {
          console.log('Failed to upload Post:', response.status);
        }
      } else {
        console.log('Failed to upload Post:', response.status);
      }
    } catch (error) {
      console.log('Error uploading Post:', error);
    }
  };
  
   const[selectedDate,setSelectedDate] = useState('');
  const handleDateSelect = (date) => {
    console.log('Selected Date:', date);
    setSelectedDate(date)

  };
  const [selectedLocation,setSelectedLocation] = useState('');
  const handleLocationSelect = (location) => {
    console.log('Selected Location:', location);
    setSelectedLocation(location);

  };
  const [payType, setPayType] = useState('');
  const [Amount, setAmount] = useState('');
  const handleSelectionChange = (selected, value) => {
    console.log('Selected:', selected);
    setPayType(selected);
    setAmount(value);
    console.log('Text Input Value:', value);
  };
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubCategory, setSelectedSubCategory] = useState('');
  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
  };

  const handleSubCategoryChange = useCallback((value) => {
    console.log('Selected Subcategory:', value);
    setSelectedSubCategory(value);
    if (value && value !== '') {
      console.log('Selected Category:', selectedCategory);
    }
  }, [selectedCategory]);
  const [Title, setTitle] = useState('');
  const [Description, setDescription] = useState('');
  const [Address, setAddress] = useState('');
  const [TeamDescription, setTeamDescription] = useState('');
  const [personRequired,setPersonRequired] = useState('');
  const MAX_CHARACTERS_PER_LINE = 40;
  const fontSize = 10;
  const lineCharacterLimit = Math.floor(309 / (fontSize * 0.6));
  const prevTimeFromInput = useRef("");
  const [timeFrom, setTimeFrom] = useState("");
  const [timeTo, setTimeTo] = useState("");
  const prevTimeToInput = useRef("");

  const handleTimeToChange = (input) => {
    let formattedInput = input.replace(/[^0-9]/g, "");
    if (formattedInput.length < prevTimeToInput.current.length) {
      setTimeTo(formattedInput);
      prevTimeToInput.current = formattedInput;
      return;
    }
    if (formattedInput.length > 2) {
      formattedInput =
        formattedInput.substring(0, 2) + ":" + formattedInput.substring(2);
    }
  
    let hours = formattedInput.substring(0, 2);
    let minutes = formattedInput.substring(3);
  
    if (hours > "23") {
      hours = "23";
    }
    if (minutes > "59") {
      minutes = "59";
    }
  
    formattedInput = hours + ":" + minutes;
  
    setTimeTo(formattedInput);
    prevTimeToInput.current = formattedInput;
  };
  
  const handleTimeFromChange = (input) => {
    let formattedInput = input.replace(/[^0-9]/g, "");
    if (formattedInput.length < prevTimeFromInput.current.length) {
      setTimeFrom(formattedInput);
      prevTimeFromInput.current = formattedInput;
      return;
    }
    if (formattedInput.length > 2) {
      formattedInput =
        formattedInput.substring(0, 2) + ":" + formattedInput.substring(2);
    }
  
    let hours = formattedInput.substring(0, 2);
    let minutes = formattedInput.substring(3);
  
    if (hours > "23") {
      hours = "23";
    }
    if (minutes > "59") {
      minutes = "59";
    }
  
    formattedInput = hours + ":" + minutes;
  
    setTimeFrom(formattedInput);
    prevTimeFromInput.current = formattedInput;
  };
  
  return (
    <View style={{alignContent:'center',backgroundColor:'#E1E8ED',height:1000,flex:1,justifyContent:'center',top:36}}>
     <TouchableOpacity style={styles.bbutton} onPress={goback}>
     <Image source={require('../assets/icons/goback.png')} style={styles.sicon} />
        </TouchableOpacity>
     <TouchableOpacity style={styles.button} onPress={uploadPost}>
          <Text style={{fontWeight:'800',color:'white',fontSize:16,alignSelf:'center',top:7}}>POST</Text>
        </TouchableOpacity>
        <ScrollView>
        <View style={styles.img}>
        {imgData.imageurl && <Image source={{ uri: serverImagePath }} style={{ width: 334, height: 246, resizeMode: 'contain', borderRadius: 20 }} />}
        </View>
        <TouchableOpacity style={{width:310,height:44,backgroundColor:'#0A0A67',borderRadius:20,alignSelf:'center',top:30,marginBottom:10}} onPress={handleImageUpload}>
        <Text style={{ color: 'white', fontSize: 16,alignSelf:'center',top:10,fontWeight:'800' }}>UPLOAD LOCATION IMAGE</Text>
        </TouchableOpacity> 
        <View>
          <Text style={styles.texty}>ADD TITLE</Text>
          <TextInput onChangeText={text =>  setTitle(text)} maxLength={20} style={{height:44,width:309,alignSelf:'center',backgroundColor:'white',borderRadius:20,shadowColor: 'black',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    textAlign:'center',
    top:45}}></TextInput>
    <Text style={{fontSize:12,
    left:31,
    top:62}}>ADD DESCRIPTION</Text>
    <TextInput
    onChangeText={text =>setDescription(text)}
      multiline
      maxLength={200}
      style={{
        height: 144,
        fontSize: 12,
        width: 309,
        alignSelf: 'center',
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 10,
        textAlignVertical: 'top',
        lineHeight: 16,
        paddingTop: 12,
        paddingBottom: 12,
        paddingHorizontal: 16,
        shadowColor: 'black',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
        top: 77,
        maxWidth: fontSize * 0.6 * lineCharacterLimit,
        fontWeight:'700'
      }}
    />
    <Text style={{fontSize:12,
    left:31,
    top:95}}>ADD NO.OF PERSON REQUIRED</Text>
          <TextInput onChangeText={text =>setPersonRequired(text)} maxLength={3} keyboardType="numeric" style={{height:44,width:309,alignSelf:'center',backgroundColor:'white',borderRadius:20,shadowColor: 'black',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    textAlign:'center',
    top:107}}></TextInput>
    <Text style={{fontSize:12,
    left:31,
    top:125}}>ADD DATE</Text>
    <MyDatePicker onDateSelect={handleDateSelect}/>
    <Text style={{fontSize:12,
    left:31,
    top:14}}>TIME FROM</Text>
    <Text style={{fontSize:12,
    left:31,
    bottom:4,
    left:200}}>TIME TO</Text>
    <TextInput
        style={styles.input}
        placeholder="Enter time (HH:mm)"
        maxLength={5}
        value={timeFrom}
        onChangeText={handleTimeFromChange}
        keyboardType="numeric"
      />
       <TextInput
        style={styles.input2}
        placeholder="Enter time (HH:mm)"
        maxLength={5}
        value={timeTo}
        onChangeText={handleTimeToChange}
        keyboardType="numeric"
      />
      <Text style={{fontSize:12,
    left:31,
    bottom:38}}>ADD ABOUT YOUR FRIENDS GANG/TEAM</Text>
    <TextInput
    onChangeText={text =>setTeamDescription(text)}
      multiline
      maxLength={200}
      style={{
        height: 144,
        fontSize: 12,
        width: 309,
        alignSelf: 'center',
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 10,
        textAlignVertical: 'top',
        lineHeight: 16,
        paddingTop: 12,
        paddingBottom: 12,
        paddingHorizontal: 16,
        shadowColor: 'black',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
        bottom:25,
        maxWidth: fontSize * 0.6 * lineCharacterLimit,
        fontWeight:'700'
      }}
    />
     <Text style={{fontSize:12,
    left:31,
    bottom:8}}>ADD CATEGORY AND SUBCATEGORY OF THE EVENT</Text>
    <DropdownPicker onCategoryChange={handleCategoryChange}
        onSubCategoryChange={handleSubCategoryChange}/>
    <Text style={{fontSize:12,
    left:31,
    bottom:48}}>AMOUNT PER PERSON(if required select pay)</Text>
    <RadioButton onSelectionChange={handleSelectionChange}/>
    <Text style={{fontSize:12,
    left:31,
    bottom:10}}>ADD LOCATION OF THE EVENT(Address)</Text>
    <TextInput
    placeholder='Enter city name first e.g: Tambaram - then address use hyphen'
    onChangeText={text =>setAddress(text)}
      multiline
      maxLength={200}
      style={{
        height: 144,
        fontSize: 12,
        width: 309,
        alignSelf: 'center',
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 10,
        textAlignVertical: 'top',
        lineHeight: 16,
        paddingTop: 12,
        paddingBottom: 12,
        paddingHorizontal: 16,
        shadowColor: 'black',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
        top: 8,
        maxWidth: fontSize * 0.6 * lineCharacterLimit,
        fontWeight:'700'
      }}
    />
     <Text style={{fontSize:12,
    left:31,
    top:30}}>ADD LOCATION ON MAP</Text>
    <Location onLocationSelect={handleLocationSelect}/>
    
        </View>
        <View style={{height:200}}></View>
        </ScrollView>
    </View>

  );
}


const styles = StyleSheet.create({
  button:{
    backgroundColor:'#0A0A67',
    width:89,
    height:35,
    borderRadius:15,
    alignItems:'center',
    bottom:10,
    left:253
  },
  bbutton:{
    height:35,
    width:35,
    left:15,
    top:25
  },
  sicon: {
    width:35,
    height:35,
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
    fontSize:12,
    left:31,
    top:37
  },
  input: {
    width: 150,
    height: 44,
    borderRadius:20,
    backgroundColor:'white',
    paddingHorizontal: 8,
    marginBottom: 16,
    alignItems:'center',
    alignSelf:'center',
    shadowColor: 'black',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    textAlign:'center',
    right:85,
    top:6
  },
  input2: {
    width: 150,
    height: 44,
    borderRadius:20,
    backgroundColor:'white',
    paddingHorizontal: 8,
    bottom:55,
    alignItems:'center',
    alignSelf:'center',
    shadowColor: 'black',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    textAlign:'center',
    left:80,
  
  },

})
;