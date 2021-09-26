import React from 'react';
import styles from './styles';
import { Text, View } from 'react-native';

export function TopBar(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.textBar} {...props}></Text>
    </View>
  );
}
