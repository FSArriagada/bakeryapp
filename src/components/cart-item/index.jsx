import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { View,Text, TouchableOpacity } from 'react-native';

import { THEME } from '../../constants/theme';
import { styles } from './styles';


const CartItem = ({item, onDelete}) => {
    return (
        <View style={styles.container}>
            <View style= {styles.headerContainer}>
                <Text style={styles.header}>{item.title}</Text>
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.quantity}>{item.quantity}</Text>
                <Text style={styles.price}>{item.price}</Text>
                <TouchableOpacity onPress={() => onDelete(item.id)}>
                    <MaterialCommunityIcons name='trash-can' size={22} color={THEME.colors.primary}/>
                </TouchableOpacity>
            </View>
             
        </View>
    )
}

export default CartItem;