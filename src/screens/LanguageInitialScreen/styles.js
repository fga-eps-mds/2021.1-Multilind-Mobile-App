import { StyleSheet } from 'react-native';
import { MONTSERRAT_BOLD } from '../../constants';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  LanguageInfo: {
    marginTop: 10,
  },
  goback: {
    position: 'absolute',
    marginTop: 70,
    left: 15,
  },
  dictChildren: {
    marginBottom: 16,
  },
  Dict: {
    width: '90%',
    marginBottom: '8.3%',
    marginTop: '12%',
  },
  title: {
    fontFamily: MONTSERRAT_BOLD,
    fontSize: 30,
    top: 5,
  },
  buttonscontainer: {
    top: 80,
    width: '90%',
  },
  portrait: {
    height: 95,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 15,
    paddingHorizontal: 20,
    top: 15,
  },

  plusbutton: {
    marginTop: '9%',
    marginLeft: '80%',
    width: 43,
    height: 43,
    borderRadius: 43 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
});

export default styles;
