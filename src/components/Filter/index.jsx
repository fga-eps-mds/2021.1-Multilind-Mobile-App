import React from 'react';
import { DARK_GRAY } from '../../constants';
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import styles from './styles';

export const Filter = ({ onChangeV }) => {
  const updateVisib = (value) => {
    onChangeV(value);
  };

  return (
    <TouchableOpacity
      style={{ marginTop: '15%' }}
      onPress={() => {
        updateVisib(true);
      }}
      style={styles.filterClick}
    >
      <FontAwesome name="filter" size={24} color={DARK_GRAY} />
    </TouchableOpacity>
  );
};
