import { StyleSheet } from 'react-native';
import {
  MONTSERRAT_BOLD,
  MONTSERRAT_SEMIBOLD,
  MONTSERRAT_REGULAR,
} from '../../constants';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  goback: {
    position: 'absolute',
    top: 55,
    left: 15,
  },

  title: {
    fontFamily: MONTSERRAT_BOLD,
    fontSize: 30,
    top: 5,
  },

  textcontainer: {
    width: '90%',
    top: 50,
  },

  firsttext: {
    fontFamily: MONTSERRAT_REGULAR,
    fontSize: 16,
  },
  sectext: {
    paddingTop: 15,
    fontFamily: MONTSERRAT_REGULAR,
    fontSize: 16,
  },
  thirdtext: {
    paddingTop: 12,
    fontFamily: MONTSERRAT_REGULAR,
    fontSize: 16,
  },
  greypercentage: {
    fontFamily: MONTSERRAT_REGULAR,
    backgroundColor: '#E5E5E5',
    width: 277,
    height: 27,
    borderRadius: 13.5,
    marginBottom: 20,
    marginTop: 7,
  },
  yellowpercentage: {
    fontFamily: MONTSERRAT_REGULAR,
    backgroundColor: '#FFC100',
    width: 75,
    height: '100%',
    borderRadius: 13.5,
  },
  buttonscontainer: {
    top: 80,
    width: '90%',
  },
  dictionary: {
    height: 95,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 15,
    paddingHorizontal: 20,
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
  flexview: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    width: 50,
    height: 50,
  },
  buttontext: {
    color: 'black',
    paddingLeft: 29,
    fontFamily: MONTSERRAT_SEMIBOLD,
    fontSize: 24,
  },

  info: {
    width: 363,
    top: 45,
    backgroundColor: '#2D48BA',
    height: 49,
    borderRadius: 21.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  buttoninfo: {
    flexDirection: 'row',
    alignItems: 'center',
    left: 26,
  },

  infotext: {
    paddingLeft: 66,
    fontFamily: MONTSERRAT_SEMIBOLD,
    fontSize: 16,
    color: 'white',
  },

  plusbutton: {
    width: 70,
    backgroundColor: 'white',
    marginTop: 180,
    marginLeft: 290,
  },
});

export default styles;
