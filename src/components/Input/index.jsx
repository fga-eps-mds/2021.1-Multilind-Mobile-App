import React from 'react';
import { View, Image, TextInput } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SCREEN_WIDTH } from '../../constants';
import logoImage from '../../assets/images/logo.png';

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
      <Image
        source={logoImage}
        style={{
          position: 'absolute',
          left: SCREEN_WIDTH * 0.08,
          zIndex: 1,
        }}
      />
      <TextInput
        placeholder="Pesquisar um local"
        style={{
          width: SCREEN_WIDTH * 0.9,
          height: 50,
          backgroundColor: '#fff',
          alignSelf: 'center',
          borderRadius: 30,
          paddingHorizontal: 50,
          fontSize: 16,
        }}
      />
    </View>
  );
}
