import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';

const Cart = () => {
    const {items} = useSelector(state => state.cartItems);

    return (
        <View>
            {items?.map((item, i) => {
                console.log(item);
            })}
        </View>
    );
};

export default Cart;
