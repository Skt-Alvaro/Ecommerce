import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ProductContainer from '../views/ProductContainer';
import SingleProduct from '../components/Products/SingleProduct';

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
        </Stack.Navigator>
    );
};

export default MyStack;
