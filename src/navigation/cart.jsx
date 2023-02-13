import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { THEME } from "../constants/theme";
import { Cart } from "../screens";

const Stack = createNativeStackNavigator();

const CartNavigator = () => {
    return(
        <Stack.Navigator
        initialRouteName="Cart"
        screenOptions={{headerStyle: {backgroundColor: THEME.colors.primary}, headerTintColor: THEME.colors.text}}>
            <Stack.Screen name="Cart" component={Cart}/>
        </Stack.Navigator>
    )
}

export default CartNavigator;