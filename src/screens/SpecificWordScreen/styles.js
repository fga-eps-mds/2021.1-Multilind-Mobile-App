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
  buttom: {
    width: 250,
    height: 40,
    flexDirection: 'row',
    backgroundColor: '#2D48BA',
    borderRadius: 20,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
  buttontext: {
    flexDirection: 'row',
    textAlign: 'center',
    marginVertical: 2,
    color: '#2D48BA',
  },
  goback: {
    marginTop: 55,
    left: 15,
  },
  textbuttom: {
    textAlign: 'center',
    left: 10,
    fontSize: 17,
    marginVertical: 2,
    color: '#FFFFFF',
  },

  buttonimage: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  buttonadd: {
    marginVertical: 5,
    width: 70,
    backgroundColor: 'white',
    marginTop: 650,
    marginLeft: 290,
    position: 'absolute',
    shadowColor: '#FFF',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 1,
    elevation: 1,
  },
  filtericon: {},
});

export default styles;
