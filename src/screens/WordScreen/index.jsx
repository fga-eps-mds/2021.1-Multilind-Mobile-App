import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WordService } from '../../services';
import {
  GoBack,
  TopBar,
  Word,
  SearchBar,
  LoadingOrEmptyMessage,
} from '../../components';
import { FilterListSearch } from '../../utils';
import styles from './styles';

export function WordsScreen() {
  const route = useRoute();
  const language = route.params?.language;
  const [words, setWords] = useState([]);
  const [wordSearch, setWordSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getWords() {
      const response = await WordService.getAllWords(language.id_lingua);
      setLoading(false);
      setWords(response.palavras);
    }
    getWords();
  }, []);

  const filteredWords = FilterListSearch(words, wordSearch);

  return (
    <SafeAreaView>
      <View>
        <GoBack />
        <TopBar>Palavras</TopBar>
        <SearchBar
          placeholder="Pesquisar por uma Palavra"
          onChange={setWordSearch}
        />
      </View>
      <FlatList
        style={styles.listcontainer}
        ListEmptyComponent={
          <View style={styles.loadingOrEmptyContainer}>
            <LoadingOrEmptyMessage
              loading={loading}
              isEmpty={words?.length === 0 || filteredWords.length === 0}
              emptyMessage={
                filteredWords.length === 0 && wordSearch.length !== 0
                  ? 'Não há resultados para busca'
                  : `Ainda não há palavras da língua ${language.nome} :(`
              }
            />
          </View>
        }
        data={filteredWords}
        renderItem={({ item }) => <Word word={item} />}
        keyExtractor={(item) => String(item.id_palavra)}
      />
    </SafeAreaView>
  );
}
