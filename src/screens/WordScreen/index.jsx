import React from 'react';
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
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import { Montserrat, _100Thin } from '@expo-google-fonts/montserrat';
import {
  DARK_GRAY,
  MONTSERRAT_BOLD,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from '../../constants';
import styles from './styles';
import { Input } from '../../components';

export function WordsSreen() {
  const { words } = useWord(); // parte do context
  const navigation = useNavigation();
  const [listWord, setListWord] = useState(words);

  const list = () =>
    listWord.map((word) => (
      <View key={word.id_palavra} styçle={styles.listcontainer}>
        <TouchableOpacity
          onPress={}
          style={styles.list}
        >
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
  const [visib, setVisib] = useState(false);
  const sortList = () => {
    const newList = [...words];

    newList.sort((a, b) => a.nome.localeCompare(b.nome));
    setListWord(newList);
  };
  const notsortList = () => {
    const newList = [...words];

    newList.sort((a, b) => b.nome.localeCompare(a.nome));
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
            backgroundColor: 'rgba(0, 0, 0, 0, 3)',
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
                  Listar por nome (decresente)
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
              marginTop: insets.top + 10,
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
              top: insets.top + 20,
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