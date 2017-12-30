import { FETCH_CATEGORIES, FETCH_CATEGORIES_COMPLETED } from '../actionTypes/categories';

const reducer = (state = { fetch_status: 'empty', items: [] }, action) => {
    switch (action.type) {
        case FETCH_CATEGORIES:
            return Object.assign({}, {
                fetch_status: 'fetching',
                items: state.items
            });
        case FETCH_CATEGORIES_COMPLETED:
            return Object.assign({}, {
                fetch_status: 'fetch_completed',
                items: [...state.items, action.payload]
            });
        default:
            return state;
    }
};

export { reducer };