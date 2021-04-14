import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, Button, View} from 'react-native';
//import { Item, Picker } from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome';
import FormContainer from '../../layout/Form/FormContainer';
import Input from '../../layout/Form/Input';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Picker} from '@react-native-picker/picker';
import {connect} from 'react-redux';
const countries = require('../../../assets/countries.json');
const Checkout = props => {
    const [orderItems, setOrderItems] = useState();
    const [address, setAddress] = useState();
    const [address2, setAddress2] = useState();
    const [city, setCity] = useState();
    const [zip, setZip] = useState();
    const [country, setCountry] = useState();
    const [phone, setPhone] = useState();
    const [selectedLanguage, setSelectedLanguage] = useState();
    useEffect(() => {
        setOrderItems(props.cartItems);
        return () => {
            setOrderItems();
        };
    }, []);

    return (
        <KeyboardAwareScrollView
            viewIsInsideTabBar={true}
            extraHeight={200}
            enableOnAndroid={true}>
            <FormContainer title={'Shipping Address'}>
                <Input
                    placeholder={'phone'}
                    name={'phone'}
                    value={phone}
                    keyboardType={'numeric'}
                    onChangeText={text => setPhone(text)}
                />
                <Input
                    placeholder={'Shipping Address 1'}
                    name={'ShippingAddress1'}
                    value={address}
                    onChangeText={text => setAddress(text)}
                />
                <Input
                    placeholder={'Shipping Address 2'}
                    name={'ShippingAddress2'}
                    value={address2}
                    onChangeText={text => setAddress2(text)}
                />
                <Input
                    placeholder={'City'}
                    name={'city'}
                    value={city}
                    onChangeText={text => setCity(text)}
                />
                <Input
                    placeholder={'Zip Code'}
                    name={'zip'}
                    value={zip}
                    keyboardType={'numeric'}
                    onChangeText={text => setZip(text)}
                />
                <Picker
                    mode="dropdown"
                    style={{width: 100, height: 40}}
                    iosHeader="Select Country"
                    iosIcon={
                        <Icon
                            name="arrow-up"
                            size={30}
                            style={{color: 'red'}}
                        />
                    }
                    selectedValue={country}
                    onValueChange={e => setCountry(e)}>
                    {countries.map(c => (
                        <Picker.Item
                            label={c.name}
                            value={c.name}
                            key={c.code}
                        />
                    ))}
                </Picker>
            </FormContainer>
        </KeyboardAwareScrollView>
    );
};
const mapStateToProps = state => {
    const {cartItems} = state;
    return {
        cartItems: cartItems,
    };
};
//export default  Checkout;
export default connect(mapStateToProps)(Checkout);
