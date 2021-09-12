import { StyleSheet } from 'react-native';
import { SCREEN_HEIGHT, SCREEN_WIDTH, WHITE } from '../../constants';

const styles = StyleSheet.create({
  background: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    backgroundColor: 'transparent',
    position: 'absolute',
    zIndex: 90,
  },
  modal: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: WHITE,
    zIndex: 100,
    position: 'absolute',
    bottom: 0,
    padding: 25,
  },
});

export default styles;
