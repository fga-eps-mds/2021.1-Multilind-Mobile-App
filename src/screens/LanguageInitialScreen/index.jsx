import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  MONTSERRAT_BOLD,
  MONTSERRAT_REGULAR,
  MONTSERRAT_SEMIBOLD,
} from '../../constants';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Button } from '../../components';

export function LanguageInitialScreen() {
  const route = useRoute();
  const language = route.params?.language;
  const navigation = useNavigation();
  const dicionary = require('../../assets/images/dicionary.png');
  const portrait = require('../../assets/images/portrait.png');
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
      }}
    >
      <TouchableOpacity
        style={{ position: 'absolute', top: 55, left: 15 }}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <AntDesign name="left" size={24} color="#B1B1B1" />
      </TouchableOpacity>

      <Text
        style={{
          fontFamily: MONTSERRAT_BOLD,
          fontSize: 30,
          top: 10,
        }}
      >
        {language.name}
      </Text>

      <View style={{ width: 363, top: 50 }}>
        <Text
          style={{
            fontFamily: MONTSERRAT_REGULAR,
            fontSize: 16,
          }}
        >
          Tronco Linguistico: {language.troncolinguistico}
        </Text>
        <Text
          style={{
            paddingTop: 15,
            fontFamily: MONTSERRAT_REGULAR,
            fontSize: 16,
          }}
        >
          Regiões Faladas: {language.regioesfaladas}
        </Text>
        <Text
          style={{
            paddingTop: 12,
            fontFamily: MONTSERRAT_REGULAR,
            fontSize: 16,
          }}
        >
          20% de falantes
        </Text>
        <View
          style={{
            fontFamily: MONTSERRAT_REGULAR,
            backgroundColor: '#E5E5E5',
            width: 277,
            height: 27,
            borderRadius: 13.5,
            marginBottom: 20,
          }}
        >
          <View
            style={{
              fontFamily: MONTSERRAT_REGULAR,
              backgroundColor: '#FFC100',
              width: 75,
              height: '100%',
              borderRadius: 13.5,
            }}
          />
        </View>
      </View>
      <View style={{ top: 80 }}>
        <TouchableOpacity
          style={{
            height: 95,
            width: 363,
            backgroundColor: 'white',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderRadius: 15,
            paddingHorizontal: 20,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Image style={{ width: 50, height: 50 }} source={dicionary} />
            <Text
              style={{
                color: 'black',
                paddingLeft: 29,
                fontFamily: MONTSERRAT_SEMIBOLD,
                fontSize: 24,
              }}
            >
              Dicionário
            </Text>
          </View>
          <AntDesign name="right" size={24} color="#B1B1B1" />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            height: 95,
            backgroundColor: 'white',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderRadius: 15,
            paddingHorizontal: 20,
            top: 15,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Image source={portrait} style={{ width: 50, height: 50 }} />
            <Text
              style={{
                color: 'black',
                paddingLeft: 29,
                fontFamily: MONTSERRAT_SEMIBOLD,
                fontSize: 24,
              }}
            >
              {' '}
              Imagens
            </Text>
          </View>
          <AntDesign name="right" size={24} color="#B1B1B1" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 363,
            top: 45,
            backgroundColor: 'blue',
            height: 49,
            borderRadius: 21.5,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
          textStyle={{ color: 'white' }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              left: 26,
            }}
          >
            <AntDesign name="infocirlce" size={24} color="white" />
            <Text
              style={{
                paddingLeft: 66,
                fontFamily: MONTSERRAT_SEMIBOLD,
                fontSize: 16,
                color: 'white',
              }}
            >
              {' '}
              Mais informações
            </Text>
          </View>
        </TouchableOpacity>
        <Button
          style={{
            width: 70,
            backgroundColor: 'white',
            marginTop: 180,
            marginLeft: 290,
          }}
          icon={<AntDesign name="plus" size={24} color="blue" />}
        ></Button>
      </View>
    </SafeAreaView>
  );
}
