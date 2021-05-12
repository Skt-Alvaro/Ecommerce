import React from 'react';
import {StatusBar, LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Main from './src/Navigation/Main';
import {Provider} from 'react-redux';
import store from './src/Redux/store';

LogBox.ignoreAllLogs(true);

const App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <StatusBar
                    backgroundColor={'#000'}
                    barStyle={'light-content'}
                />
                <Main />
            </NavigationContainer>
        </Provider>
    );
};

export default App;
