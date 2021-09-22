import React, { useState } from 'react';
import { Text, View, ScrollView, Modal, TouchableOpacity } from 'react-native';
import {
  Entypo,
  FontAwesome5,
  AntDesign,
  FontAwesome,
} from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import {
  DARK_GRAY,
  MONTSERRAT_BOLD,
  MONTSERRAT_SEMIBOLD,
  MONTSERRAT_REGULAR,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from '../../constants';
import styles from './styles';
import Languages from '../../languages.json';
import { Input } from '../../components';

export function LanguageScreen() {
  const { languages } = Languages;
  const navigation = useNavigation();
  const [lista, setLista] = useState(languages);

  const list = () =>
    lista.map((language) => (
      <View key={language.id} style={styles.listcontainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('LanguageInitial', { language });
          }}
          style={styles.list}
        >
          <Text style={styles.textlist}>{language.name}</Text>
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
  const listOrdenada = () => {
    const newList = [...languages];

    newList.sort((a, b) => a.name.localeCompare(b.name));
    setLista(newList);
  };
  const listDesOrdenada = () => {
    const newList = [...languages];

    newList.sort((a, b) => b.name.localeCompare(a.name));
    setLista(newList);
  };
  const listOrdenadaTronco = () => {
    const newList = [...languages];

    newList.sort((a, b) =>
      a.troncolinguistico.localeCompare(b.troncolinguistico)
    );
    setLista(newList);
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
                  listOrdenada();
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
                  Listar por nome (crescente)
                </Text>
              </Pressable>
              <Pressable
                style={styles.flex}
                onPress={() => {
                  listDesOrdenada();
                  setVisib(false);
                }}
              >
                <FontAwesome5
                  name="sort-alpha-down-alt"
                  size={30}
                  color="black"
                  style={styles.iconmodal}
                />
                <Text style={styles.textmodal}>
                  Listar por nome (decrescente)
                </Text>
              </Pressable>
              <Pressable
                style={styles.flex}
                onPress={() => {
                  listOrdenadaTronco();
                  setVisib(false);
                }}
              >
                <Entypo
                  name="flow-tree"
                  size={30}
                  color="black"
                  style={{ left: 5 }}
                />
                <Text style={styles.textmodal}>
                  Listar por tronco linguistico
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
            Línguas Indígenas
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
                top: insets.top + 20,
              },
            ]}
            placeholder="Pesquisar língua"
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
              style={{ left: 350 }}
            />
          </TouchableOpacity>
        </View>

        <ScrollView style={{ top: 50 }}>{list()}</ScrollView>
      </View>
    </>
  );
}
