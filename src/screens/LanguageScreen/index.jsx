import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Button, Input } from '../../components';
import Languages from '../../languages.json';
import { Entypo } from '@expo/vector-icons';

import styles from './styles';
import { DARK_GRAY, MONTSERRAT_BOLD } from '../../constants';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function LanguageScreen() {
  const linguas = Languages.languages;

  console.log(linguas);
  const list = () => {
    return linguas.map((users) => {
      return (
        <View key={users.id} style={{ margin: 10 }}>
          <Text>{users.name}</Text>
        </View>
      );
    });
  };

  const insets = useSafeAreaInsets();

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
      <Input
        icon={<Entypo name="magnifying-glass" size={30} color={DARK_GRAY} />}
        inputContainerStyle={[
          styles.searchBar,
          {
            top: insets.top + 20,
          },
        ]}
        placeholder="Pesquisar língua"
      />
      <ScrollView style={{ top: 70 }}>
        <Button>{list()}</Button>
      </ScrollView>
    </View>
  );
}
