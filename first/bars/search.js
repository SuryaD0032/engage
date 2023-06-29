import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, FlatList, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Search = () => {  
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isImageContainerEnabled, setIsImageContainerEnabled] = useState([]);
  const [isSearchBarClicked, setIsSearchBarClicked] = useState(false);
  const [isTypingEnabled, setIsTypingEnabled] = useState(true);

 
  const navigation = useNavigation();

  const clearSearchText = () => {
    setSearchText('');
  };

  

 

  useEffect(() => {
    if (searchText !== '') {
      searchAPI(); 
    } else {
      setSearchResults([]);
    }
  }, [searchText]);

  const searchAPI = async () => {
    try {
      const response = await fetch('http://192.168.29.34:5000/event-details', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'cors',
        body: JSON.stringify({ category: searchText }) 
      });

      const data = await response.json();
      console.log(data);
      console.log('search');
      setSearchResults(data);
    } catch (error) {
      console.error(error);
    }
  };




  const isSearchTextEmpty = searchText === '';
  const handleSearch = (text) => {
    setSearchText(text);
   
    setIsSearchBarClicked(true);
    setIsTypingEnabled(text !== '');
    setIsImageContainerEnabled(false);
  };

  const keyExtractor = (item) => (item && item.id ? item.id.toString() : '');


   const renderSearchItem = ({ item }) => (
    
      <TouchableOpacity style={styles.resultItem} onPress={() => navigation.navigate('post', {eventId:item.event_id})}>
        <View style={styles.carditems}>
          <Text style={styles.nameText}>{item.title}</
          Text>
          <Text style={styles.branchText}>{item.main_category}</Text>
        </View>
      </TouchableOpacity>  
  );


  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View>
          <Image source={require('../assets/icons/search.png')} style={styles.searchIcon} />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={searchText}
          onChangeText={handleSearch}
          onFocus={() => setIsSearchBarClicked(true)}
          editable={isTypingEnabled}
        />
        {isSearchTextEmpty && !isSearchBarClicked ? (
  <View style={styles.clearButtonDisabled} />
) : (
  <TouchableOpacity
    style={styles.clearButton}
    onPress={() => {
      clearSearchText();
      setIsSearchBarClicked(false);
      setIsTypingEnabled(true);
      setIsImageContainerEnabled(true);
    }}
  >
    <Image source={require('../assets/icons/xmark.png')} style={styles.clearIcon} />
  </TouchableOpacity>
)}

      </View>

      {searchResults.length > 0 && isSearchBarClicked && (
 <FlatList
 data={searchResults}
 keyExtractor={keyExtractor}
 renderItem={renderSearchItem }
 style={styles.FlatList}
/>
)}
{searchResults.length === 0 && searchText !== '' && (
  <Text style={styles.noResultsText}>No results</Text>
)}


