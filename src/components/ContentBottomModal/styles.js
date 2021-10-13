import { StyleSheet } from 'react-native';
import { MONTSERRAT_SEMIBOLD, MONTSERRAT_REGULAR } from '../../constants';

const styles = StyleSheet.create({
  bottomModalContainer: {
    height: null,
  },
  title: {
    fontFamily: MONTSERRAT_SEMIBOLD,
    fontSize: 24,
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: MONTSERRAT_SEMIBOLD,
    fontSize: 16,
    opacity: 0.55,
    lineHeight: 30,
  },
  itemTitle: {
    fontFamily: MONTSERRAT_REGULAR,
    fontSize: 16,
    marginBottom: 8,
  },
  item: {
    fontFamily: MONTSERRAT_REGULAR,
    fontSize: 14,
    lineHeight: 24,
  },
  body: {
    justifyContent: 'space-between',
    marginTop: 10,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});

export default styles;
