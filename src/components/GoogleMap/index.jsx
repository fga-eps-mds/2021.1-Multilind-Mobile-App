import React, { useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { useState } from 'react/cjs/react.development';
import markerImageFull from '../../assets/images/marker.png';
import markerImage70 from '../../assets/images/marker-70.png';
import markerImage50 from '../../assets/images/marker-50.png';
import markerSelectedImageFull from '../../assets/images/marker-yellow.png';
import markerSelectedImage70 from '../../assets/images/marker-yellow-70.png';
import markerSelectedImage50 from '../../assets/images/marker-yellow-50.png';
import styles from './styles';
import { SCREEN_WIDTH } from '../../constants';

export function GoogleMap({
  markers,
  mapStyle,
  onPressMarker,
  initialRegion,
  shouldDismissMarker,
  ...props
}) {
  const [selectedMarkerId, setSelectedMarkerId] = useState(null);
  const [markerImage, setMarkerImage] = useState(markerImageFull);
  const [markerSelectedImage, setMarkerSelectedImage] = useState(
    markerSelectedImageFull
  );

  const handlePressMarker = (marker) => {
    if (onPressMarker) {
      onPressMarker(marker);
      setSelectedMarkerId(marker.id);
    }
  };

  const onRegionChange = (region) => {
    const zoom = Math.log2(
      360 * (SCREEN_WIDTH / 256 / region.longitudeDelta) + 1
    );
    if (zoom < 7 && zoom > 5) {
      setMarkerImage(markerImage70);
      setMarkerSelectedImage(markerSelectedImage70);
    } else if (zoom < 5) {
      setMarkerImage(markerImage50);
      setMarkerSelectedImage(markerSelectedImage50);
    } else {
      setMarkerImage(markerImageFull);
      setMarkerSelectedImage(markerSelectedImageFull);
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
      onRegionChange={onRegionChange}
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
