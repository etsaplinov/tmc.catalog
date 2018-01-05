import {
    FETCH_PRODUCT_REQUEST,
    FETCH_PRODUCT_SUCCESS
} from '../actionTypes';

export let fetchProductRequest = (id) => {
    return {
        type: FETCH_PRODUCT_REQUEST
    };
};
export let fetchProductSuccess = (product) => {
    return {
        type: FETCH_PRODUCT_SUCCESS,
        payload: product
    };
};