{ !isSearchBarClicked && isImageContainerEnabled ? (
        <View style={{alignItems:'center'}}>
          <View style={styles.imageContainerRow1}>
            <View style={styles.imageContainer}>
              <TouchableOpacity style={styles.touchableOpacity}   onPress={() => navigation.navigate('')}>
                <ImageBackground
                  source={require('../assets/icons/SRT.jpeg')}
                  style={styles.image}
                  imageStyle={styles.imageStyle}
                >
                  <Text style={styles.overlayText}>CRICKET</Text>
                </ImageBackground>
              </TouchableOpacity>
            </View>

            <View style={styles.imageContainer}>
              <TouchableOpacity style={styles.touchableOpacity}  onPress={() => navigation.navigate('')}>
                <ImageBackground
                  source={require('../assets/icons/football.jpg')}
                  style={styles.image}
                  imageStyle={styles.imageStyle}
                >
                  <Text style={styles.overlayText}>FOOTBALL</Text>
                </ImageBackground>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.imageContainerRow2}>
            <View style={styles.imageContainer}>
              <TouchableOpacity style={styles.touchableOpacity}  onPress={() => navigation.navigate('')}>
                <ImageBackground
                  source={require('../assets/icons/movies.jpg')}
                  style={styles.image}
                  imageStyle={styles.imageStyle}
                >
                  <Text style={styles.overlayText}>MOVIES</Text>
                </ImageBackground>
              </TouchableOpacity>
            </View>

            <View style={styles.imageContainer}>
              <TouchableOpacity style={styles.touchableOpacity}  onPress={() => navigation.navigate('')}>
                <ImageBackground
                  source={require('../assets/icons/music.jpg')}
                  style={styles.image}
                  imageStyle={styles.imageStyle}
                >
                  <Text style={styles.overlayText}>MUSIC</Text>
                </ImageBackground>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.imageContainerRow3}>
            <View style={styles.imageContainer}>
              <TouchableOpacity style={styles.touchableOpacity}  onPress={() => navigation.navigate('')}>
                <ImageBackground
                  source={require('../assets/icons/party.jpg')}
                  style={styles.image}
                  imageStyle={styles.imageStyle}
                >
                  <Text style={styles.overlayText}>PARTY</Text>
                </ImageBackground>
              </TouchableOpacity>
            </View>

            <View style={styles.imageContainer}>
              <TouchableOpacity style={styles.touchableOpacity}   onPress={() => navigation.navigate('')}>
                <ImageBackground
                  source={require('../assets/icons/tour.jpg')}
                  style={styles.image}
                  imageStyle={styles.imageStyle}
                >
                  <Text style={styles.overlayText}>TOURING</Text>
                </ImageBackground>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        
      ): null}
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf:'center',
    backgroundColor: '#fff',
    marginTop: 30,
    borderRadius: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width:1000,
    marginLeft:20,
    borderColor:"#0a0a67",
    backgroundColor:''
  },
  imageContainerRow1: {
    position:'absolute',
    marginTop:40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    alignSelf:'center',
    left:'2.5%'
  },
  imageContainerRow2: {
    position:'absolute',
    marginTop:220,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    alignSelf:'center',
    left:'2.5%'
  },
  imageContainerRow3: {
    position:'absolute',
    marginTop:400,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    alignSelf:'center',
    left:'2.5%'
  },
  imageContainer: {
    flex: 1,
  },
  card: {
    marginTop:10,
    flexDirection:'row',
    width: '50%',
    height: 60,
    marginLeft:0,
    borderRadius: 25,
    borderWidth:1,
    borderColor:'#0a0a67',
    backgroundColor: '#f5fefd',
    shadowColor: '#000',
  
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  clearButton: {
    marginLeft: 5,
    padding: 5,
    marginTop:15
  },
  clearIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  image: {
    width: 144,
    height: 144,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
 
  searchIcon: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
    marginTop:15,
    marginLeft:10
  },
  imageStyle: {
    borderRadius: 10, 
  },
  overlayText: {
    fontSize: 14,
    marginLeft: 60,
    marginBottom: 4,
    fontFamily: 'Montserrat-Bold',
    color: '#f5fefd',
  },
  input: {
    flexDirection:'row',
    height: 50,
    marginTop:5,
    width:290,
    borderRadius:25,
    paddingHorizontal: 10,
    fontFamily:'Montserrat-SemiBold'
    
  },
  resultItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray'
  },
  noResultsText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: 'black',
    paddingBottom:20,
    fontFamily:'Montserrat-SemiBold'
  },
  FlatList:{
   
  },
  carditems: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding:20,
    paddingLeft:10,
    borderColor: '#0a0a67',
    width:360,
    height:60,
    marginLeft:25
  },
  nameText: {
    fontSize: 18,
    fontFamily:'Montserrat-Bold',
    marginBottom: 1,
    color:'#14171a'
    
  
  },
  branchText: {
    fontWeight:400,
    fontSize: 12,
    color:'#14171a',
    fontFamily:'Montserrat-Regular',
  },
});

export default Search;
