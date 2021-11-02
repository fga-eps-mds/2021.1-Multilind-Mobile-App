import React from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRoute, useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import styles from './styles';
import { GoBack, TopBar, WordMeaning } from '../../components';
import {
  SCREEN_HEIGHT,
  MONTSERRAT_BOLD,
  MONTSERRAT_SEMIBOLD,
} from '../../constants';

export function SpecificWordScreen() {
  const insets = useSafeAreaInsets();
  const route = useRoute();
  const word = route.params?.word;
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ marginTop: insets.top - 15 }}>
        <GoBack />
        <TopBar>{word.significado}</TopBar>
      </View>
      <WordMeaning />
      <ScrollView
        style={{
          height: SCREEN_HEIGHT,
        }}
      >
        <Text
          style={{
            marginTop: insets.top + 30,
            marginLeft: insets.left + 26,
            fontFamily: MONTSERRAT_BOLD,
            fontSize: 23,
          }}
        >
          Tradução
        </Text>
        <Text
          style={{
            marginTop: 10,
            marginLeft: 26,
            fontFamily: MONTSERRAT_SEMIBOLD,
            fontSize: 20,
          }}
        >
          {word.nome}
        </Text>
        <View
          style={{
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            marginTop: 40,
            marginBottom: 10,
            flexDirection: 'row',
            marginHorizontal: 26,
            marginRight: 8,
          }}
        >
          <TouchableOpacity
            style={styles.buttom}
            onPress={() => {
              navigation.navigate('SpecificImageScreen', {
                word,
              });
            }}
          >
            <View style={styles.buttonimage}>
              <FontAwesome name="image" size={24} color="white" />
              <Text style={styles.textbuttom}>Visualizar imagens</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
