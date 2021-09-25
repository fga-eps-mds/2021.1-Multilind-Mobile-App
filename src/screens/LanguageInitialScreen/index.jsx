import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Button } from '../../components';
import styles from './styles';
import dicionary from '../../assets/images/dicionary.png';
import portraitimg from '../../assets/images/portrait.png';

export function LanguageInitialScreen() {
  const route = useRoute();
  const language = route.params?.language;
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.goback}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <AntDesign name="left" size={24} color="#B1B1B1" />
      </TouchableOpacity>

      <Text style={styles.title}>{language.name}</Text>

      <View style={styles.textcontainer}>
        <Text style={styles.firsttext}>
          Tronco Linguistico: {language.troncolinguistico}
        </Text>
        <Text style={styles.sectext}>
          Regiões Faladas: {language.regioesfaladas}
        </Text>
        <Text style={styles.thirdtext}>20% de falantes</Text>
        <View style={styles.greypercentage}>
          <View style={styles.yellowpercentage} />
        </View>
      </View>

      <View style={styles.buttonscontainer}>
        <TouchableOpacity style={styles.dictionary}>
          <View style={styles.flexview}>
            <Image style={styles.img} source={dicionary} />
            <Text style={styles.buttontext}>Dicionário</Text>
          </View>
          <AntDesign name="right" size={24} color="#B1B1B1" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.portrait}>
          <View style={styles.flexview}>
            <Image source={portraitimg} style={styles.img} />
            <Text style={styles.buttontext}> Imagens</Text>
          </View>
          <AntDesign name="right" size={24} color="#B1B1B1" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.info} textStyle={{ color: 'white' }}>
          <View style={styles.buttoninfo}>
            <AntDesign name="infocirlce" size={24} color="white" />
            <Text style={styles.infotext}> Mais informações</Text>
          </View>
        </TouchableOpacity>

        <Button
          style={styles.plusbutton}
          icon={<AntDesign name="plus" size={24} color="blue" />}
        ></Button>
      </View>
    </SafeAreaView>
  );
}
