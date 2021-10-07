import React from 'react';
import { View, Text } from 'react-native';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { BottomModal } from '../BottomModal';
import { Button } from '../Button';
import styles from './styles';
import { PRIMARY_BLUE, WHITE } from '../../constants';

export function ContentBottomModal({ visible, toggle, content }) {
  // const renderEthnicityList = () =>
  //   content.ethnicities?.map((ethnicity) => (
  //     <Text key={ethnicity} style={styles.item}>
  //       🔅 {ethnicity}
  //     </Text>
  //   ));

  // const renderStateList = () =>
  //   content.states?.map((state) => (
  //     <Text key={state} style={styles.item}>
  //       📍 {state}
  //     </Text>
  //   ));
  return (
    <BottomModal
      visible={visible}
      toggle={toggle}
      style={styles.bottomModalContainer}
    >
      <Text style={styles.title}>{content.title}</Text>
      <Text style={styles.subtitle}>Tronco Linguístico: {content.origin}</Text>

      <View style={styles.body}>
        <View>
          {/* <Text style={styles.itemTitle}>Principais Etnias:</Text>
          {renderEthnicityList()} */}
          <Button
            style={styles.buttons}
            outlined
            onPress={toggle}
            icon={
              <Ionicons name="chevron-back" size={24} color={PRIMARY_BLUE} />
            }
          >
            Voltar
          </Button>
        </View>
        <View>
          {/* <Text style={styles.itemTitle}>Principais Estados: </Text> */}
          {/* {renderStateList()} */}
          <Button
            style={styles.buttons}
            icon={<FontAwesome5 name="info-circle" size={24} color={WHITE} />}
          >
            Ver detalhes
          </Button>
        </View>
      </View>
    </BottomModal>
  );
}
