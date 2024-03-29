import { StyleSheet } from 'react-native';
import { THEME } from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 120,
    backgroundColor: THEME.colors.lightgray,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: THEME.colors.primary,
    shadowColor: '#000',
    shadowOffset: {
        width:0,
        height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    margin: 10,
    paddingVertical:10,
    paddingHorizontal:20,
  },
  headerContainer: {},
  header: {
    fontSize: 16,
    fontFamily: 'Sarabun-Bold',
    marginBottom: 5,
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  quantity: {
    fontSize: 14,
    fontFamily: 'Sarabun-Bold',
    color: THEME.colors.black,
    marginBottom: 5,
  },
  price: {
    fontSize: 14,
    fontFamily: 'Sarabun-Medium',
    color: THEME.colors.black,
    marginBottom: 5,
  },
  

});
