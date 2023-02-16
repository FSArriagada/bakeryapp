import { StyleSheet } from 'react-native';
import { THEME } from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.colors.lightgray,
  },
  listContainer:{
    flex: 1,
    backgroundColor: THEME.colors.white,
  },
  footer:{
    backgroundColor: THEME.colors.white,
    borderTopColor: THEME.colors.white,
    borderTopWidth: 1,
    paddingVertical: 10,
    marginHorizontal: 10,
  },
  confirmButton:{ 
    backgroundColor: THEME.colors.green,
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    },
  confirmButtonText:{
    color: THEME.colors.white,
    fontSize: 14,
    FontFamily: 'Sarabun-Regular'
  },
  totalContainer:{
    flex: 0.4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  totalText:{
    color: THEME.colors.white,
    fontSize: 14,
    fontFamily: 'Sarabun-Bold',
  },
  totalPrice:{
    color: THEME.colors.white,
    fontSize: 14,
    fontFamily: 'Sarabun-Bold',
  },
});