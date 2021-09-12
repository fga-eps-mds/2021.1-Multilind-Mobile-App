import React from 'react';
import { View } from 'react-native';
import { useLocation } from '../../contexts';
import { Input, Map } from '../../components';
import styles from './styles';

const MARKERS = [
  {
    id: 1,
    latitude: -16.01504,
    longitude: -48.0595503,
  },
];
export function MapScreen() {
  const { location, hasLocation } = useLocation();
  return (
    <View style={styles.container}>
      <Input />
      {hasLocation && <Map initialRegion={location} markers={MARKERS} />}
    </View>
  );
}
