import React from "react";
import { View, Text} from "react-native";
import { PRODUCTS } from "../../constants/data";
import { styles } from "./styles";

const ProductDetail = ({navigation, route}) => {
    const {productId, title} = route.params;
    const product = PRODUCTS.find ((product) => productId === product.id);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.title}>{product.description}</Text>
            <Text style={styles.title}>{product.weight}</Text>
            <Text style={styles.title}>${product.price}</Text>
        </View>
    );
};

export default ProductDetail;

