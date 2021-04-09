import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ProductContainer from '../src/views/ProductContainer';
import SingleProduct from '../src/components/Products/SingleProduct';
import CartContainer from '../src/views/CartContainer';

const Stack = createStackNavigator();

const MyStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={ProductContainer}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Product Detail"
                component={SingleProduct}
                options={{headerShown: true}}
            />
            <Stack.Screen
                name="Cart"
                component={CartContainer}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
};

export default MyStack;
