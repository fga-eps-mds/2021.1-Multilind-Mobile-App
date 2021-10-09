import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';

export function MoreInfo({ language }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.info}
      textStyle={{ color: 'white' }}
      onPress={() => {
        navigation.navigate('Information', { language });
      }}
    >
      <View style={styles.buttoninfo}>
        <AntDesign name="infocirlce" size={24} color="white" />
        <Text style={styles.infotext}> Mais informações</Text>
      </View>
    </TouchableOpacity>
  );
}
