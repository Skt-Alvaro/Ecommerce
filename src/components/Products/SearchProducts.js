import React from 'react';
import {View, Dimensions} from 'react-native';
import {Content, Left, Body, ListItem, Thumbnail, Text} from 'native-base';
import images from '../../constants/images';

const {width} = Dimensions.get('window');

const SearchProducts = ({productsFiltered, navigation}) => {
    return (
        <Content style={{width: width}}>
            {productsFiltered.length > 0 ? (
                productsFiltered.map((product, i) => (
                    <ListItem
                        key={i}
                        avatar
                        onPress={() =>
                            navigation.navigate('Product Detail', {
                                item: product,
                            })
                        }>
                        <Left>
                            <Thumbnail
                                source={{
                                    uri: product.image
                                        ? product.image
                                        : images.no_product_image_found_image,
                                }}
                            />
                            <Body>
                                <Text>{product.name}</Text>
                                <Text note>{product.description}</Text>
                            </Body>
                        </Left>
                    </ListItem>
                ))
            ) : (
                <View style={{width: width}}>
                    <Text style={{alignSelf: 'center', marginTop: 10}}>
                        No products match the selected criteria
                    </Text>
                </View>
            )}
        </Content>
    );
};

export default SearchProducts;
