import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { GoBack, TopBar, WordMeaning } from '../../components';

export function SpecificImageScreen() {
  const route = useRoute();
  const word = route.params?.word;
  return (
    <SafeAreaView>
      <View>
        <GoBack />
        <TopBar>{word.nome.split(',')[0]}</TopBar>
      </View>
      <WordMeaning />
    </SafeAreaView>
  );
}
