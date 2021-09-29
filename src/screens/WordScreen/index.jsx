import React, { useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Entypo, AntDesign, FontAwesome } from '@expo/vector-icons';
import { useRoute, useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { DARK_GRAY, MONTSERRAT_BOLD } from '../../constants';
import styles from './styles';
import { useWord } from '../../contexts';
import { Input } from '../../components';

export function WordsScreen() {
  const route = useRoute();
  const letter = route.params?.alphabetParam.name;
  const language = route.params?.language;
  const { words } = useWord();
  console.log('language', language);
  const list = () =>
    words
      .filter((word) => word.nome.substr(0, 1) === letter)
      .map((word) => (
        <View key={word.id_palavra} style={styles.listcontainer}>
          <TouchableOpacity style={styles.list}>
            <Text style={styles.textlist}>{word.nome}</Text>
            <AntDesign
              name="right"
              size={24}
              color="#B1B1B1"
              style={styles.arrow}
            />
          </TouchableOpacity>
        </View>
      ));
  const insets = useSafeAreaInsets();
  const [, setVisib] = useState(false);
  return (
    <>
      <View>
        <View style={styles.container}>
          <Text
            style={{
              marginTop: insets.top + 10,
              fontFamily: MONTSERRAT_BOLD,
              fontSize: 30,
            }}
          >
            Palavras Indígenas
          </Text>
        </View>
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
              top: insets.top + 20,
            },
          ]}
          placeholder="Pesquisar palavra"
        />

        <TouchableOpacity
          style={{ top: 15 }}
          onPress={() => {
            setVisib(true);
          }}
        >
          <FontAwesome
            name="filter"
            size={24}
            color={DARK_GRAY}
            style={{ left: '80%' }}
          />
        </TouchableOpacity>
      </View>
            <ScrollView style={{ top: '4%' }}>{list()}</ScrollView>
    </>
  );
}
