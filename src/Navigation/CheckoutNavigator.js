import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Checkout from '../components/Checkout/Checkout';
import Confirm from '../components/Checkout/Confirm';
import Payment from '../components/Checkout/Payment';

const Tab = createMaterialTopTabNavigator();

const CheckoutNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Shipping" component={Checkout} />
            <Tab.Screen name="Payment" component={Payment} />
            <Tab.Screen name="Confirm" component={Confirm} />
        </Tab.Navigator>
    );
};

export default CheckoutNavigator;
