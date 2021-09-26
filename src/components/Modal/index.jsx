import React from 'react';
import { Text, View, Modal, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../constants';
import styles from './styles';
import { sortName, inverseSortName } from '../../utils/sortByName';

export function ModalMod({ list, onChange, onChangeV, visual }) {
  const updateVisib = (value) => {
    onChangeV(value);
  };

  const updateLanguage = (value) => {
    onChange(value);
  };
  return (
    <Modal visible={visual} transparent animationType="fade">
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          updateVisib(false);
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
                updateLanguage(sortName(list));
                updateVisib(false);
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
                updateLanguage(inverseSortName(list));
                updateVisib(false);
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
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  );
}
