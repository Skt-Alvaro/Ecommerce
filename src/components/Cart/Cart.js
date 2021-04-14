import React, {useState} from 'react';
import {View, Dimensions, Button, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {Text, Left, Right, H1} from 'native-base';
import styled from 'styled-components/native';
import * as actions from '../../../Redux/Actions/cartItemAction';
import CartItem from './CartItem';
import {SwipeListView} from 'react-native-swipe-list-view';
import Icon from 'react-native-vector-icons/FontAwesome';

const {width, height} = Dimensions.get('window');

const Cart = ({navigation}) => {
    const dispatch = useDispatch();
    const {items} = useSelector(state => state.cartItems);
    let total = 0;
    items.forEach(i => (total += i.price));

    return (
        <>
            {items.length ? (
                <View style={{height: height - 60}}>
                    <H1
                        style={{
                            alignSelf: 'center',
                            marginTop: 20,
                        }}>
                        Cart
                    </H1>

                    <SwipeListView
                        data={items}
                        renderItem={data => <CartItem item={data} />}
                        renderHiddenItem={data => (
                            <HiddenContainer>
                                <HiddenButton
                                    onPress={() =>
                                        dispatch(
                                            actions.removeFromCart(data.item),
                                        )
                                    }>
                                    <Icon
                                        name="trash"
                                        color={'white'}
                                        size={30}
                                    />
                                </HiddenButton>
                            </HiddenContainer>
                        )}
                        disableRightSwipe={true}
                        previewOpenDelay={3000}
                        friction={1000}
                        tension={40}
                        leftOpenValue={75}
                        stopLeftSwipe={75}
                        rightOpenValue={-75}
                    />

                    <BottomContainer>
                        <Left>
                            <TextPriceBottom>
                                $ {total.toFixed(2)}
                            </TextPriceBottom>
                        </Left>
                        <Right>
                            <Button
                                onPress={() => dispatch(actions.clearCart())}
                                title="Clear"
                            />
                        </Right>
                        <Right>
                            <Button
                                title="Checkout"
                                onPress={() => navigation.navigate('Checkout')}
                            />
                        </Right>
                    </BottomContainer>
                </View>
            ) : (
                <EmptyContainer>
                    <Text>Looks like your cart is empty</Text>
                    <Text>Add products to your cart to get started</Text>
                </EmptyContainer>
            )}
        </>
    );
};

export default Cart;

const EmptyContainer = styled.View`
    height: ${height}px;
    align-items: center;
    justify-content: center;
`;

const BottomContainer = styled.View`
    flex-direction: row;
    position: absolute;
    bottom: 0px;
`;

const TextPriceBottom = styled.Text`
    font-size: 18px;
    margin: 20px;
    color: red;
`;

const HiddenContainer = styled.View`
    flex: 1;
    justify-content: flex-end;
    flex-direction: row;
`;

const HiddenButton = styled.TouchableOpacity`
    background-color: red;
    margin-top: 50px;
    justify-content: center;
    align-items: flex-end;
    padding-right: 25px;
    height: 120px;
    width: ${width / 1.2}px;
`;
