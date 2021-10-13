import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

export function LanguageInfo({ language, style }) {
  return (
    <View style={[styles.textcontainer, style]}>
      <Text style={styles.firsttext}>
        Família Linguística: {language?.tronco?.nome ?? 'Isolada'}
      </Text>
      <Text style={styles.thirdtext}>20% de falantes</Text>
      <View style={styles.greypercentage}>
        <View style={styles.yellowpercentage} />
      </View>
    </View>
  );
}
