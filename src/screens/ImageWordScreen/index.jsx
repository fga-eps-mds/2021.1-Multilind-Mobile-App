import React, { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import { View, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WordService, ImageWordService } from '../../services';
import { TopBar, GoBack, ImageContainer } from '../../components';
import styles from './styles';

export function ImageWordScreen() {
  const route = useRoute();
  const language = route.params?.language;
  const [word, setWord] = useState([]);
  const perPage = 6;
  const [page, setpage] = useState(1);

  async function getWords() {
    WordService.getAllWordsPerPage({
      idLingua: language.id_lingua,
      page,
      rowsPerPage: perPage,
    }).then(async (response) => {
      const palavrasResponse = response.rows[0].palavras;
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
      setWord([...word, ...wordsFound]);
    });
  }
  useEffect(() => {
    getWords();
  }, [page]);

  const fetchMore = () => {
    setpage(page + 1);
  };

  return (
    <SafeAreaView>
      <GoBack />
      <TopBar>{language.nome}</TopBar>
      <FlatList
        onEndReachedThreshold={0.9}
        onEndReached={fetchMore}
        style={{
          marginLeft: '5%',
          marginRight: '5%',
          marginBottom: '10%',
        }}
        numColumns={2}
        data={word}
        renderItem={({ item, index }) => (
          <>
            {item.url === undefined ? null : (
              <View
                key={item.nome}
                style={
                  item.length === 2 && index === 0
                    ? styles.containerImage2
                    : styles.containerImage
                }
              >
                <ImageContainer
                  palavra={item.nome.split(',', 1)}
                  image={item.url}
                />
              </View>
            )}
          </>
        )}
        keyExtractor={(item) => item.nome}
      />
    </SafeAreaView>
  );
}
