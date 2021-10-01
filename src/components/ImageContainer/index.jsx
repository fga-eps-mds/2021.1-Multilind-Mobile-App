import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';

export const ImageContainer = ({ palavra, image }) => (
  <View style={styles.container}>
    <Image
      source={{
        uri: image,
      }}
      style={styles.imageContainer}
    />
    <Text style={styles.text}>{palavra}</Text>
  </View>
);
