import React, { useState } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { View, Image } from 'react-native';
import { TopBar, GoBack, ImageContainer } from '../../components';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';

export function ImageWordScreen() {
  const route = useRoute();
  const language = route.params?.language;
  const nomes = ['isa', 'carlos', 'qlqcoisa', 'piseiro'];
  return (
    <SafeAreaView>
      <GoBack />
      <TopBar>{language.name}</TopBar>
      <View style={styles.content}>
        <SafeAreaView style={styles.container}>
          {nomes.map((el) => (
            <View style={styles.containerImage}>
              <ImageContainer palavra={el} />
            </View>
          ))}
        </SafeAreaView>
      </View>
    </SafeAreaView>
  );
}
