import React, { useState, useCallback } from 'react';
import { View } from 'react-native';
import { useLocation, useIdiom } from '../../contexts';
import { GoogleMap, ContentBottomModal } from '../../components';

import styles from './styles';

export function MapScreen() {
  const { location, hasLocation } = useLocation();
  const { idioms } = useIdiom();
  const [bottomModalVisible, setBottomModalVisible] = useState(false);
  const [selectedContent, setSelectedContent] = useState({});

  const onPressMarker = useCallback((content) => {
    setSelectedContent(content);
    setBottomModalVisible(true);
  }, []);

  return (
    <View style={styles.container}>
      {hasLocation && (
        <GoogleMap
          initialRegion={location}
          markers={idioms}
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
