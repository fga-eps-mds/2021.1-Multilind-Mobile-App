import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import styles from '../../screens/LanguagePerTrunk/styles';

export function ListWords({ listWords }) {
  const navigation = useNavigation();

  return listWords?.map((word) => (
    <View key={word.id_palavra} style={styles.listcontainer}>
      {word ? (
        <TouchableOpacity
          style={styles.list}
          onPress={() => {
            navigation.navigate('SpecificWord', { word });
          }}
        >
          <Text style={styles.textlist}>{word.nome}</Text>
          <AntDesign
            name="right"
            size={24}
            color="#B1B1B1"
            style={styles.arrow}
          />
        </TouchableOpacity>
      ) : (
        <></>
      )}
    </View>
  ));
}
