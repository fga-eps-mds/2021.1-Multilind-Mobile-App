import { StyleSheet } from 'react-native';
import { DARK_GRAY, PRIMARY_BLUE } from '../../constants';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
  },
  clearContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    width: '95%',
    height: 50,
    backgroundColor: '#fffefe',
    borderRadius: 15,
    paddingHorizontal: 20,
    fontSize: 16,
    textAlign: 'left',
  },
  inputOutlined: {
    backgroundColor: 'transparent',
    borderColor: DARK_GRAY,
    borderWidth: 2,
  },
  inputOutlinedSelected: {
    borderColor: PRIMARY_BLUE,
  },
  inputWithIcon: { paddingHorizontal: 50 },
  icon: {
    position: 'absolute',
    left: 10,
    zIndex: 1,
  },
});

export default styles;
