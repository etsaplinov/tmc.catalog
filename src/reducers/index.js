import { combineReducers } from 'redux';

import { reducer as categoriesReducers } from '../modules/categories/reducers/categories';

export default combineReducers({
    categories: categoriesReducers
});

