import { StyleSheet } from 'react-native';
import { MONTSERRAT_SEMIBOLD } from '../../constants';

const styles = StyleSheet.create({
  listcontainer: {
    margin: 1,
  },
  list: {
    backgroundColor: 'white',
    borderRadius: 0,
    paddingVertical: 20,
    paddingHorizontal: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
  textlist: {
    color: 'black',
    fontSize: 18,
    fontFamily: MONTSERRAT_SEMIBOLD,
  },
  arrow: {
    paddingRight: 14,
  },
});

export default styles;
