import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute, useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
// import { Button } from '../../components';
import { DialetoService } from '../../services';
import styles from './styles';

export function InformationScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const language = route.params?.language;
  const [dialeto, setDialeto] = useState([]);
  console.log('id_lingua', language.id_lingua);

  useEffect(() => {
    async function getDialetos() {
      const response = await DialetoService.getAllDialetos({
        idLingua: language.id_lingua,
      });
      console.log('dialetos ', response);
      setDialeto(response);
    }
    getDialetos();
  }, []);

  const list = () =>
    dialeto.map((etnia) => (
      <View key={etnia.etnia.id_etnia} style={styles.scrollView}>
        <Text style={styles.textlist}>. {etnia.etnia.nome}</Text>
      </View>
    ));

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
      <View style={{ alignItems: 'center' }}>
        <Text style={styles.headerText}>{language.nome}</Text>
      </View>
      <ScrollView>
        {dialeto.length ? (
          <>
            <View style={styles.title}>
              <Text style={styles.titletext}> Etnias falantes</Text>
            </View>
            <View style={{ top: '2%' }}>{list()}</View>
          </>
        ) : null}
        <View style={styles.title}>
          <Text style={styles.titletext}> História</Text>
        </View>
        <View style={styles.title}>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis
            volutpat orci, pulvinar posuere leo. Vivamus vel tellus et neque
            maximus sodales id ut massa. Donec at pellentesque tellus. Proin
            porttitor ante scelerisque tincidunt pellentesque. Pellentesque
            efficitur sodales posuere. Praesent sed cursus risus.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Donec quis volutpat
            orci, pulvinar posuere leo. Vivamus vel tellus et neque maximus
            sodales id ut massa. Donec at pellentesque tellus. Proin porttitor
            ante scelerisque tincidunt pellentesque. Pellentesque efficitur
            sodales posuere.
          </Text>
        </View>
      </ScrollView>
      {/* <Button
        style={styles.plusbutton}
        icon={<AntDesign name="plus" size={26} color="blue" />}
      /> */}
    </SafeAreaView>
  );
}
