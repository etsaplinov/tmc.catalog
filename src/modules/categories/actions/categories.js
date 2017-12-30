import { FETCH_CATEGORIES, FETCH_CATEGORIES_COMPLETED } from '../actionTypes/categories';

export let fetchCategories = () => {
    return {
        type: FETCH_CATEGORIES
    };
};
export let fetchCategoriesComplete = () => {
    return {
        type: FETCH_CATEGORIES_COMPLETED,
        payload: ['category 1']
    };
};