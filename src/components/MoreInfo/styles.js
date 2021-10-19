import { StyleSheet } from 'react-native';
import { MONTSERRAT_SEMIBOLD } from '../../constants';

const styles = StyleSheet.create({
  info: {
    width: '90%',
    backgroundColor: '#2D48BA',
    height: 49,
    borderRadius: 21.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttoninfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: '10%',
  },
  infotext: {
    marginLeft: '25%',
    fontFamily: MONTSERRAT_SEMIBOLD,
    fontSize: 16,
    color: 'white',
  },
});

export default styles;
