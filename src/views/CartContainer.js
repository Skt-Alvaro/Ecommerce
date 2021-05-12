import React from 'react';
import {View} from 'react-native';
import Cart from '../components/Cart/Cart';

const CartContainer = props => {
    return (
        <View>
            <Cart navigation={props.navigation} />
        </View>
    );
};

export default CartContainer;
