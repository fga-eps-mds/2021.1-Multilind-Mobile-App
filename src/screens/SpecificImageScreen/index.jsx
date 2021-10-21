import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { GoBack, TopBar, WordMeaning } from '../../components';
import styles from './styles';

export function SpecificImageScreen() {
  const insets = useSafeAreaInsets();
  const route = useRoute();
  const word = route.params?.word;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ marginTop: insets.top - 15 }}>
        <GoBack />
        <TopBar>{word.nome.split(',')[0]}</TopBar>
      </View>
      <WordMeaning />
      <Text style={styles.title}>Imagens Relativas</Text>
    </SafeAreaView>
  );
}
