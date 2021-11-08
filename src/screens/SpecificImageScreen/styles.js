import { StyleSheet } from 'react-native';
import { MONTSERRAT_BOLD } from '../../constants';

const styles = StyleSheet.create({
  title: {
    fontFamily: MONTSERRAT_BOLD,
    fontSize: 23,
    marginLeft: 26,
    marginTop: 25,
    marginBottom: 15,
  },
  container: {
    justifyContent: 'space-evenly',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  containerImage: {
    marginBottom: 50,
  },
  containerImage2: {
    width: '50%',
    marginLeft: '1.5%',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default styles;
