import React, { useState } from 'react';
import { View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useLocation, useSpoke } from '../../contexts';
import { Input, GoogleMap, ContentBottomModal } from '../../components';

import styles from './styles';
import { DARK_GRAY } from '../../constants';

export function MapScreen() {
  const insets = useSafeAreaInsets();

  const { location, hasLocation } = useLocation();
  const { spokeLanguages } = useSpoke();
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
          markers={spokeLanguages}
          onPressMarker={onPressMarker}
          shouldDismissMarker={!bottomModalVisible}
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
