import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import styles from '../ListWords/styles';

export function ListLanguages({ listLanguage }) {
  const navigation = useNavigation();

  return listLanguage.map((language) => (
    <View key={language.id_lingua} style={styles.listcontainer}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('LanguageInitial', { id: language.id_lingua });
        }}
        style={styles.list}
      >
        <Text style={styles.textlist}>{language.nome}</Text>
        <AntDesign
          name="right"
          size={24}
          color="#B1B1B1"
          style={styles.arrow}
        />
      </TouchableOpacity>
    </View>
  ));
}
