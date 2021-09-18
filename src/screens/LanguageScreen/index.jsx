import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Input } from '../../components';
import Languages from '../../languages.json';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';
import {
  DARK_GRAY,
  MONTSERRAT_BOLD,
  MONTSERRAT_SEMIBOLD,
} from '../../constants';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';

export function LanguageScreen() {
  const languages = Languages.languages;
  const navigation = useNavigation();

  const list = () => {
    return languages
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((language) => {
        return (
          <View
            key={language.id}
            style={{
              margin: 1,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('LanguageInitial', { language });
              }}
              style={{
                backgroundColor: 'white',
                borderRadius: 0,
                paddingVertical: 20,
                paddingHorizontal: 25,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Text
                style={{
                  color: 'black',
                  fontSize: 18,
                  fontFamily: MONTSERRAT_SEMIBOLD,
                }}
              >
                {language.name}
              </Text>
              <AntDesign
                name="right"
                size={24}
                color="#B1B1B1"
                style={{ paddingRight: 14 }}
              />
            </TouchableOpacity>
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
      <View>
        <Input
          icon={
            <Entypo
              name="magnifying-glass"
              size={30}
              color={DARK_GRAY}
              style={{ left: 10 }}
            />
          }
          inputContainerStyle={[
            styles.searchBar,
            {
              top: insets.top + 20,
            },
          ]}
          placeholder="Pesquisar língua"
        />
        <TouchableOpacity style={{ top: 15 }}>
          <FontAwesome
            name="filter"
            size={24}
            color={DARK_GRAY}
            style={{ left: 350 }}
          />
        </TouchableOpacity>
      </View>

      <ScrollView style={{ top: 50 }}>{list()}</ScrollView>
    </View>
  );
}
