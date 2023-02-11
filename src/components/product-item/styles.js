import { StyleSheet } from 'react-native';
import { THEME } from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10,
    height: 130,
    backgroundColor: THEME.colors.primary,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-around',
  },
  title: {
    fontFamily: 'Sarabun-Medium',
    fontSize: 16,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  price: {
    fontFamily: 'Sarabun-Bold',
    fontSize: 16,
  },
  weight: {
    fontFamily: 'Sarabun-Regular',
    fontSize: 14,
  },
});
