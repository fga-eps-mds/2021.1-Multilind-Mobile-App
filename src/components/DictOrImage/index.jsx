import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';

export function DictOrImage({ language, image, text, style, navigate }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={[styles.dictionary, style]}
      onPress={() => {
        navigation.navigate(navigate, { language });
      }}
    >
      <View style={styles.flexview}>
        <Image style={styles.img} source={image} />
        <Text style={styles.buttontext}>{text}</Text>
      </View>
      <AntDesign name="right" size={24} color="#B1B1B1" />
    </TouchableOpacity>
  );
}
