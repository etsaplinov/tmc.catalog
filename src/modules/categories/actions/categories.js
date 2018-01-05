import { FETCH_CATEGORIES_REQUEST, FETCH_CATEGORIES_SUCCESS } from '../actionTypes/categories';

export let fetchCategoriesRequest = () => {
    return {
        type: FETCH_CATEGORIES_REQUEST
    };
};
export let fetchCategoriesSuccess = (categories) => {
    return {
        type: FETCH_CATEGORIES_SUCCESS,
        payload: categories
    };
};