import {StyleSheet} from 'react-native';
import colors from '../../../assets/theme/colors';
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    margin: 10,
    padding: 20,
    elevation: 8,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    // borderColor: colors.primary,
    // borderWidth: 1,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: 'black',
    borderWidth: 1,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  nameStyle: {
    fontFamily: 'Lato-Bold',
    color: colors.primary,
    color: 'black',
    fontSize: 20,
    marginStart: 5,
  },
  emailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  emailStyle: {
    fontFamily: 'Lato-Regular',
    fontSize: 16,
    color: colors.grey,
    marginStart: 5,
  },
});
export default styles;
