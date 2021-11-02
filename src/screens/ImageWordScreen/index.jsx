import React, { useState, useEffect } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { View, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WordService, ImageWordService } from '../../services';
import {
  TopBar,
  GoBack,
  ImageContainer,
  LoadingOrEmptyMessage,
} from '../../components';
import styles from './styles';

export function ImageWordScreen() {
  const route = useRoute();
  const navigation = useNavigation();

  const language = route.params?.language;
  const [words, setWords] = useState([]);
  const perPage = 6;
  const [page, setpage] = useState(1);
  const [loading, setLoading] = useState(true);

  async function getWords() {
    const response = await WordService.getAllWordsPerPage({
      idLingua: language.id_lingua,
      page,
      rowsPerPage: perPage,
    });

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
    setLoading(false);
    setWords([...words, ...wordsFound]);
  }
  useEffect(() => {
    getWords();
  }, [page]);

  const fetchMore = () => {
    setpage(page + 1);
  };

  return (
    <SafeAreaView>
      <View>
        <GoBack />
        <TopBar>{language.nome}</TopBar>
      </View>
      <FlatList
        onEndReachedThreshold={0.9}
        onEndReached={fetchMore}
        style={styles.images}
        numColumns={2}
        ListEmptyComponent={
          <LoadingOrEmptyMessage
            loading={loading}
            isEmpty={words?.length === 0}
            emptyMessage={`Ainda não há imagens da língua ${language.nome} :(`}
          />
        }
        data={words.filter((item) => item.url)}
        renderItem={({ item, index }) => (
          <>
            {item.url === undefined || item.nome === undefined ? null : (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('SpecificWord', { word: item })
                }
                key={item.nome}
                style={
                  item.length === 2 && index === 0
                    ? styles.containerImage2
                    : styles.containerImage
                }
              >
                <ImageContainer
                  palavra={
                    item.nome.includes(';')
                      ? item.nome.split(';', 1)
                      : item.nome.split(',', 1)
                  }
                  image={item.url}
                />
              </TouchableOpacity>
            )}
          </>
        )}
        keyExtractor={(item) => item.nome}
      />
    </SafeAreaView>
  );
}
