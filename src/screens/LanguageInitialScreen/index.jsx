import React from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute } from '@react-navigation/native';
import styles from './styles';
import { portraitImage, dicionaryImage } from '../../assets/images';
import {
  GoBack,
  TopBar,
  LanguageInfo,
  DictOrImage,
  MoreInfo,
} from '../../components';

export function LanguageInitialScreen() {
  const route = useRoute();
  const language = route.params?.language;

  return (
    <SafeAreaView>
      <ScrollView>
        <GoBack />
        <TopBar>{language.nome}</TopBar>
        <View style={styles.container}>
          <LanguageInfo language={language} style={styles.LanguageInfo} />

          <View style={styles.Dict}>
            <DictOrImage
              style={styles.dictChildren}
              language={language}
              image={dicionaryImage}
              navigate="Dictionary"
              text="Dicionário"
            />

            <DictOrImage
              language={language}
              navigate="ImageWordScreen"
              image={portraitImage}
              text="Imagens"
            />
          </View>
          <MoreInfo language={language} />

          <TouchableOpacity style={styles.plusbutton}>
            <AntDesign name="plus" size={24} color="blue" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
