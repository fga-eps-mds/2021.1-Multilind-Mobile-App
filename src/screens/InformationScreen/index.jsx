import React from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { Button } from '../../components';
import Etnias from '../../etnia.json';
import styles from './styles';

export function InformationScreen() {
  const navigation = useNavigation();
  const { etnias } = Etnias;
  console.log(etnias);

  const list = () =>
    etnias.map((etnia) => (
      <View key={etnia.id} style={styles.scrollView}>
        <Text style={styles.textlist}>. {etnia.nome}</Text>
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
        <Text style={styles.headerText}>Arauá</Text>
      </View>
      <ScrollView>
        <View style={styles.title}>
          <Text style={styles.titletext}> Etnias falantes</Text>
        </View>
        <View style={{ top: '4%' }}>{list()}</View>
        <View style={styles.title}>
          <Text style={styles.titletext}> História</Text>
        </View>
        <View style={styles.title}>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis
            volutpat orci, pulvinar posuere leo. Vivamus vel tellus et neque
            maximus sodales id ut massa. Donec at pellentesque tellus. Proin
            porttitor ante scelerisque tincidunt pellentesque. Pellentesque
            efficitur sodales posuere. Praesent sed cursus risus.
          </Text>
        </View>
      </ScrollView>
      <Button
        style={styles.buttonscontainer}
        icon={<AntDesign name="plus" size={26} color="blue" />}
      />
    </SafeAreaView>
  );
}
