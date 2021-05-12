import React from 'react';
import {SafeAreaView} from 'react-native';
import {Header, Icon, Item, Input} from 'native-base';

const HeaderContainer = props => {
    const searchProduct = text => {
        const product = props.products.filter(i =>
            i.name.toLowerCase().includes(text.toLowerCase()),
        );
        props.setProductsFiltered(product);
    };

    const openList = () => {
        props.setFocus(true);
    };

    const onBlur = () => {
        props.setFocus(false);
    };

    return (
        <SafeAreaView>
            <Header searchBar rounded style={{marginVertical: 10}}>
                <Item>
                    <Icon name="search" />
                    <Input
                        placeholder="Search"
                        onChangeText={text => searchProduct(text)}
                        onFocus={openList}
                    />
                    {props.focus && <Icon onPress={onBlur} name="close" />}
                </Item>
            </Header>
        </SafeAreaView>
    );
};

export default HeaderContainer;
