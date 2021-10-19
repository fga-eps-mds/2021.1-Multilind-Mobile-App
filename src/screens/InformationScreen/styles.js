import { StyleSheet, StatusBar } from 'react-native';
import { MONTSERRAT_BOLD, MONTSERRAT_SEMIBOLD } from '../../constants';

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
    marginTop: -10,
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
    bottom: '5%',
    textAlign: 'justify',
    marginRight: 26,
    color: '#262626',
  },
  goback: {
    position: 'absolute',
    top: 55,
    left: 15,
  },
});

export default styles;
