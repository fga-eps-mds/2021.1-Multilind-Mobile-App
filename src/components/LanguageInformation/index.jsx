import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

export function LanguageInfo({ language }) {
  console.log(language);
  return (
    <View style={styles.textcontainer}>
      <Text style={styles.firsttext}>
        Tronco Linguístico: {language.tronco.nome ?? 'Isoladas'}
      </Text>
      {/* <Text style={styles.sectext}>
        Regiões Faladas: {language.regioesfaladas}
      </Text> */}
      <Text style={styles.thirdtext}>20% de falantes</Text>
      <View style={styles.greypercentage}>
        <View style={styles.yellowpercentage} />
      </View>
    </View>
  );
}
