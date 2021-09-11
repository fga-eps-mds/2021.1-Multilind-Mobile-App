import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from 'expo-location';
import styles from './styles';
import markerImage from '../../assets/images/marker.png';

export function MapScreen() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    async function getPosition() {
      const { status } = await requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        return;
      }

      const currentLocation = await getCurrentPositionAsync({});

      setLocation(currentLocation.coords);
    }
    getPosition();
  }, []);

  return (
    <View style={styles.container}>
      {location && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }}
        >
          <Marker
            coordinate={{
              latitude: -27.5965432,
              longitude: -48.5865547,
            }}
            image={markerImage}
          />
        </MapView>
      )}
    </View>
  );
}
