import React from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useRoute } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { GoBack, TopBar } from '../../components';
import {
  MONTSERRAT_BOLD,
  MONTSERRAT_SEMIBOLD,
  SCREEN_HEIGHT,
} from '../../constants';
import styles from './styles';

export function SpecificWordScreen() {
  const insets = useSafeAreaInsets();
  const route = useRoute();
  const word = route.params?.word;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ marginTop: insets.top - 15 }}>
        <GoBack />
        <TopBar>{word.significado}</TopBar>
      </View>
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
            fontSize: 16,
          }}
        >
          Significado
        </Text>
        <Text
          style={{
            marginTop: 10,
            marginLeft: 26,
            fontFamily: MONTSERRAT_SEMIBOLD,
            fontSize: 14,
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
          <TouchableOpacity style={styles.buttom}>
            <View style={styles.buttonimage}>
              <FontAwesome name="image" size={24} color="white" />
              <Text style={styles.textbuttom}>Ver imagem</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
