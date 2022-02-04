import {StyleSheet} from 'react-native';
import colors from '../../../assets/theme/colors';
const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 10,
    borderRadius: 10,
  },
  color: {
    width: 60,
    height: 60,
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 1,
    margin: 5,
    marginEnd: 15,
  },
  nameStyle: {
    fontFamily: 'Lato-Bold',
    fontSize: 18,
    color: 'black',
    marginBottom: 5,
  },
  colorText: {
    fontFamily: 'Lato-Regular',
    fontSize: 16,
    color: colors.grey,
  },
});
export default styles;
