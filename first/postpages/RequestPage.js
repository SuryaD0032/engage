import { View } from "react-native";
import { Image,StyleSheet,Text } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

export default function Request ({navigation}) {
    const back= () => navigation.goBack();
    return(
        <View style={{alignItems:'center',justifyContent:'center',top:'4.69%'}}>
        <Text style={{fontFamily:'Montserrat-Bold',fontSize:20,top:'1%'}}>TITLE</Text>
        <View style={{height:31,width:31,right:'40%',bottom:'2%'}}>
    <TouchableOpacity style={{}} onPress={back}>
     <Image source={require('../assets/icons/goback.png')} style={styles.sicon} />
        </TouchableOpacity>
    </View>
             <View style={styles.img}>
        <Image source={require('../assets/icons/best.png')} style={{ width: 334,
         height: 246, resizeMode: 'contain', borderRadius: 20 }} />
      
        </View>
        <Image style={{resizeMode:'contain',height:30,width:30,right:'20%'}} source={require('../assets/icons/time.png')}></Image>
        <Text style={{fontFamily:'Montserrat-BoldItalic',fontSize:14,bottom:'2.4%',left:'10%'}}>12/09/2002</Text>
        <Image style={{resizeMode:'contain',height:30,width:30,right:'20%'}} source={require('../assets/icons/calender.png')}></Image>
        <Text style={{fontFamily:'Montserrat-BoldItalic',fontSize:14,bottom:'2.4%',left:'10%'}}>00.00 - 00.00</Text>
        <View style={{justifyContent:'center',height:'6%',borderBottomColor:'#0a0a67',width:'85%',borderWidth:1,borderColor:'white',marginBottom:'0.5%',bottom:'0.5%'}}>
        <Text style={{fontFamily:'Montserrat-Bold',fontSize:18,alignSelf:'center',color:'#0a0a67'}}>YOUR REQUESTS</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{alignSelf:'center',alignItems:'center',height:1000}}>
                <View style={{width:318,height:59,backgroundColor:'#0a0a67',borderRadius:10,flexDirection:'row',justifyContent:'space-between',alignSelf:'center',}}>
                    <Image style={{height:35,width:35,resizeMode:'contain',borderRadius:17.5,alignSelf:'center',left:'15%'}} source={require('../assets/icons/best.png')}>
                    </Image>
                    <View style={{alignSelf:'flex-start',right:'20%',top:'6.5%'}}>
                    <Text style={{fontFamily:'Montserrat-Bold',fontSize:12,alignSelf:'flex-start',color:'white',width:150,}}>
                        SuryaGokulSuryaGokul
                    </Text>
                    </View><TouchableOpacity style={{height:25,width:25,alignSelf:'center',justifyContent:'center',top:'28%',right:'60%'}}>
                <Image style={{resizeMode:'contain',height:27,width:27}} source={require('../assets/icons/done.png')}></Image>
               </TouchableOpacity>
               <TouchableOpacity style={{height:25,width:25,alignSelf:'center',justifyContent:'center',top:'27%',right:'100%'}}>
                <Image style={{resizeMode:'contain',height:25,width:25}} source={require('../assets/icons/cross.png')}></Image>
               </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
        </View>

    );


}


const styles = StyleSheet.create({
    img: {
      width:334,
      height:246,
      backgroundColor:'white',
      borderRadius:20,
      alignSelf:'center',
      marginBottom:'2%',
      bottom:'1%'
    },
    sicon:{
        height:31,
        width:31
      },
  
  });