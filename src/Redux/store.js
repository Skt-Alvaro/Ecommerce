import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import cartItemsReducer from './Reducers/cartItemReducer';

const reducer = combineReducers({
    cartItems: cartItemsReducer,
});

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware)),
);

export default store;
