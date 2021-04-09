import React, {useState, useEffect} from 'react';
import {View, ScrollView, Text, Dimensions} from 'react-native';
import HeaderContainer from '../layout/Header';
import {Container} from 'native-base';
import SearchProducts from '../components/Products/SearchProducts';
import Banner from '../layout/Banner';
import ProductList from '../components/Products/ProductList';
import ProductCategoriesFilter from '../components/Products/ProductCategoriesFilter';
import styled from 'styled-components/native';

const data = require('../../assets/products.json');

const {width} = Dimensions.get('window');

const ProductContainer = props => {
    const [productsFiltered, setProductsFiltered] = useState([]);
    const [focus, setFocus] = useState(false);
    const [products, setProducts] = useState([]);
    const [productsCategory, setProductsCategory] = useState([]);

    useEffect(() => {
        setProductsFiltered(data);
        setProducts(data);
        setProductsCategory(data);

        return () => {
            setProducts([]);
            setProductsFiltered([]);
            setFocus(false);
            setProductsCategory([]);
        };
    }, []);

    return (
        <Container>
            <View style={{backgroundColor: 'gainsboro', flex: 1}}>
                <HeaderContainer
                    products={products}
                    setProductsFiltered={setProductsFiltered}
                    setFocus={setFocus}
                    focus={focus}
                />
                {focus ? (
                    <SearchProducts
                        productsFiltered={productsFiltered}
                        navigation={props.navigation}
                    />
                ) : (
                    <ScrollView>
                        <View style={{flex: 1}}>
                            <View>
                                <Banner />
                            </View>
                            <View>
                                <ProductCategoriesFilter
                                    products={products}
                                    setProductsCategory={setProductsCategory}
                                />
                            </View>
                            {productsCategory.length > 0 ? (
                                <ProductsContainer>
                                    {productsCategory.map((product, i) => (
                                        <ProductList
                                            navigation={props.navigation}
                                            key={i}
                                            item={product}
                                        />
                                    ))}
                                </ProductsContainer>
                            ) : (
                                <NotFound>
                                    <Text style={{fontSize: 30}}>
                                        Products not found
                                    </Text>
                                </NotFound>
                            )}
                        </View>
                    </ScrollView>
                )}
            </View>
        </Container>
    );
};

export default ProductContainer;

const NotFound = styled.View`
    justify-content: center;
    align-items: center;
    height: ${width + 50}px;
`;

const ProductsContainer = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
`;
