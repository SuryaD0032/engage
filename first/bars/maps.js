import React, { useState } from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const Location = ({onLocationSelect}) => {
  const [location, setLocation] = useState(null);

  const handleMapPress = (event) => {
    const { coordinate } = event.nativeEvent;
    setLocation(coordinate);
    onLocationSelect(coordinate); 
    console.log('Marked Location:', coordinate);
  };

  return (
    <View style={{ width: 300, height: 300, borderRadius:20,top:50,alignSelf:'center'}}>
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
        onPress={handleMapPress}
        zoomEnabled={true}
      >
        {location && <Marker coordinate={location} />}
      </MapView>
    </View>
  );
};

export default Location;


