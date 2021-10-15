import React, { useState } from 'react';
import { Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { Entypo, AntDesign } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { useRoute, useNavigation } from '@react-navigation/native';
import styles from './styles';
import Alphabet from '../../alphabet.json';
import { DARK_GRAY } from '../../constants';
import { GoBack, TopBar, Input, SearchBar } from '../../components';

export function DictionaryScreen() {
  const [search, setSearch] = useState('');
  const { alphabet } = Alphabet;
  const route = useRoute();
  const language = route.params?.language;
  const navigation = useNavigation();
  const list = () =>
    alphabet.map((alphabetParam) => (
      <View key={alphabetParam.id} style={styles.listcontainer}>
        <TouchableOpacity
          style={styles.list}
          onPress={() => {
            navigation.navigate('Words', { alphabetParam, language });
          }}
        >
          <Text style={styles.textlist}>{alphabetParam.name}</Text>
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

  return (
    <SafeAreaView>
      <View style={{paddingVertical: 10}}>
        <GoBack />
        <TopBar>{language.nome}</TopBar>
        <SearchBar onChange={setSearch} placeholder="Pesquisar letra"/>
      </View>
      
      <ScrollView>{list()}</ScrollView>
    </SafeAreaView>
  );
}
