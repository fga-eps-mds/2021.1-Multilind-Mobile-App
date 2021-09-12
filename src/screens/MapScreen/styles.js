import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchBar: {
    position: 'absolute',
    width: '90%',
    zIndex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },

  map: {
    width: '100%',
    height: '100%',
  },
});

export default styles;
