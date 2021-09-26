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
    paddingVertical: 15,
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
    marginRight: '9%',
  },
  arrow: {
    paddingRight: 14,
  },
  troncoLinguas: {
    display: 'flex',
    flexDirection: 'row',
  },
  qtdLinguas: {
    backgroundColor: '#04B47F',
    paddingVertical: 6,
    paddingHorizontal: 6,
    borderRadius: 16,
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
  },
  container: {
    marginTop: 0,
    backgroundColor: 'red',
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
  filtericon: {},
});

export default styles;
