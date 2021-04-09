import * as types from '../Types/cartTypes';
const initial_data = {
    items: [],
};

const cartItemReducer = (state = initial_data, action) => {
    switch (action.type) {
        case types.ADD_TO_CART:
            return {...state, items: action.payload};

        case types.REMOVE_FROM_CART:
            return {...state, items: items.filter(i => i !== action.payload)};

        case types.CLEAR_CART:
            return {...state, items: []};

        default:
            return state;
    }
};

export default cartItemReducer;
