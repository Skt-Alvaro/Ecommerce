import React from 'react';
import {StyleSheet} from 'react-native';
import {Badge, Text} from 'native-base';
import {useSelector} from 'react-redux';

const CartIcon = () => {
    const {items} = useSelector(state => state.cartItems);

    return (
        <>
            {items.length ? (
                <Badge style={style.badge}>
                    <Text style={style.text}>{items.length}</Text>
                </Badge>
            ) : null}
        </>
    );
};

export default CartIcon;

const style = StyleSheet.create({
    badge: {
        width: 25,
        position: 'absolute',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        top: -4,
        right: -15,
    },
    text: {
        fontSize: 12,
        width: 100,
        fontWeight: 'bold',
    },
});
