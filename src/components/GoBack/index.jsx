import React from 'react';
import styles from './styles';
import { TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export const GoBack = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.goback}
      onPress={() => {
        navigation.goBack();
      }}
    >
      <AntDesign name="left" size={24} color="#B1B1B1" />
    </TouchableOpacity>
  );
};
