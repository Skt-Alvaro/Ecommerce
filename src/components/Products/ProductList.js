import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import ProductCard from './ProductCard';

const ProductList = ({item, navigation}) => {
    return (
        <View>
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate('Product Detail', {item: item})
                }>
                <View>
                    <ProductCard {...item} />
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default ProductList;
