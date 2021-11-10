import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLanguage } from '../../contexts';
import { FilterListSearch } from '../../utils';
import {
  Language,
  ModalMod,
  TopBar,
  SearchBar,
  Filter,
  LoadingOrEmptyMessage,
} from '../../components';
import styles from './styles';

export function LanguageScreen() {
  const { languages, loadingLanguages } = useLanguage();
  const [listLanguage, setListLanguage] = useState(languages);
  const [languageSearch, setLanguageSearch] = useState('');
  const [visib, setVisib] = useState(false);

  const filteredList = FilterListSearch(listLanguage, languageSearch);
  return (
    <SafeAreaView>
      <ModalMod
        list={listLanguage}
        onChange={setListLanguage}
        onChangeV={setVisib}
        visual={visib}
      />
      <View>
        <TopBar>Línguas Indígenas</TopBar>
        <View>
          <SearchBar
            placeholder="Pesquisar por uma língua"
            onChange={setLanguageSearch}
          />
          <Filter onChangeV={setVisib} />
        </View>

        <FlatList
          contentContainerStyle={{ paddingBottom: '90%' }}
          ListEmptyComponent={
            <View style={styles.loadingOrEmptyContainer}>
              <LoadingOrEmptyMessage
                loading={loadingLanguages}
                isEmpty={languages?.length === 0 || filteredList.length === 0}
                emptyMessage={
                  filteredList.length === 0 && languageSearch.length !== 0
                    ? 'Não há resultados para busca'
                    : 'Ainda não há linguas cadastradas'
                }
              />
            </View>
          }
          data={filteredList}
          keyExtractor={(item) => String(item.id_lingua)}
          renderItem={({ item }) => <Language language={item} />}
        />
      </View>
    </SafeAreaView>
  );
}
