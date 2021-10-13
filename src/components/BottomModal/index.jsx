import React, { useRef, useEffect, useState } from 'react';
import { Animated, View, TouchableOpacity } from 'react-native';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../constants';
import modalStyles from './styles';

const MODAL_HEIGHT = SCREEN_HEIGHT * 0.35;
const MODAL_WIDTH = SCREEN_WIDTH;
export function BottomModal({ visible, toggle, style, children }) {
  const translateY = useRef(new Animated.Value(MODAL_HEIGHT)).current;
  const [modalVisible, setModalVisible] = useState(visible);

  const openModal = () => {
    setModalVisible(true);
    Animated.timing(translateY, {
      duration: 300,
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };

  const closeModal = () => {
    Animated.timing(translateY, {
      duration: 300,
      toValue: MODAL_HEIGHT,
      useNativeDriver: true,
    }).start(() => {
      setModalVisible(false);
    });
  };

  useEffect(() => {
    if (visible) {
      openModal();
    } else {
      closeModal();
    }
  }, [visible]);

  if (!modalVisible) return <View />;

  return (
    <>
      <TouchableOpacity
        onPress={toggle}
        activeOpacity={1}
        style={modalStyles.background}
      />
      <Animated.View
        style={[
          {
            width: MODAL_WIDTH,
            height: MODAL_HEIGHT,
            transform: [{ translateY }],
          },
          modalStyles.modal,
          style,
        ]}
      >
        {children}
      </Animated.View>
    </>
  );
}
