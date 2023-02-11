import React from "react";
import { View, Text, Button, FlatList} from "react-native";
import { ProductItem } from "../../components";
import { PRODUCTS } from "../../constants/data/index";
import { THEME } from "../../constants/theme";
import { styles } from "./styles";

const Products = ({navigation,route}) => {
    const {categoryId, title} = route.params;
    const filteredProducts = PRODUCTS.filter((product) => product.categoryId === categoryId);
    const onSelected = (item) => {
        navigation.navigate('ProductDetail', {
            title: item.title,
            productId: item.id,
        });
    };
    const renderItem =({item}) => <ProductItem item={item} onSelected={onSelected}></ProductItem>
    const keyExtractor = (item) => item.id.toString();
    return (
        <View style={styles.container}>
            <FlatList
                data={filteredProducts}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                style={styles.contentList}
            />
        </View>
    );
};

export default Products;