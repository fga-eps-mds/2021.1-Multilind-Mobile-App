import React, { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import { View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WordService, ImageWordService } from '../../services';
import { TopBar, GoBack, ImageContainer } from '../../components';
import styles from './styles';

export function ImageWordScreen() {
  const route = useRoute();
  const language = route.params?.language;
  const [word, setWord] = useState([]);

  useEffect(() => {
    async function getWords() {
      WordService.getAllWords(language.id_lingua).then(async (response) => {
        const wordsFound = await Promise.all(
          response[0].palavras.map(async (wordImage) => {
            const image = await ImageWordService.getImageWords(
              wordImage.id_palavra
            );
            if (image.length) wordImage.url = image[0].download_url;
            return wordImage;
          })
        );
        setWord(wordsFound);
      });
    }
    getWords();
  }, []);

  const list = () =>
    word.length
      ? word.map((currentWord, index) => (
          <View
            key={currentWord.id_palavra}
            style={
              word.length === 2 && index === 0
                ? styles.containerImage2
                : styles.containerImage
            }
          >
            <ImageContainer
              palavra={currentWord.nome}
              image={currentWord.url}
            />
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
