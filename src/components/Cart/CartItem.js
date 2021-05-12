import React, {useState} from 'react';
import {H3} from 'native-base';
import styled from 'styled-components/native';

const CartItem = props => {
    // const [quantity, setQuantity] = useState(item.quantity);
    const {item} = props.item;

    return (
        <CardContainer>
            <Image
                source={{
                    uri: item.image
                        ? item.image
                        : 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fstatic.sticker.ly%2Fsticker_pack%2F1OzmnaU2rNLhyhkZpvaJQg%2F7TQ57U%2F10%2F5fb7dfc0-6d6f-4856-bfe0-22bcd5b0e5e5.png&f=1&nofb=1',
                }}
                resizeMode="contain"
            />
            <CardContainerRight>
                <H3 style={{marginBottom: 10}}>{item.name}</H3>
                <H3>$ {item.price}</H3>
            </CardContainerRight>
        </CardContainer>
    );
};

export default CartItem;

const CardContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin: 50px 0px 0px 20px;
    background-color: #f2f2f2;
    align-items: center;
`;

const Image = styled.Image`
    width: 120px;
    height: 120px;
`;

const CardContainerRight = styled.View`
    align-items: flex-end;
    margin-right: 20px;
`;
