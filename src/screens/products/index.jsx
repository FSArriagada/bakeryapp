import React from "react";
import { View, Text, Button} from "react-native";
import { theme } from "../../constants/theme";
import { styles } from "./styles";

const Products = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Product</Text>
            <Button
            title="Product Detail"
            onPress={()=> navigation.navigate('ProductDetail')}
            color={theme.colors.primary}
            style={styles.button}></Button>
        </View>
    );
};

export default Products;