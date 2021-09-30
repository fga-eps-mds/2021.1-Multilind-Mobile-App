import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  listcontainer: {
    margin: 1,
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
    color: 'black',
    fontSize: 22,
    fontFamily: 'bold',
  },
  arrow: {
    paddingRight: 14,
  },
  goback: {
    position: 'absolute',
    top: 55,
    left: 15,
  },
  container: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBar: {
    width: '90%',
    alignSelf: 'center',
  },
});

export default styles;
