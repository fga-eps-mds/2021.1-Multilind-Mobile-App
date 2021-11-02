import React from 'react';
import { Text } from 'react-native';
import { Loading } from '../Loading';
import styles from './styles';

export function LoadingOrEmptyMessage({ loading, isEmpty, emptyMessage }) {
  if (loading) {
    return <Loading />;
  }
  if (isEmpty) {
    return <Text style={styles.text}>{emptyMessage}</Text>;
  }
  return null;
}
