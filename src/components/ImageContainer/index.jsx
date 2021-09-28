import React from 'react';
import styles from './styles';
import { View, Image, Text } from 'react-native';

export const ImageContainer = ({ palavra }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{palavra}</Text>
    </View>
  );
};
