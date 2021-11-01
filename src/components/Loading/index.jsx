import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { PRIMARY_BLUE } from '../../constants';
import styles from './styles';

export function Loading() {
  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" color={PRIMARY_BLUE} />
    </View>
  );
}
