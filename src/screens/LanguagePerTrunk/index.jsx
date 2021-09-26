import React, { useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { ListLanguages, ModalMod, TopBar, SearchBar } from '../../components';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DARK_GRAY } from '../../constants';
import styles from './styles';
import LanguagesPerTrunkJSON from '../../languagesPerTrunk.json';

export function LanguagePerTrunk() {
  const [listLanguage, setListLanguage] = useState(LanguagesPerTrunkJSON);
  const [expanded, setExpanded] = useState(false);
  const [visib, setVisib] = useState(false);

  const updateLanguage = (value) => setListLanguage(value);
  const updateVisib = (value) => setVisib(value);
  const toggleExpand = (index) => setExpanded(expanded == index ? null : index);

  const list = () =>
    listLanguage.map((tronco, index) => (
      <View key={tronco.id_tronco} style={styles.listcontainer}>
        <TouchableOpacity
          style={styles.list}
          onPress={() => toggleExpand(index)}
        >
          <View style={styles.troncoLinguas}>
            <Text style={styles.textlist}>{tronco.nome}</Text>
            {tronco.linguas.length > 0 && (
              <Text style={styles.qtdLinguas}>
                {`${tronco.linguas.length} línguas`}
              </Text>
            )}
          </View>
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

  return (
    <SafeAreaView>
      <ModalMod
        list={listLanguage}
        onChange={updateLanguage}
        onChangeV={updateVisib}
        visual={visib}
      />
      <View>
        <TopBar>Línguas Indígenas</TopBar>
        <View>
          <SearchBar placeholder="Pesquisar por uma língua"></SearchBar>
          <TouchableOpacity
            onPress={() => {
              updateVisib(true);
            }}
            style={{ bottom: '35%' }}
          >
            <FontAwesome
              name="filter"
              size={24}
              color={DARK_GRAY}
              style={{ left: '85%' }}
            />
          </TouchableOpacity>
        </View>
        <ScrollView style={{ marginTop: '1%' }}>{list()}</ScrollView>
      </View>
    </SafeAreaView>
  );
}
