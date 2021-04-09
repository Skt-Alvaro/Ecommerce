import * as types from '../Types/cartTypes';

// const cartItemAction = () => (dispatch) => {

// }

export const addToCart = payload => {
    return {type: types.ADD_TO_CART, payload};
};
export const removeFromCart = payload => {
    return {type: types.REMOVE_FROM_CART, payload};
};
export const clearCart = payload => {
    return {type: types.ADD_TO_CART};
};
