import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { THEME } from '../constants/theme';

import { Categories, ProductDetail, Products } from '../screens/index';

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Categories" screenOptions={{headerStyle: {backgroundColor: THEME.colors.primary}, headerTintColor: THEME.colors.text}}>
      <Stack.Screen name="Categories" component={Categories} options={{headerShown:false, title:'Categories'}} />
      <Stack.Screen name="Products" component={Products} options={({route}) => ({ title: route.params.title})}/>
      <Stack.Screen name="ProductDetail" component={ProductDetail} options={({route}) => ({ title: route.params.title})}/>
    </Stack.Navigator>
  );
};

export default ShopNavigator;
