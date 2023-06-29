import React from 'react';
import { View, Text, StyleSheet , TouchableOpacity} from 'react-native';

const Contactus = () => {
    const handleEmailPress = () => {
        Linking.openURL('mailto:contact@engageapp.com');
      };
    
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Contact Us</Text>
          <Text style={styles.subtitle}>For any inquiries or assistance, please feel free to contact us:</Text>
          <TouchableOpacity onPress={handleEmailPress}>
            <Text style={styles.contactInfo}>Email: <Text style={{color:"#0a0a67",fontFamily:'Montserrat-Regular'}}>contact@engageapp.com</Text></Text>
          </TouchableOpacity>
          
    
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5fefd',
        top:'4%'
      },
      title: {
        fontSize: 20,
        fontFamily: 'Montserrat-Bold',
        marginBottom: 10,
        color: '#0a0a67',
      },
      subtitle: {
        fontSize: 16,
        fontFamily: 'Montserrat-Bold',
        marginTop: 10,
        color: '#14171a',
        marginBottom: 5,
      },
      contactInfo: {
        fontSize: 14,
        marginTop: 5,
        color: '#14171a',
      },
    });
export default Contactus;