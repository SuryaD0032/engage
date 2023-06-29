import React , {useState}from 'react';
import { View, Text, StyleSheet , TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Language = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('');

    const navigation = useNavigation();

    const handleLanguageSelect = (language) => {
      setSelectedLanguage(language);
      // You can add your logic here to handle the selected language
    };

    const handleSetLanguage = () => {
        // Perform any action when the "Set My Language" button is pressed
        if (selectedLanguage=== 'English') {
          // Handle the selected language
          navigation.navigate('navigation');
        }
          else{
          alert('Coming soon');
        }
      };
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Select Your Language</Text>
        <TouchableOpacity
          style={[styles.languageButton, selectedLanguage === 'English' && styles.selectedLanguageButton]}
          onPress={() => handleLanguageSelect('English')}
        >
          <Text style={[styles.languageButtonText, selectedLanguage === 'English' && styles.selectedLanguageButtonText]}>
            English
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.languageButton, selectedLanguage === 'Tamil' && styles.selectedLanguageButton]}
          onPress={() => handleLanguageSelect('Tamil')}
        >
          <Text style={[styles.languageButtonText, selectedLanguage === 'Tamil' && styles.selectedLanguageButtonText]}>
          தமிழ்  (Coming Soon!)
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.languageButton, selectedLanguage === 'Malayalam' && styles.selectedLanguageButton]}
          onPress={() => handleLanguageSelect('Malayalam')}
        >
          <Text style={[styles.languageButtonText, selectedLanguage === 'Malayalam' && styles.selectedLanguageButtonText]}>
          മലയാളം  (Coming Soon!)
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.languageButton, selectedLanguage === 'Telugu' && styles.selectedLanguageButton]}
          onPress={() => handleLanguageSelect('Telugu')}
        >
          <Text style={[styles.languageButtonText, selectedLanguage === 'Telugu' && styles.selectedLanguageButtonText]}>
          తెలుగు  (Coming Soon!)
          </Text>
        </TouchableOpacity>
        <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.setLanguageButton} onPress={handleSetLanguage}>
          <Text style={styles.setLanguageButtonText}>Set My Language</Text>
        </TouchableOpacity>
      </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#f5fefd',
    },
    title: {
      alignSelf:"center",
      marginTop:20,
      fontSize: 20,
      marginBottom: 10,
      color: '#0a0a67',
      marginBottom:20,
      fontFamily: 'Montserrat-Bold'

    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 20,
      },
    setLanguageButton: {
        backgroundColor: '#0a0a67',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
      },
      setLanguageButtonText: {
        fontSize: 16,
        color: '#ffffff',
        textAlign: 'center',
        fontFamily: 'Montserrat-Bold'
      },
    
    languageButton: {
      marginTop:10,  
      backgroundColor: '#e1e8ed',
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 20,
      marginBottom: 10,
      width:200,
      alignSelf:'center'

    },
    selectedLanguageButton: {
      backgroundColor: '#0a0a67',
    },
    languageButtonText: {
      fontSize: 16,
      color: '#14171a',
      fontFamily:'Montserrat-SemiBold'
      
    },
    selectedLanguageButtonText: {
      color: '#f5fefd',
    },
  });

export default Language;