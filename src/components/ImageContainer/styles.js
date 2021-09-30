import { StyleSheet } from 'react-native';
import { MONTSERRAT_REGULAR } from '../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(196, 196, 196, 0.1)',
    width: 160,
    height: 170,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#2d48ba',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginTop: '11%',
    fontSize: 16,
    fontFamily: MONTSERRAT_REGULAR,
    color: '#2D48BA',
    fontWeight: 'bold', // 600 but not working, then bold
  },
  imageContainer: {
    width: 132,
    height: 94,
  },
});

export default styles;
