import React, { useState, useEffect } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { View, Image, Text, ScrollView } from 'react-native';
import { WordService } from '../../services';
import { TopBar, GoBack, ImageContainer } from '../../components';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import abacateIcon from '../../abacate-600x600.jpg';

export function ImageWordScreen() {
  const route = useRoute();
  const language = route.params?.language;
  const [word, setWord] = useState([]);

  useEffect(() => {
    async function getWords() {
      const response = await WordService.getAllWords(language.id_lingua);
      setWord(response[0].palavras);
    }
    getWords();
  }, []);

  const list = () =>
    word.length
      ? word.map((currentWord, index) => (
          <View key={index} style={styles.containerImage}>
            <ImageContainer palavra={currentWord.nome} image={abacateIcon} />
          </View>
        ))
      : null;

  return (
    <SafeAreaView>
      <GoBack />
      <TopBar>{language.nome}</TopBar>

      <ScrollView>
        <View style={styles.content}>
          <SafeAreaView style={styles.container}>{list()}</SafeAreaView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
