import React from 'react';
import { View, Text } from 'react-native';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { BottomModal } from '../BottomModal';
import { Button } from '../Button';
import styles from './styles';
import { PRIMARY_BLUE, WHITE } from '../../constants';

export function ContentBottomModal({ visible, toggle, content }) {
  const isEthnicityNotListNull = content.ethnicities?.length !== 0;
  const navigation = useNavigation();

  const renderEthnicityList = () => (
    <>
      <Text style={styles.itemTitle}>Principais Etnias:</Text>
      {content.ethnicities?.map((ethnicity) => (
        <Text key={ethnicity} style={styles.item}>
          🔅 {ethnicity}
        </Text>
      ))}
    </>
  );

  return (
    <BottomModal
      visible={visible}
      toggle={toggle}
      style={styles.bottomModalContainer}
    >
      <Text style={styles.title}>{content.title}</Text>
      <Text style={styles.subtitle}>Família Linguistica: {content.origin}</Text>

      <View style={styles.body}>
        {isEthnicityNotListNull && renderEthnicityList()}
        <View style={styles.buttons}>
          <Button
            outlined
            onPress={toggle}
            icon={
              <Ionicons name="chevron-back" size={24} color={PRIMARY_BLUE} />
            }
          >
            Voltar
          </Button>
          <Button
            icon={<FontAwesome5 name="info-circle" size={24} color={WHITE} />}
            onPress={() => {
              navigation.navigate('LanguageNavigator', {
                screen: 'LanguageInitial',
                initial: false,
                params: {
                  id: content.id_lingua,
                },
              });
            }}
          >
            Ver detalhes
          </Button>
        </View>
      </View>
    </BottomModal>
  );
}
