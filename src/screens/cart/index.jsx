import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { CART } from "../../constants/data/index";
import CartItem from '../../components/cart-item'

const Cart = ({navigation}) => {
    const onDelete = (id) => {};
    const renderItem = ({item}) => <CartItem item= {item} onDelete={onDelete}/>
    const keyExtractor = (item)=> item.id.toString();
    return(
        <View style={styles.container}>
            <View style={styles.listContainer}>
            <FlatList
                data={CART}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                style={styles.listContainer}/>
            </View>
        
            <View style={styles.footer}>
                <TouchableOpacity style={styles.confirmButton} onPress={() => null}>
                    <Text style={styles.confirmButtonText}>Confirm</Text>
                    <View style={styles.totalContainer}>
                        <Text style={styles.totalText}>Total: </Text>
                        <Text style={styles.totalPrice}>$2000</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Cart;