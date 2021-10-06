import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLanguage } from '../../contexts';
import {
  ListLanguages,
  ModalMod,
  TopBar,
  SearchBar,
  Filter,
} from '../../components';

export function LanguageScreen() {
  const { languages } = useLanguage();
  const [listLanguage, setListLanguage] = useState(languages);

  const updateLanguage = (value) => setListLanguage(value);
  const updateVisib = (value) => setVisib(value);

  const [visib, setVisib] = useState(false);

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
          <SearchBar placeholder="Pesquisar por uma língua" />
          <Filter onChangeV={updateVisib} />
        </View>

        <ScrollView>
          <ListLanguages listLanguage={listLanguage} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
