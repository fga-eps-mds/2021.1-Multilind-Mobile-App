import React, { useState } from 'react';
import { View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useLocation } from '../../contexts';
import { Input, GoogleMap, ContentBottomModal } from '../../components';

import styles from './styles';
import { DARK_GRAY } from '../../constants';

const MARKERS = [
  {
    id: 1,
    title: 'Lingua Arauá',
    origin: 'Tupi-Guarani',
    ethnicities: ['Caingangues', 'Kainguangs'],
    states: ['Goiás', 'Distrito Federal'],
    latitude: -16.01504,
    longitude: -48.0595503,
  },
  {
    id: 2,
    title: 'Lingua Arauá',
    origin: 'Tupi-Guarani',
    ethnicities: ['Caingangues', 'Kainguangs'],
    states: ['Goiás', 'Distrito Federal'],
    latitude: -16.0137944,
    longitude: -48.0802207,
  },
  {
    id: 3,
    title: 'Lingua Arauá',
    origin: 'Tupi-Guarani',
    ethnicities: ['Caingangues', 'Kainguangs'],
    states: ['Goiás', 'Distrito Federal'],
    latitude: -16.005460968614287,
    longitude: -48.078179244771505,
  },
];
export function MapScreen() {
  const insets = useSafeAreaInsets();

  const { location, hasLocation } = useLocation();
  const [bottomModalVisible, setBottomModalVisible] = useState(false);
  const [selectedContent, setSelectedContent] = useState({});

  const onPressMarker = (content) => {
    setSelectedContent(content);
    setBottomModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Input
        icon={<Entypo name="magnifying-glass" size={30} color={DARK_GRAY} />}
        inputContainerStyle={[
          styles.searchBar,
          {
            top: insets.top + 20,
          },
        ]}
      />
      {hasLocation && (
        <GoogleMap
          initialRegion={location}
          markers={MARKERS}
          onPressMarker={onPressMarker}
        />
      )}

      <ContentBottomModal
        visible={bottomModalVisible}
        toggle={() => setBottomModalVisible(false)}
        content={selectedContent}
      />
    </View>
  );
}
