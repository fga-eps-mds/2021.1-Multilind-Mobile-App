import React, { useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { useState } from 'react/cjs/react.development';
import markerImage from '../../assets/images/marker.png';
import markerSelectedImage from '../../assets/images/marker-yellow.png';
import styles from './styles';

export function GoogleMap({
  markers,
  mapStyle,
  onPressMarker,
  initialRegion,
  shouldDismissMarker,
  ...props
}) {
  const [selectedMarkerId, setSelectedMarkerId] = useState(null);

  const handlePressMarker = (marker) => {
    if (onPressMarker) {
      onPressMarker(marker);
      setSelectedMarkerId(marker.id);
    }
  };

  const handleMarkerDismiss = () => {
    setSelectedMarkerId(null);
  };

  useEffect(() => {
    if (shouldDismissMarker) {
      handleMarkerDismiss();
    }
  }, [shouldDismissMarker]);

  return (
    <MapView
      style={[styles.map, mapStyle]}
      initialRegion={initialRegion}
      {...props}
    >
      <Marker
        title="Você está aqui"
        coordinate={{
          latitude: initialRegion.latitude,
          longitude: initialRegion.longitude,
        }}
      />
      {markers?.map((marker) => (
        <Marker
          identifier={String(marker.id)}
          key={marker.id}
          onPress={() => {
            handlePressMarker(marker);
          }}
          coordinate={{
            latitude: marker.latitude,
            longitude: marker.longitude,
          }}
          image={
            selectedMarkerId === marker.id ? markerSelectedImage : markerImage
          }
        />
      ))}
    </MapView>
  );
}
