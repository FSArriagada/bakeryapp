import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { THEME } from '../constants/theme';
import CartNavigator from './cart';
import ShopNavigator from './shop';
import OrdersNavigator from './orders';

const BottomTab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <BottomTab.Navigator 
            initialRouteName='ShopTab' 
            screenOptions={{
                headerShown: false,
                tabBarLabelStyle: {
                    fontFamily: 'Sarabun-Regular',
                    fontSize:12,
                },
                tabBarActiveTintColor: THEME.colors.primary,
                tabBarInactiveTintColor: THEME.colors.gray,
                }}>
                <BottomTab.Screen name="ShopTab" component={ShopNavigator}/>
                <BottomTab.Screen name="OrdersTab" component={OrdersNavigator}/>
                <BottomTab.Screen name="CartTab" component={CartNavigator}/>
        </BottomTab.Navigator>
    );
};

export default Tabs;