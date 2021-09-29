import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Modal, Pressable } from 'react-native';
import {
  Entypo,
  FontAwesome,
  AntDesign,
  FontAwesome5,
} from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import { useRoute, useNavigation } from '@react-navigation/native';
import styles from './styles';
import { Input } from '../../components';
import Alphabet from '../../alphabet.json';
import {
  DARK_GRAY,
  MONTSERRAT_BOLD,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from '../../constants';

export function DictionaryScreen() {
  const { alphabet } = Alphabet;
  const route = useRoute();
  const language = route.params?.language;
  const navigate = useNavigation();
  const [listWord, setListWord] = useState(alphabet);
  console.log('dictionary', language);
  const list = () =>
    listWord.map((alphabetParam) => (
      <View key={alphabetParam.id} style={styles.listcontainer}>
        <TouchableOpacity
          style={styles.list}
          onPress={() => {
            navigate.navigate('Words', { alphabetParam, language });
          }}
        >
          <Text styles={styles.textList}>{alphabetParam.name}</Text>
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
  const [visib, setVisib] = useState(false);
  const sortList = () => {
    const newList = [...alphabet];

    newList.sort((a, b) => a.name.localeCompare(b.name));
    setListWord(newList);
  };
  const notSortList = () => {
    const newList = [...alphabet];

    newList.sort((a, b) => b.name.localeCompare(a.name));
    setListWord(newList);
  };

  return (
    <>
      <Modal visible={visib} transparent animationType="fade">
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            setVisib(false);
          }}
          style={{
            width: SCREEN_WIDTH,
            height: SCREEN_HEIGHT,
            backgroundColor: 'rgba(0,0,0,0.3)',
          }}
        >
          <TouchableWithoutFeedback>
            <View
              style={{
                marginTop: 140,
                marginLeft: SCREEN_WIDTH - 233,
                backgroundColor: 'white',
                width: 233,
                padding: 10,
              }}
            >
              <Pressable
                style={styles.flex}
                onPress={() => {
                  sortList();
                  setVisib(false);
                }}
              >
                <FontAwesome5
                  name="sort-alpha-down"
                  size={30}
                  color="black"
                  style={{ left: 5 }}
                />
                <Text style={styles.textmodal}>
                  Listar por letra (crescente)
                </Text>
              </Pressable>
              <Pressable
                style={styles.flex}
                onPress={() => {
                  notSortList();
                  setVisib(false);
                }}
              >
                <FontAwesome5
                  name="sort-alpha-down"
                  size={30}
                  color="black"
                  style={styles.iconmodal}
                />
                <Text style={styles.textmodal}>
                  Listar por letra (decrescente)
                </Text>
              </Pressable>
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>
      <View>
        <View style={styles.container}>
          <Text
            style={{
              marginTop: insets.top + 10,
              fontFamily: MONTSERRAT_BOLD,
              fontSize: 30,
            }}
          >
            Alfabeto Indígena
          </Text>
        </View>
        <View>
          <Input
            icon={
              <Entypo
                name="magnifying-glass"
                size={30}
                color={DARK_GRAY}
                style={{ left: 5, top: 9 }}
              />
            }
            inputContainerStyle={[
              styles.searchBar,
              {
                top: insets.top + 30,
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
    </>
  );
}
