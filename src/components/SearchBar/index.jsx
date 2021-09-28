import React from 'react';
import { Entypo } from '@expo/vector-icons';
import styles from './styles';
import { Input } from '../Input';
import { DARK_GRAY } from '../../constants';

export function SearchBar({ placeholder }) {
  return (
    <Input
      icon={<Entypo name="magnifying-glass" size={30} color={DARK_GRAY} />}
      inputContainerStyle={[
        styles.searchBar,
        {
          top: 10,
        },
      ]}
      placeholder={placeholder}
    />
  );
}