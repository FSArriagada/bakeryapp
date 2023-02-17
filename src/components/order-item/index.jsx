import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { View,Text, TouchableOpacity } from 'react-native';

import { THEME } from '../../constants/theme';
import { formatDate } from '../../utils/functions/index.';
import { styles } from './styles';

const OrderItem = ({item, onDelete}) => {
    return (
        <View style={styles.container}>
            <View style= {styles.headerContainer}>
                <Text style={styles.date}>{formatDate(item.date)}</Text>
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.total}>${item.total}</Text>
                <TouchableOpacity onPress={() => onDelete(item.id)}>
                    <MaterialCommunityIcons name='trash-can' size={22} color={THEME.colors.primary}/>
                </TouchableOpacity>
            </View>
             
        </View>
    )
}

export default OrderItem;