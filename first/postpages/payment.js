import { View } from "react-native";
import { Image,StyleSheet,Text } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

export default function Payment () {
    
    return(
        <View style={{top:'4.69%',flexDirection:'column'}}>
        <View style={{height:61,width:'100%',backgroundColor:'#e1e8ed',borderBottomLeftRadius:20,
        borderBottomRightRadius:20,justifyContent:'space-between',flexDirection:'row',alignItems:'center',position:'absolute'}}>
            <TouchableOpacity style={{height:31,width:31,right:'-30%',}}>
     <Image source={require('../assets/icons/goback.png')} style={styles.icon} />
        </TouchableOpacity>
        <Text style={{fontFamily:'Montserrat-Bold',fontSize:20,right:'210%'}}>PAYMENT</Text>
        </View>
        <View style={{alignItems:'center',flexDirection:'column',top:'20%'}}>
        
        <Text style={{fontFamily:'Montserrat-BoldItalic',fontSize:18,alignSelf:'center'}}>TITLE</Text>
        <View style={{top:'5%'}}>
        <View style={{flexDirection:'row',}}>
        <Image style={[styles.icon,{right:'50%'}]} source={require('../assets/icons/location.png')}></Image>
        <Text style={{fontFamily:'Montserrat-Italic',fontSize:18,alignSelf:'center',width:150,left:'200%'}}>Location</Text>
        </View>
        <View style={{flexDirection:'row'}}>
        <Image style={[styles.icon,{left:'-50%'}]} source={require('../assets/icons/calender.png')}></Image>
        <Text style={{fontFamily:'Montserrat-Italic',fontSize:18,alignSelf:'center',left:'100%'}}>12/09/2002 & 00.00</Text>
        </View>
        <View style={{flexDirection:'row'}}>
        <Image style={[styles.icon,{right:'50%'}]} source={require('../assets/icons/amount.png')}></Image>
        <Text style={{fontFamily:'Montserrat-Italic',fontSize:18,alignSelf:'center',left:'180%',width:90}}>10000.00</Text>
        </View>
        </View>
        <View style={{justifyContent:'center',height:'15%',borderBottomColor:'#14171A',width:'85%',borderWidth:1,borderColor:'white'}}>
        </View>
        <Text style={{fontFamily:'Montserrat-Bold',fontSize:16,margin:20}}>CHOOSE YOUR PAYMENT METHOD</Text>
        <View style={{width:327,height:48,borderWidth:1,flexDirection:'row',top:'0%',alignItems:'center'}}>
        <TouchableOpacity style={{flexDirection:'row',width:327,height:48}}>
        <Image style={[styles.icon,{left:'30%',alignSelf:'center'}]} source={require('../assets/icons/google-pay.png')}></Image>
        <Text style={{fontFamily:'Montserrat-Regular',fontSize:16,left:'100%',alignSelf:'center'}}>Google Pay</Text>
        </TouchableOpacity>
        </View>
        
        <View style={{width:327,height:48,borderWidth:1,flexDirection:'row',top:'5%',alignItems:'center'}}>
        <TouchableOpacity style={{flexDirection:'row',width:327,height:48}}>
        <Image style={[styles.icon,{left:'30%',alignSelf:'center'}]} source={require('../assets/icons/paytm.png')}></Image>
        <Text style={{fontFamily:'Montserrat-Regular',fontSize:16,left:'100%',alignSelf:'center'}}>Paytm</Text>
        </TouchableOpacity>
        </View>
        
        <View style={{width:327,height:48,borderWidth:1,flexDirection:'row',top:'10%',alignItems:'center'}}>
        <TouchableOpacity style={{flexDirection:'row',width:327,height:48}}>
        <Image style={[styles.icon,{left:'30%',alignSelf:'center'}]} source={require('../assets/icons/cards.png')}></Image>
        <Text style={{fontFamily:'Montserrat-Regular',fontSize:16,left:'100%',alignSelf:'center'}}>Debit card/Credit card</Text>
        </TouchableOpacity>
        </View>
        <View style={{width:327,height:48,borderWidth:1,flexDirection:'row',top:'15%',alignItems:'center'}}>
        <TouchableOpacity style={{flexDirection:'row',width:327,height:48}}>
        <Image style={[styles.icon,{left:'30%',alignSelf:'center'}]} source={require('../assets/icons/cash.png')}></Image>
        <Text style={{fontFamily:'Montserrat-Regular',fontSize:16,left:'100%',alignSelf:'center'}}>Pay on Spot</Text>
        </TouchableOpacity>
        </View>
    

        </View>
  
        </View>

    );


}


const styles = StyleSheet.create({
 
    icon:{
        height:31,
        width:31,
        resizeMode:'contain'
      },
  
  });