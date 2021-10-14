import { StyleSheet } from 'react-native';
import { MONTSERRAT_SEMIBOLD } from '../../constants';

const styles = StyleSheet.create({
  dictionary: {
    height: 95,
    width: '100%',
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 15,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: '#E0E0E0',
  },
  flexview: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    width: 72,
    height: 62,
  },
  buttontext: {
    color: 'black',
    paddingLeft: '8%',
    fontFamily: MONTSERRAT_SEMIBOLD,
    fontSize: 24,
  },
});

export default styles;
