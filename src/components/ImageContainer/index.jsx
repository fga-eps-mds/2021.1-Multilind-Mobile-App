import React from 'react';
import styles from './styles';
import { View, Image, Text } from 'react-native';

export const ImageContainer = ({ palavra, image }) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.imageContainer} />
      <Text style={styles.text}>{palavra}</Text>
    </View>
  );
};
