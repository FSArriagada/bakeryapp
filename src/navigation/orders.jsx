import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { THEME } from "../constants/theme";
import { Orders } from "../screens";

const Stack = createNativeStackNavigator();

const OrdersNavigator = () => {
    return(
        <Stack.Navigator
        initialRouteName="Orders"
        screenOptions={{headerStyle: {backgroundColor: THEME.colors.primary}, headerTintColor: THEME.colors.text}}>
            <Stack.Screen name="Orders" component={Orders}/>
        </Stack.Navigator>
    )
}

export default OrdersNavigator;