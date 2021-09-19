import React, { useState } from 'react';
import { Text, View, ScrollView, Modal } from 'react-native';
import { Input } from '../../components';
import Languages from '../../languages.json';
import { Entypo, FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';
import {
  DARK_GRAY,
  MONTSERRAT_BOLD,
  MONTSERRAT_SEMIBOLD,
  MONTSERRAT_REGULAR,
} from '../../constants';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

export function LanguageScreen() {
  const languages = Languages.languages;
  const navigation = useNavigation();
  const [lista, setLista] = useState(languages);

  const list = () => {
    return lista.map((language) => {
      return (
        <View
          key={language.id}
          style={{
            margin: 1,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('LanguageInitial', { language });
            }}
            style={{
              backgroundColor: 'white',
              borderRadius: 0,
              paddingVertical: 20,
              paddingHorizontal: 25,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Text
              style={{
                color: 'black',
                fontSize: 18,
                fontFamily: MONTSERRAT_SEMIBOLD,
              }}
            >
              {language.name}
            </Text>
            <AntDesign
              name="right"
              size={24}
              color="#B1B1B1"
              style={{ paddingRight: 14 }}
            />
          </TouchableOpacity>
        </View>
      );
    });
  };

  const insets = useSafeAreaInsets();
  const [visib, setVisib] = useState(false);
  const listOrdenada = () => {
    let newList = [...languages];

    newList.sort((a, b) => a.name.localeCompare(b.name));
    setLista(newList);
  };
  const listDesOrdenada = () => {
    let newList = [...languages];

    newList.sort((a, b) => b.name.localeCompare(a.name));
    setLista(newList);
  };
  const listOrdenadaTronco = () => {
    let newList = [...languages];

    newList.sort((a, b) =>
      a.troncolinguistico.localeCompare(b.troncolinguistico)
    );
    setLista(newList);
  };
  return (
    <View>
      <View
        style={{
          height: 70,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text
          style={{
            top: insets.top + 10,
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
        <Modal visible={visib} transparent={true} animationType="fade">
          <View
            style={{
              top: 140,
              left: 200,
              backgroundColor: 'white',
              width: 233,
              height: 150,
            }}
          >
            <Pressable
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
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
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: MONTSERRAT_REGULAR,
                  width: 200,
                  left: 25,
                }}
              >
                Listar por nome (crescente)
              </Text>
            </Pressable>
            <Pressable
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
              onPress={() => {
                listDesOrdenada();
                setVisib(false);
              }}
            >
              <FontAwesome5
                name="sort-alpha-down-alt"
                size={30}
                color="black"
                style={{ left: 5 }}
              />
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: MONTSERRAT_REGULAR,
                  left: 25,
                }}
              >
                Listar por nome (decrescente)
              </Text>
            </Pressable>
            <Pressable
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
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
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: MONTSERRAT_REGULAR,
                  width: 200,
                  left: 25,
                }}
              >
                Listar por tronco linguistico
              </Text>
            </Pressable>
          </View>
        </Modal>
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
  );
}
