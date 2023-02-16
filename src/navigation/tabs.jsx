import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { THEME } from '../constants/theme';
import CartNavigator from './cart';
import ShopNavigator from './shop';
import OrdersNavigator from './orders';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

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
                <BottomTab.Screen 
                    name="ShopTab" 
                    component={ShopNavigator}
                    options={{
                        title: 'Shop',
                        tabBarIcon:({focused})=> (<MaterialCommunityIcons name='home' size={24} color={THEME.colors.primary}/>),
                        }}/>
                <BottomTab.Screen 
                    name="OrdersTab" 
                    component={OrdersNavigator}
                    options={{title: 'Orders',
                    tabBarIcon:({focused})=> (
                        <MaterialCommunityIcons name='text-box-multiple' size={24} color={THEME.colors.primary}/>
                    )
                    }}/>
                <BottomTab.Screen 
                    name="CartTab" 
                    component={CartNavigator}
                    options={{title: 'Cart',
                    tabBarIcon:({focused})=> (
                        <MaterialCommunityIcons name='cart' size={24} color={THEME.colors.primary}/>
                    )}}/>
        </BottomTab.Navigator>
    );
};

export default Tabs;