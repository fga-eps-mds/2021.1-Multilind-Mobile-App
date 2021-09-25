import React, { useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Entypo, AntDesign, FontAwesome } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { DARK_GRAY, MONTSERRAT_BOLD } from '../../constants';
import styles from './styles';
import LanguagesPerTrunkJSON from '../../languagesPerTrunk.json';
import { Input, ListLanguages, ModalMod } from '../../components';

export function LanguagePerTrunk() {
  const [listLanguage, setListLanguage] = useState(LanguagesPerTrunkJSON);
  const [expanded, setExpanded] = useState(false);
  const [visib, setVisib] = useState(false);

  const updateLanguage = (value) => setListLanguage(value);
  const updateVisib = (value) => setVisib(value);

  const toggleExpand = (index) =>
    expanded === index ? setExpanded(null) : setExpanded(index);

  const list = () =>
    listLanguage.map((tronco, index) => (
      <View key={tronco.id_tronco} style={styles.listcontainer}>
        <TouchableOpacity
          style={styles.list}
          onPress={() => toggleExpand(index)}
        >
          <Text style={styles.textlist}>{tronco.nome}</Text>
          {tronco.linguas.length > 0 && (
            <Text style={styles.qtdLinguas}>
              {`${tronco.linguas.length} línguas`}
            </Text>
          )}
          {tronco.linguas.length > 0 && (
            <AntDesign
              name={expanded === index ? 'up' : 'down'}
              size={24}
              color="#B1B1B1"
              style={styles.arrow}
            />
          )}
        </TouchableOpacity>
        {expanded === index && <ListLanguages listLanguage={tronco.linguas} />}
      </View>
    ));

  const insets = useSafeAreaInsets();

  return (
    <>
      <ModalMod
        list={listLanguage}
        onChange={updateLanguage}
        onChangeV={updateVisib}
        visual={visib}
      />

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
        <ScrollView style={{ top: 25 }}>{list()}</ScrollView>
      </View>
    </>
  );
}
