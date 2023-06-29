import React from 'react';
import { View, TouchableOpacity, StyleSheet ,Text} from 'react-native';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';

const MyPage = () => {

    const navigation = useNavigation();

  const handlePress = () => {
    // Function to handle TouchableOpacity press
    console.log('TouchableOpacity pressed');
    navigation.navigate('create');
  };

  return (
    <View style={styles.container}>
      <View style={styles.animationContainer}>
        {/* First LottieView */}
        <LottieView
          source={require('../assets/animation/page.json')}
          autoPlay
          loop
        />
      </View>

      <TouchableOpacity
        style={styles.touchableOpacity}
        onPress={handlePress}
      >
        {/* TouchableOpacity content */}
        <Text style={styles.innerText}>CLICK TO POST FOR ENGAGE</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:100,
    backgroundColor: '#f5fefd',
  },
  animationContainer: {
    flex:0.7,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fefd',
    height:100,
  },
  touchableOpacity: {
    backgroundColor: '#0a0a67',
    marginTop:'40%',
    height:'8%',
    width:'70%',
    alignSelf:"center",
    borderRadius:20,
    alignItems: 'center',
  },
  innerText: {
    color: '#f5fefd',
    fontSize: 18,
    fontFamily:"",
    fontWeight: 'bold',
    paddingLeft:"6%",
    padding:"7%"
  },
});

export default MyPage;