import { StyleSheet } from 'react-native';
import { MONTSERRAT_BOLD, MONTSERRAT_REGULAR } from '../../constants';

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
  searchBar: {
    width: '90%',
    alignSelf: 'center',
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
    flexDirection: 'row',
    borderColor: '#2D48BA',
    borderWidth: 1,
  },
  buttom2: {
    width: 179,
    height: 37,
    flexDirection: 'row',
    backgroundColor: '#2D48BA',
    borderRadius: 20,
  },
  buttontext: {
    flexDirection: 'row',
    textAlign: 'center',
    marginVertical: 2,
    color: '#2D48BA',
  },
  buttontext2: {
    flexDirection: 'row',
    textAlign: 'center',
    left: 5,
    marginVertical: 2,
    color: '#FFFFFF',
  },

  buttonimage: {
    flexDirection: 'row',
    marginVertical: 5,
    left: 12,
  },
  buttonadd: {
    flexDirection: 'row',
    marginVertical: 5,
    left: 300,
  },
  filtericon: {},
});

export default styles;
