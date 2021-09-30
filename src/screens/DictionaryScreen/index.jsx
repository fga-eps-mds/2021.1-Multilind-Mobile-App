import React, { useState } from 'react';
import { Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { Entypo, FontAwesome, AntDesign } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { useRoute, useNavigation } from '@react-navigation/native';
import styles from './styles';
import { Input } from '../../components';
import Alphabet from '../../alphabet.json';
import { DARK_GRAY, MONTSERRAT_BOLD } from '../../constants';

export function DictionaryScreen() {
  const { alphabet } = Alphabet;
  const route = useRoute();
  const language = route.params?.language;
  const navigation = useNavigation();
  console.log('dictionary', language);
  const list = () =>
    alphabet.map((alphabetParam) => (
      <View key={alphabetParam.id} style={styles.listcontainer}>
        <TouchableOpacity
          style={styles.list}
          onPress={() => {
            navigation.navigate('Words', { alphabetParam, language });
          }}
        >
          <Text styles={styles.textlist}>{alphabetParam.name}</Text>
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
              marginTop: insets.top + 10,
              fontFamily: MONTSERRAT_BOLD,
              fontSize: 30,
            }}
          >
            {language.nome}
          </Text>
        </View>
        <View>
          <Input
            icon={
              <Entypo
                name="magnifying-glass"
                size={30}
                color={DARK_GRAY}
                style={{ left: 12, top: 2 }}
              />
            }
            inputContainerStyle={[
              styles.searchBar,
              {
                top: 55,
              },
            ]}
            placeholder="Pesquisar letra"
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
      </View>
    </SafeAreaView>
  );
}
