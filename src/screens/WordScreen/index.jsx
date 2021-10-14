import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WordService } from '../../services';
import { GoBack, TopBar, ListWords, SearchBar } from '../../components';
import { removeAccent } from '../../utils/removeAccent';

export function WordsScreen() {
  const route = useRoute();
  const letter = route.params?.alphabetParam.name;
  const language = route.params?.language;
  const [words, setWords] = useState([]);
  const [wordSearch, setWordSearch] = useState('');

  useEffect(() => {
    async function getWords() {
      const response = await WordService.getAllWords(language.id_lingua);
      console.log(response);
      setWords(response[0].palavras);
    }
    getWords();
  }, []);

  return (
    <SafeAreaView style={{ flex: 0.79 }}>
      <View style={{ marginTop: '-3%' }}>
        <GoBack />
        <TopBar>{letter}</TopBar>
      </View>
      <View>
        <SearchBar
          placeholder="Pesquisar uma Palavra"
          onChange={setWordSearch}
        />

        <ScrollView style={{ top: '4%' }}>
          <ListWords
            listWords={words
              .filter(
                (word) =>
                  removeAccent(word.nome[0]).toLowerCase() ===
                  letter.toLowerCase()
              )
              .filter((el) =>
                wordSearch === '' ||
                el.nome.toLowerCase().substr(0, wordSearch.length) ===
                  wordSearch.toLowerCase()
                  ? el
                  : false
              )}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
