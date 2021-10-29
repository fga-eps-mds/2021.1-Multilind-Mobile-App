import { StyleSheet } from 'react-native';
import { MONTSERRAT_SEMIBOLD, GRAY } from '../../constants';

const styles = StyleSheet.create({
  textcontainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '90%',
  },
  firsttext: {
    fontFamily: MONTSERRAT_SEMIBOLD,
    fontSize: 16,
    color: GRAY,
    paddingTop: '2%',
  },
  textlist: {
    fontSize: 20,
    fontFamily: MONTSERRAT_SEMIBOLD,
    color: GRAY,
    display: 'flex',
    justifyContent: 'space-between',
  },
  text: {
    marginLeft: 5,
    fontFamily: MONTSERRAT_SEMIBOLD,
    fontSize: 16,
    color: GRAY,
  },
  thirdtext: {
    fontFamily: MONTSERRAT_SEMIBOLD,
    fontSize: 16,
    color: GRAY,
    paddingTop: '2%',
    paddingBottom: '2%',
  },
  greypercentage: {
    fontFamily: MONTSERRAT_SEMIBOLD,
    backgroundColor: '#E5E5E5',
    width: 277,
    height: 27,
    borderRadius: 13.5,
  },
  yellowpercentage: {
    fontFamily: MONTSERRAT_SEMIBOLD,
    backgroundColor: '#FFC100',
    width: 75,
    height: '100%',
    borderRadius: 13.5,
  },
});
export default styles;
