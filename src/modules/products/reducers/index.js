import { FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS } from "../actionTypes";

const reducer = (state = { fetch_status: 'empty', products: new Map(), currentProduct: null }, action) => {
    switch (action.type) {
        case FETCH_PRODUCT_REQUEST:
            return Object.assign({}, {
                fetch_status: 'fetching',
                products: state.products,
                currentProduct: null
            });
        case FETCH_PRODUCT_SUCCESS:
            let products = Object.assign(state.products);
            if (state.products.get(action.payload.Id) == null)
                products.set(action.payload.Id, action.payload);

            return Object.assign({}, {
                fetch_status: 'fetch_success',
                products: products,
                currentProduct: action.payload
            });
        default:
            return state;
    }
};

export { reducer }