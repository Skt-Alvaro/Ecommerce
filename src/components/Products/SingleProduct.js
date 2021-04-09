import React, {useState, useEffect} from 'react';
import {View, Button, StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {Left, Right, Container, H1} from 'native-base';

const SingleProduct = props => {
    const [item, setItem] = useState(props.route.params.item);
    const [available, setAvailable] = useState(false);

    return (
        <Container style={style.container}>
            <ScrollView>
                <ImageContainer>
                    <Image
                        source={{
                            uri: item.image
                                ? item.image
                                : 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fstatic.sticker.ly%2Fsticker_pack%2F1OzmnaU2rNLhyhkZpvaJQg%2F7TQ57U%2F10%2F5fb7dfc0-6d6f-4856-bfe0-22bcd5b0e5e5.png&f=1&nofb=1',
                        }}
                        resizeMode="contain"
                    />
                </ImageContainer>
                <ContentContainer>
                    <H1 style={style.contentHeader}>{item.name}</H1>
                    <ContentText>{item.brand}</ContentText>
                </ContentContainer>
                {/* {todo description availability} */}
            </ScrollView>

            <BottomContainer>
                <Left>
                    <TextPrice>$ {item.price}</TextPrice>
                </Left>
                <Right>
                    <Button title="Add" />
                </Right>
            </BottomContainer>
        </Container>
    );
};

export default SingleProduct;

const style = StyleSheet.create({
    container: {
        position: 'relative',
        height: '100%',
    },
    contentHeader: {
        fontWeight: 'bold',
        marginBottom: 20,
    },
});

const ScrollView = styled.ScrollView`
    margin-bottom: 80px;
    padding: 5px;
`;

const ImageContainer = styled.View`
    background-color: white;
    padding: 0px;
    margin: 0px;
`;

const Image = styled.Image`
    width: 100%;
    height: 250px;
`;

const ContentContainer = styled.View`
    margin-top: 20px;
    justify-content: center;
    align-items: center;
`;

const ContentText = styled.Text`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 20px;
`;

const BottomContainer = styled.View`
    flex-direction: row;
    position: absolute;
    bottom: 0;
    left: 0;
`;

const TextPrice = styled.Text`
    font-size: 24px;
    margin: 20px;
    color: red;
`;
