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
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from '../../constants';
import styles from './styles';
import Languages from '../../languages.json';
import LanguagesPerTrunkJSON from '../../languagesPerTrunk.json';
import { Input } from '../../components';

export function LanguagePerTrunk() {
  const { languages } = Languages;
  const navigation = useNavigation();
  const [listLanguage, setListLanguage] = useState(LanguagesPerTrunkJSON);
  const [expanded, setExpanded] = useState(false);

  toggleExpand = () => {
    setExpanded(!expanded);
    console.log(expanded);
  };
  const list = () =>
    listLanguage.map((tronco) => (
      <View>
        <View key={tronco.id_tronco} style={styles.listcontainer}>
          <TouchableOpacity
            style={styles.list}
            onPress={() => this.toggleExpand()}
          >
            <Text style={styles.textlist}>{tronco.nome}</Text>
            <AntDesign
              name="down"
              size={24}
              color="#B1B1B1"
              style={styles.arrow}
            />
          </TouchableOpacity>
        </View>
        {this.expanded &&
          tronco.linguas.map((lingua) => (
            <View key={lingua.id_lingua} style={styles.listcontainer}>
              <TouchableOpacity style={styles.list}>
                <Text style={styles.textlist}>{lingua.nome}</Text>
                <AntDesign
                  name="down"
                  size={24}
                  color="#B1B1B1"
                  style={styles.arrow}
                />
              </TouchableOpacity>
            </View>
          ))}
      </View>
    ));

  const insets = useSafeAreaInsets();
  const [visib, setVisib] = useState(false);
  const sortList = () => {
    const newList = [...LanguagesPerTrunkJSON];

    newList.sort((a, b) => a.nome.localeCompare(b.nome));
    setListLanguage(newList);
  };
  const notsortList = () => {
    const newList = [...LanguagesPerTrunkJSON];

    newList.sort((a, b) => b.nome.localeCompare(a.nome));
    setListLanguage(newList);
  };
  const sortListTronco = () => {
    const newList = [...LanguagesPerTrunkJSON];

    newList.sort((a, b) =>
      a.troncolinguistico.localeCompare(b.troncolinguistico)
    );
    setListLanguage(newList);
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
                  Listar por nome (crescente)
                </Text>
              </Pressable>
              <Pressable
                style={styles.flex}
                onPress={() => {
                  notsortList();
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
                  sortListTronco();
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
              style={{ left: '80%' }}
            />
          </TouchableOpacity>
        </View>

        <ScrollView style={{ top: '12%' }}>{list()}</ScrollView>
      </View>
    </>
  );
}
