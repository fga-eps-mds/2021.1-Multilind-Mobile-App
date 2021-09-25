import { StyleSheet } from 'react-native';
import { MONTSERRAT_BOLD, MONTSERRAT_SEMIBOLD } from '../../constants';

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
  },
  textlist: {
    color: 'black',
    fontSize: 18,
    fontFamily: MONTSERRAT_SEMIBOLD,
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
  searchBar: {
    width: '90%',
    alignSelf: 'center',
  },
});

export default styles;
