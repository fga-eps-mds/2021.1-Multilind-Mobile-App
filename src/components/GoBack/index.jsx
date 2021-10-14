import React from 'react';
import { TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

export const GoBack = ({ style }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={[styles.goback, style]}
      onPress={() => {
        navigation.goBack();
      }}
    >
      <AntDesign name="left" size={24} color="#B1B1B1" />
    </TouchableOpacity>
  );
};
