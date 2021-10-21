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
import { SCREEN_HEIGHT } from '../../constants';

export function SpecificWordScreen() {
  const insets = useSafeAreaInsets();
  const route = useRoute();
  const word = route.params?.word;
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ marginTop: insets.top - 15 }}>
        <GoBack />
        <TopBar>{word.nome.split(',')[0]}</TopBar>
      </View>
      <WordMeaning />
      <ScrollView
        style={{
          height: SCREEN_HEIGHT,
        }}
      >
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
              navigation.navigate('SpecificImageScreen', { word });
            }}
          >
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
