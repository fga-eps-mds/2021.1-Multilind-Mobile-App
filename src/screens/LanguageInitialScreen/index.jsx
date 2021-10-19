import React from 'react';
import { View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute } from '@react-navigation/native';
import styles from './styles';
import { useLanguage } from '../../contexts';
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
  const idLanguage = route.params?.id;
  const { languages } = useLanguage();
  const language = languages.filter((lang) => lang.id_lingua === idLanguage)[0];

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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
