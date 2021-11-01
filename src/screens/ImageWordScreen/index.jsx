import React, { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import { View, ScrollView, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WordService, ImageWordService } from '../../services';
import { TopBar, GoBack, ImageContainer, Loading } from '../../components';
import { sortName } from '../../utils/sortByName';
import styles from './styles';

export function ImageWordScreen() {
  const route = useRoute();
  const language = route.params?.language;
  const [word, setWord] = useState([]);
  const [showLoading, setShowLoading] = useState(true);
  // const [emptyMessage, setEmptyMessage] = useState(false);

  useEffect(() => {
    async function getWords() {
      WordService.getAllWords(language.id_lingua).then(async (response) => {
        const palavrasResponse = response.palavras;
        const wordsFound = await Promise.all(
          palavrasResponse.map(async (wordImage) => {
            const image = await ImageWordService.getImageWords(
              wordImage.id_palavra
            );
            if (image.length) {
              wordImage.url = image[0].download_url;
            }
            return wordImage;
          })
        );
        setWord(wordsFound);
        setShowLoading(false);
      });
    }
    getWords();
  }, []);

  const list = () =>
    word.length
      ? sortName(word).map((currentWord, index) => (
          <View
            key={currentWord.id_palavra}
            style={
              word.length === 2 && index === 0
                ? styles.containerImage2
                : styles.containerImage
            }
          >
            {currentWord.url === undefined ? null : (
              <ImageContainer
                palavra={currentWord.nome}
                image={currentWord.url}
              />
            )}
          </View>
        ))
      :
      <View>
        { !showLoading && 
        <Text style={styles.text}>Ainda não há imagens da língua {language.nome} :(</Text>
        }
      </View>;

  return (
    <SafeAreaView>
      <ScrollView>
        <GoBack />
        <TopBar>{language.nome}</TopBar>
        <View style={styles.content}>
          { showLoading && <Loading /> }
          <SafeAreaView style={styles.container}>{list()}</SafeAreaView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
