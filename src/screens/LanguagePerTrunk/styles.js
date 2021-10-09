import { StyleSheet } from 'react-native';
import { MONTSERRAT_SEMIBOLD } from '../../constants';

const styles = StyleSheet.create({
  listcontainer: {
    margin: 1,
  },
  list: {
    backgroundColor: 'white',
    borderRadius: 0,
    paddingVertical: 15,
    paddingHorizontal: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
  textlist: {
    color: 'black',
    fontSize: 18,
    fontFamily: MONTSERRAT_SEMIBOLD,
    marginRight: '9%',
  },
  arrow: {
    paddingRight: 14,
  },
  troncoLinguas: {
    display: 'flex',
    flexDirection: 'row',
  },
  qtdLinguas: {
    backgroundColor: '#04B47F',
    paddingVertical: 6,
    paddingHorizontal: 6,
    borderRadius: 16,
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
  },
  filterClick: {
    bottom: '35%',
    marginLeft: '80%',
    width: '5%',
  },
  scrollView: {
    marginTop: '1%',
  },
});

export default styles;
