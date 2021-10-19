import React from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRoute } from '@react-navigation/native';
import { GoBack, TopBar } from '../../components';
import {
  MONTSERRAT_BOLD,
  MONTSERRAT_SEMIBOLD,
  SCREEN_HEIGHT,
} from '../../constants';

export function SpecificWordScreen() {
  const insets = useSafeAreaInsets();
  const route = useRoute();
  const word = route.params?.word;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ marginTop: insets.top - 15 }}>
        <GoBack />
        <TopBar>{word.nome.split(',')[0]}</TopBar>
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
            fontSize: 23,
          }}
        >
          Significado
        </Text>
        <Text
          style={{
            marginTop: 10,
            marginLeft: 26,
            fontFamily: MONTSERRAT_SEMIBOLD,
            fontSize: 20,
          }}
        >
          {word.significado}
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
          {/* <TouchableOpacity style={styles.buttom}>
            <View style={styles.buttonimage}>
              <FontAwesome name="image" size={24} color="white" />
              <Text style={styles.textbuttom}>Ver imagem</Text>
            </View>
          </TouchableOpacity> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
