import React from 'react';
import { Text, View, Modal, TouchableOpacity } from 'react-native';
import { FontAwesome5, Entypo } from '@expo/vector-icons';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { useNavigation } from '@react-navigation/native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../constants';
import styles from './styles';
import { sortName, inverseSortName } from '../../utils';

export function ModalMod({ list, onChange, onChangeV, visual }) {
  const navigation = useNavigation();

  return (
    <Modal visible={visual} transparent animationType="fade">
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          onChangeV(false);
        }}
        style={{
          width: SCREEN_WIDTH,
          height: SCREEN_HEIGHT,
          backgroundColor: 'rgba(0,0,0,0.3)',
        }}
      >
        <TouchableWithoutFeedback>
          <View
            style={{
              marginTop: 120,
              marginLeft: SCREEN_WIDTH - 233,
              backgroundColor: 'white',
              width: 233,
              padding: 10,
            }}
          >
            <Pressable
              style={styles.flex}
              onPress={() => {
                onChange(sortName(list));
                onChangeV(false);
              }}
            >
              <FontAwesome5
                name="sort-alpha-down"
                size={30}
                color="black"
                style={{ left: 5 }}
              />
              <Text style={styles.textmodal}>Listar por nome (crescente)</Text>
            </Pressable>
            <Pressable
              style={styles.flex}
              onPress={() => {
                onChange(inverseSortName(list));
                onChangeV(false);
              }}
            >
              <FontAwesome5
                name="sort-alpha-down-alt"
                size={30}
                color="black"
                style={styles.iconmodal}
              />
              <Text style={styles.textmodal}>
                Listar por nome (decrescente)
              </Text>
            </Pressable>
            <Pressable
              style={styles.flex}
              onPress={() => {
                navigation.navigate('LanguagePerTrunk');
                onChangeV(false);
              }}
            >
              <Entypo
                name="flow-tree"
                size={30}
                color="black"
                style={{ left: 5 }}
              />
              <Text style={styles.textmodal}>
                Listar por família linguistica
              </Text>
            </Pressable>
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  );
}
