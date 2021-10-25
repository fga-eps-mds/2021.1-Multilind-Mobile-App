import React from 'react';
import { Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import styles from './styles';

export function WordMeaning() {
  const route = useRoute();
  const word = route.params?.word;
  return (
    <View>
      <Text style={styles.title}>Significado</Text>
      <Text style={styles.meaning}>{word.significado}</Text>
    </View>
  );
}
