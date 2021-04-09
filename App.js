import React from 'react';
import {StatusBar, LogBox} from 'react-native';
import ProductContainer from './src/views/ProductContainer';
import styled from 'styled-components/native';
import {NavigationContainer} from '@react-navigation/native';
import Main from './Navigation/Main';
import {Provider} from 'react-redux';
import store from './Redux/store';

LogBox.ignoreAllLogs(true);

const App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <StatusBar
                    backgroundColor={'#000'}
                    barStyle={'light-content'}
                />
                {/* <ProductContainer /> */}
                <Main />
            </NavigationContainer>
        </Provider>
    );
};

export default App;
