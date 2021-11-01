import { StyleSheet } from 'react-native';
import { MONTSERRAT_REGULAR } from '../../constants/fonts';

const styles = StyleSheet.create({
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
  text: {
    marginTop: '50%',
    fontSize: 16,
    fontFamily: MONTSERRAT_REGULAR,
    fontWeight: 'bold',
  },
});

export default styles;
