import { StyleSheet, StatusBar } from 'react-native';
import {
  MONTSERRAT_BOLD,
  MONTSERRAT_SEMIBOLD,
  MONTSERRAT_REGULAR,
} from '../../constants';

const styles = StyleSheet.create({
  listcontainer: {
    margin: 1,
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  header: {
    backgroundColor: 'pink',
    flex: 1,
  },
  headerText: {
    fontFamily: MONTSERRAT_BOLD,
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 10,
  },
  scrollView: {
    marginLeft: 26,
    bottom: '3%',
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
    color: '#262626',
    fontSize: 20,
    fontFamily: MONTSERRAT_SEMIBOLD,
    fontWeight: 'bold',
  },
  arrow: {
    paddingRight: 14,
  },

  container: {
    flex: 1,
  },
  title: {
    marginTop: 50,
    marginLeft: 26,
  },
  titletext: {
    fontFamily: MONTSERRAT_BOLD,
    fontSize: 23,
  },
  text: {
    fontFamily: MONTSERRAT_SEMIBOLD,
    fontSize: 20,
    bottom: '15%',
    textAlign: 'justify',
    marginRight: 26,
    color: '#262626',
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
  goback: {
    position: 'absolute',
    top: 55,
    left: 15,
  },
  buttonadd: {
    flexDirection: 'row',
    marginVertical: 5,
    marginLeft: 50,
  },
  plusbutton: {
    width: 70,
    backgroundColor: 'white',
    marginTop: 180,
    marginLeft: 290,
  },
  buttonscontainer: {
    marginTop: 690,
    position: 'absolute',
    marginLeft: 300,
    width: 69,
    backgroundColor: 'white',
  },
});

export default styles;
