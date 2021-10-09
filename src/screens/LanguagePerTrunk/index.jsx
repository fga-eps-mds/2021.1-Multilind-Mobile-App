import React, { useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTrunk } from '../../contexts';
import {
  ListLanguages,
  ModalMod,
  TopBar,
  SearchBar,
  Filter,
} from '../../components';
import styles from './styles';

export function LanguagePerTrunk() {
  const { trunks } = useTrunk();
  const [listTrunk, setListLanguage] = useState(trunks);
  const [trunkSearch, setTrunkSearch] = useState('');
  const [expanded, setExpanded] = useState(false);
  const [visib, setVisib] = useState(false);

  const list = () =>
    listTrunk
      .filter((tronco) =>
        trunkSearch === '' ||
        tronco.nome.toLowerCase().substring(0, trunkSearch.length) ===
          trunkSearch.toLowerCase()
          ? tronco
          : false
      )
      .map((tronco, index) => (
        <View key={tronco.id_tronco} style={styles.listcontainer}>
          <TouchableOpacity
            style={styles.list}
            onPress={() => setExpanded(expanded === index ? null : index)}
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

          {expanded === index && (
            <ListLanguages
              listLanguage={tronco.linguas.map((lingua) =>
                Object.assign(lingua, {
                  tronco: { nome: tronco.nome, id_tronco: tronco.id_tronco },
                })
              )}
            />
          )}
        </View>
      ));

  return (
    <SafeAreaView>
      <ModalMod
        list={listTrunk}
        onChange={setListLanguage}
        onChangeV={setVisib}
        visual={visib}
      />
      <View>
        <TopBar>Línguas Indígenas</TopBar>
        <View>
          <SearchBar
            placeholder="Pesquisar por um Tronco"
            onChange={setTrunkSearch}
          />
          <Filter onChangeV={setVisib} />
        </View>
        <ScrollView style={styles.scrollView}>{list()}</ScrollView>
      </View>
    </SafeAreaView>
  );
}
