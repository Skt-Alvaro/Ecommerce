import React, {useState} from 'react';
import {View, Dimensions, Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import * as actions from '../../../Redux/Actions/cartItemAction';
import {useDispatch} from 'react-redux';

let {width} = Dimensions.get('window');

const ProductCard = props => {
    const {name, price, image, countInStock} = props;
    const dispatch = useDispatch();

    const add = res => {
        dispatch(actions.addToCart(res));
    };

    return (
        <Container>
            <Image
                resizeMode="contain"
                source={{
                    uri: image
                        ? image
                        : 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fstatic.sticker.ly%2Fsticker_pack%2F1OzmnaU2rNLhyhkZpvaJQg%2F7TQ57U%2F10%2F5fb7dfc0-6d6f-4856-bfe0-22bcd5b0e5e5.png&f=1&nofb=1',
                }}
            />
            <CardContainer />
            <Title>
                {name.length > 15 ? name.substring(0, 15 - 3) + '...' : name}
            </Title>
            <Price>$ {price}</Price>
            {countInStock > 0 ? (
                <View style={{marginBottom: 60}}>
                    <TouchableOpacity onPress={() => add(props)}>
                        <Text style={{color: 'green'}}>Add</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <Text style={{marginTop: 20}}>Currently Available</Text>
            )}
        </Container>
    );
};

export default ProductCard;

const Container = styled.View`
    width: ${width / 2 - 20}px;
    height: ${width / 1.7}px;
    padding: 10px;
    border-radius: 10px;
    margin: 55px 0px 50px 10px;
    align-items: center;
    background-color: #fff;
`;

const CardContainer = styled.View`
    margin-bottom: 10px;
    height: ${width / 2 - 20 - 90}px;
    background-color: transparent;
`;

const Image = styled.Image`
    width: ${width / 3}px;
    height: ${width / 3}px;
    background-color: transparent;
    position: absolute;
    top: -45px;
`;

const Title = styled.Text`
    font-weight: bold;
    font-size: 14px;
    text-align: center;
`;

const Price = styled.Text`
    font-size: 20px;
    color: orange;
    margin-top: 10px;
`;
