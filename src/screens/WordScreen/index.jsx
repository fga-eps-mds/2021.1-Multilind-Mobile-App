import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Entypo, AntDesign } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WordService } from '../../services';
import { DARK_GRAY, MONTSERRAT_BOLD } from '../../constants';
import styles from './styles';
import { Input } from '../../components';

export function WordsScreen() {
  const route = useRoute();
  const letter = route.params?.alphabetParam.name;
  const language = route.params?.language;
  const [words, setWords] = useState([]);

  useEffect(() => {
    async function getWords() {
      const response = await WordService.getAllWords(language.id_lingua);
      setWords(response);
    }
    getWords();
  }, []);

  console.log('words', words);
  const list = () =>
    words
      .filter(
        (word) => word.nome.substr(0, 1).toLowerCase() === letter.toLowerCase()
      )
      .map((word) => (
        <View key={word.id_palavra} style={styles.listcontainer}>
          {word ? (
            <TouchableOpacity style={styles.list}>
              <Text style={styles.textlist}>{word.nome}</Text>
              <AntDesign
                name="right"
                size={24}
                color="#B1B1B1"
                style={styles.arrow}
              />
            </TouchableOpacity>
          ) : (
            <></>
          )}
        </View>
      ));

  return (
    <SafeAreaView>
      <View>
        <View style={styles.container}>
          <Text
            style={{
              // marginTop: insets.top + 10,
              fontFamily: MONTSERRAT_BOLD,
              fontSize: 30,
            }}
          >
            Palavras Indígenas
          </Text>
        </View>
        <View>
          <Input
            icon={
              <Entypo
                name="magnifying-glass"
                size={30}
                color={DARK_GRAY}
                style={{ left: 10 }}
              />
            }
            inputContainerStyle={[
              styles.searchBar,
              {
                // top: insets.top + 20,
              },
            ]}
            placeholder="Pesquisar palavra"
          />
        </View>
        <ScrollView style={{ top: '4%' }}>{list()}</ScrollView>
      </View>
    </SafeAreaView>
  );
}
