import React, { useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFamily } from '../../contexts';
import { FilterListSearch } from '../../utils';
import {
  Language,
  ModalMod,
  TopBar,
  SearchBar,
  Filter,
} from '../../components';
import styles from './styles';

export function LanguagePerFamily() {
  const { families } = useFamily();
  const [listFamily, setListLanguage] = useState(families);
  const [familySearch, setFamilySearch] = useState('');
  const [expanded, setExpanded] = useState(false);
  const [visib, setVisib] = useState(false);

  const list = () =>
    FilterListSearch(listFamily, familySearch).map((tronco, index) => (
      <View key={tronco.id_tronco} style={styles.listcontainer}>
        <TouchableOpacity
          style={styles.list}
          onPress={() => setExpanded(expanded === index ? null : index)}
        >
          <View style={styles.familyLinguas}>
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

        {expanded === index &&
          tronco.linguas?.map((lingua) => (
            <Language key={lingua.id_lingua} language={lingua} />
          ))}
      </View>
    ));

  return (
    <SafeAreaView>
      <ModalMod
        list={listFamily}
        onChange={setListLanguage}
        onChangeV={setVisib}
        visual={visib}
      />
      <View>
        <TopBar>Línguas Indígenas</TopBar>
        <View>
          <SearchBar
            placeholder="Pesquisar por uma Família"
            onChange={setFamilySearch}
          />
          <Filter onChangeV={setVisib} />
        </View>
        <ScrollView style={styles.scrollView}>{list()}</ScrollView>
      </View>
    </SafeAreaView>
  );
}
