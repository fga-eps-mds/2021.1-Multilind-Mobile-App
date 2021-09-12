import React from 'react';
import { View, TextInput } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Entypo } from '@expo/vector-icons';
import { SCREEN_WIDTH } from '../../constants';

export function Input() {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        top: insets.top + 20,
        position: 'absolute',
        width: '100%',
        zIndex: 1,
        justifyContent: 'center',
      }}
    >
      <View
        style={{
          position: 'absolute',
          left: SCREEN_WIDTH * 0.08,
          zIndex: 1,
        }}
      >
        <Entypo name="magnifying-glass" size={30} color="#838383" />
      </View>

      <TextInput
        placeholder="Pesquisar um local"
        style={{
          width: SCREEN_WIDTH * 0.9,
          height: 50,
          backgroundColor: '#EFEFEF',
          alignSelf: 'center',
          borderRadius: 15,
          paddingHorizontal: 50,
          fontSize: 16,
        }}
      />
    </View>
  );
}
