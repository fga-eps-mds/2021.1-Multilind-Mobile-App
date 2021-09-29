import { StyleSheet } from 'react-native';
import {
  MONTSERRAT_BOLD,
  MONTSERRAT_SEMIBOLD,
  MONTSERRAT_REGULAR,
} from '../../constants';

const styles = StyleSheet.create({
  listcontainer: {
    margin: 1,
  },
  
  arrow: {
    paddingRight: 14,
  },

  container: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: MONTSERRAT_BOLD,
    fontSize: 30,
  },
  iconglass: {
    left: 10,
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
 
  filter: {
    top: '60%',
    left: '80%',
  },
  filtericon: {},
});

export default styles;
