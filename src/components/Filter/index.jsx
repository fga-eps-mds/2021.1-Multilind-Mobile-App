import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { DARK_GRAY } from '../../constants';
import styles from './styles';

export const Filter = ({ onChangeV }) => (
  <TouchableOpacity
    onPress={() => {
      onChangeV(true);
    }}
    style={styles.filterClick}
  >
    <FontAwesome name="filter" size={24} color={DARK_GRAY} />
  </TouchableOpacity>
);
