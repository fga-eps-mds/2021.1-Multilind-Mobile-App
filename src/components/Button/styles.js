import { StyleSheet } from 'react-native';
import { MONTSERRAT_SEMIBOLD, PRIMARY_BLUE, WHITE } from '../../constants';

const styles = StyleSheet.create({
  button: {
    backgroundColor: PRIMARY_BLUE,
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },

  text: {
    fontFamily: MONTSERRAT_SEMIBOLD,
    color: WHITE,
    fontSize: 16,
  },
  buttonOutlined: {
    borderWidth: 1.5,
    borderColor: PRIMARY_BLUE,
    borderRadius: 25,
    paddingHorizontal: 18,
    paddingVertical: 8,
    alignItems: 'center',
    flexDirection: 'row',
  },
  textOutlined: {
    fontFamily: MONTSERRAT_SEMIBOLD,
    color: PRIMARY_BLUE,
    fontSize: 16,
  },
  icon: {
    marginRight: 8,
  },
});

export default styles;
