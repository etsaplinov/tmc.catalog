import { combineReducers } from 'redux';

import { reducer as categoriesReducers } from '../modules/categories/reducers/categories';
import { reducer as productsReducers } from '../modules/products/reducers';

export default combineReducers({
    categories: categoriesReducers,
    products: productsReducers
});