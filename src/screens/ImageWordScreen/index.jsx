import React, { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WordService, ImageWordService } from '../../services';
import { TopBar, GoBack, ImageContainer } from '../../components';
import { sortName } from '../../utils/sortByName';
import styles from './styles';

export function ImageWordScreen() {
  const route = useRoute();
  const language = route.params?.language;
  const [word, setWord] = useState([]);
  const [perPage, setPerPage] = useState(6);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    async function getWords() {
      WordService.getAllWords(language.id_lingua).then(async (response) => {
        const palavrasResponse = response.palavras;
        const slice = palavrasResponse.slice(offset, offset + perPage);
        console.log('slice', slice);
        const wordsFound = await Promise.all(
          slice.map(async (wordImage) => {
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
      });
    }
    getWords();
  }, [perPage]);

  const fetchMore = () => {
    console.log('word.length', word.length);
    if (perPage <= word.length) {
      setPerPage(perPage + 6);
      return (
        <View
          style={{
            paddingVertical: 20,
            borderTopWidth: 1,
            borderColor: '#CED0CE',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <ActivityIndicator animating size={'large'} />
        </View>
      );
    }
    return null;
  };

  return (
    <SafeAreaView>
      <GoBack />
      <TopBar>{language.nome}</TopBar>
      <FlatList
        onEndReachedThreshold={1}
        onEndReached={fetchMore}
        style={{
          marginLeft: 20,
          marginRight: 20,
        }}
        numColumns={2}
        data={word}
        renderItem={(currentWord, index) => (
          <View
            key={currentWord.item.id_palavra}
            style={
              currentWord.item.length === 2 && index === 0
                ? styles.containerImage2
                : styles.containerImage
            }
          >
            <ImageContainer
              palavra={currentWord.item.nome.split(',')[0]}
              image={currentWord.item.url}
            />
          </View>
        )}
        keyExtractor={(item) => item.id_palavra}
      />
    </SafeAreaView>
  );
}
