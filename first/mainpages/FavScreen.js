import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import SavedScreen from '../postpages/SavedScreen';
import PostedScreen from '../postpages/YoursScreen';
import { Text } from 'react-native';

const Favscreen = () => {
  const [activeSection, setActiveSection] = useState('saved');

  const handleSectionPress = (section) => {
    setActiveSection(section);
  };
  return (
    <View style={styles.container}>
      <View style={styles.navigationBar}>
        <TouchableOpacity
          style={[styles.sectionButton, activeSection === 'saved' && styles.activeSectionButton]}
          onPress={() => handleSectionPress('saved')}
        >
          <Text  style={[
              styles.sectionButtonText,
              activeSection === 'saved' && styles.activeSectionButtonText,
            ]}>Favourites</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.sectionButton, activeSection === 'yours' && styles.activeSectionButton]}
          onPress={() => handleSectionPress('yours')}
        >
          <Text   style={[
              styles.sectionButtonText,
              activeSection === 'yours' && styles.activeSectionButtonText,
            ]}>Your Posts</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.screenContainer}>
        {activeSection === 'saved' && <SavedScreen />}
        {activeSection === 'yours' && <PostedScreen />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  navigationBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    backgroundColor: 'white',
  },
  sectionButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'transparent',
    height:60
  },
  screenContainer: {
    flex: 1,
  },
  sectionButtonText: {
    fontSize: 16,
    color:'#657786'
  },
  activeSectionButton: {
    borderBottomColor: '#0a0a67',
  },
  activeSectionButtonText: {
    color: '#0a0a67', // 
  },
});

export default Favscreen;

