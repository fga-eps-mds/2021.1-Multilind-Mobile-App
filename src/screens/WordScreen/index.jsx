import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Entypo, AntDesign } from '@expo/vector-icons';
import { useRoute, useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WordService } from '../../services';
import { DARK_GRAY, MONTSERRAT_BOLD } from '../../constants';
import styles from './styles';
import { Input } from '../../components';

export function WordsScreen() {
  const route = useRoute();
  const letter = route.params?.alphabetParam.name;
  const navigation = useNavigation();
  const language = route.params?.language;
  const [words, setWords] = useState([]);

  useEffect(() => {
    async function getWords() {
      const response = await WordService.getAllWords(language.id_lingua);
      setWords(response[0].palavras);
    }
    getWords();
  }, []);

  const list = () =>
    words
      .filter(
        (word) => word.nome.substr(0, 1).toLowerCase() === letter.toLowerCase()
      )
      .map((word) => (
        <View key={word.id_palavra} style={styles.listcontainer}>
          {word ? (
            <TouchableOpacity
              style={styles.list}
              onPress={() => {
                navigation.navigate('SpecificWord', { word });
              }}
            >
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
      <TouchableOpacity
        style={styles.goback}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <AntDesign name="left" size={24} color="#B1B1B1" />
      </TouchableOpacity>

      <View>
        <View style={styles.container}>
          <Text
            style={{
              marginBottom: 45,
              fontFamily: MONTSERRAT_BOLD,
              fontSize: 40,
            }}
          >
            {letter}
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
            inputContainerStyle={[styles.searchBar]}
            placeholder="Pesquisar palavra"
          />
        </View>
        <ScrollView style={{ top: '4%' }}>{list()}</ScrollView>
      </View>
    </SafeAreaView>
  );
}
