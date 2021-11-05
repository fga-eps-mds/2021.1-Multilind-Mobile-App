import React, { useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../LanguagePerFamily/styles';
import { TopBar } from '../../components';
import data from '../../aboutScreenData.json';

export function AboutScreen() {
  const [expanded, setExpanded] = useState(false);
  const list = () =>
    data.map((dataType, index) => (
      <View key={dataType.id} style={styles.listcontainer}>
        <TouchableOpacity
          style={styles.list}
          onPress={() => setExpanded(expanded === index ? null : index)}
        >
          <View style={styles.familyLinguas}>
            <Text style={styles.textlist}>{dataType.title}</Text>
          </View>
        </TouchableOpacity>
        {expanded === index &&
          dataType.content?.map((dataContent) => (
            <View key={dataContent.id} style={styles.listcontainer}>
              <TouchableOpacity style={styles.list}>
                <Text style={styles.textlist}>{dataContent.nome}</Text>
              </TouchableOpacity>
            </View>
          ))}
      </View>
    ));
  return (
    <SafeAreaView>
      <TopBar>Sobre</TopBar>
      <ScrollView style={styles.scrollView}>{list()}</ScrollView>
    </SafeAreaView>
  );
}
