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
  modal: {
    top: '16%',
    left: '50%',
    backgroundColor: 'white',
    width: '47%',
    height: 150,
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconmodal: {
    left: 5,
  },
  textmodal: {
    fontSize: 16,
    fontFamily: MONTSERRAT_REGULAR,
    width: 200,
    left: 25,
  },
  filter: {
    top: '60%',
    left: '80%',
  },
  buttom1: {
    width: 111,
    height: 37,
    backgroundColor: 'white',
    borderRadius: 20,
    borderColor: '#2D48BA',
  },
  buttom2: {
    width: 179,
    height: 37,
    backgroundColor: '#2D48BA',
    borderRadius: 20,
  },
  buttontext: {
    textAlign: 'center',
    marginVertical: 8,
    color: '#2D48BA',
  },
  buttontext2: {
    textAlign: 'center',
    marginVertical: 8,
    color: 'white',
  },
  filtericon: {},
});

export default styles;
