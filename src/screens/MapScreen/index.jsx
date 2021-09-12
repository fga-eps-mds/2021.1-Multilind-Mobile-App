import React, { useState } from 'react';
import { View } from 'react-native';
import { useLocation } from '../../contexts';
import { Input, Map, ContentBottomModal } from '../../components';
import styles from './styles';

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
];
export function MapScreen() {
  const { location, hasLocation } = useLocation();
  const [bottomModalVisible, setBottomModalVisible] = useState(false);
  const [selectedContent, setSelectedContent] = useState({});

  const onPressMarker = (content) => {
    setSelectedContent(content);
    setBottomModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Input />
      {hasLocation && (
        <Map
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
