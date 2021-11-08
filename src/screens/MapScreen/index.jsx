import React, { useState, useCallback, useEffect } from 'react';
import { View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MapView, { Marker } from 'react-native-maps';
import { useLocation, useIdiom } from '../../contexts';
import { Input, ContentBottomModal } from '../../components';
import markerImageFull from '../../assets/images/marker.png';
import markerImage70 from '../../assets/images/marker-70.png';
import markerImage50 from '../../assets/images/marker-50.png';
import markerSelectedImageFull from '../../assets/images/marker-yellow.png';
import markerSelectedImage70 from '../../assets/images/marker-yellow-70.png';
import markerSelectedImage50 from '../../assets/images/marker-yellow-50.png';
import { SCREEN_WIDTH, DARK_GRAY } from '../../constants';

import styles from './styles';

export function MapScreen() {
  const insets = useSafeAreaInsets();

  const { location, hasLocation } = useLocation();
  const { idioms } = useIdiom();

  const [bottomModalVisible, setBottomModalVisible] = useState(false);
  const [selectedContent, setSelectedContent] = useState({});

  const [selectedMarkerId, setSelectedMarkerId] = useState(null);
  const [markerImage, setMarkerImage] = useState(markerImageFull);
  const [markerSelectedImage, setMarkerSelectedImage] = useState(
    markerSelectedImageFull
  );

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

  const onPressMarker = useCallback((content) => {
    setSelectedContent(content);
    setBottomModalVisible(true);
    setSelectedMarkerId(content.id);
  }, []);

  useEffect(() => {
    if (!bottomModalVisible) {
      setSelectedMarkerId(null);
    }
  }, [bottomModalVisible]);

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
        <MapView
          style={styles.map}
          initialRegion={location}
          onRegionChange={onRegionChange}
        >
          <Marker
            title="Você está aqui"
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
          />
          {idioms?.map((marker) => (
            <Marker
              identifier={String(marker.id)}
              key={marker.id}
              onPress={() => {
                onPressMarker(marker);
              }}
              coordinate={{
                latitude: marker.latitude,
                longitude: marker.longitude,
              }}
              image={
                selectedMarkerId === marker.id
                  ? markerSelectedImage
                  : markerImage
              }
            />
          ))}
        </MapView>
      )}

      <ContentBottomModal
        visible={bottomModalVisible}
        toggle={() => setBottomModalVisible(false)}
        content={selectedContent}
      />
    </View>
  );
}
