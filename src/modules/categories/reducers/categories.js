import { FETCH_CATEGORIES } from '../actionTypes/categories';

const reducer = (state = { fetch_status: 'empty', items: [] }, action) => {
    switch (action.type) {
        case FETCH_CATEGORIES:
            return Object.assign({}, {
                fetch_status: 'fetching',
                items: state.items
            })
        default:
            return state;
    }
};

export { reducer };