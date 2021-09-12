import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import markerImage from '../../assets/images/marker.png';
import styles from './styles';

export function Map({ markers, mapStyle, onPressMarker, ...props }) {
  const handlePressMarker = (marker) => {
    if (onPressMarker) {
      onPressMarker(marker);
    }
  };
  return (
    <MapView style={[styles.map, mapStyle]} {...props}>
      {markers?.map((marker) => (
        <Marker
          key={marker.id}
          onPress={() => {
            handlePressMarker(marker);
          }}
          coordinate={{
            latitude: marker.latitude,
            longitude: marker.longitude,
          }}
          image={markerImage}
        />
      ))}
    </MapView>
  );
}
