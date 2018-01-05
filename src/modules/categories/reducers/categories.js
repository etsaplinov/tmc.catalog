import { FETCH_CATEGORIES_REQUEST, FETCH_CATEGORIES_SUCCESS } from '../actionTypes/categories';

let writeCategories = (state, action) => {

    let categories = [...state.items, ...action.payload];

    let dic = new Map();

    for (let n of categories) {
        dic.set(n.Id, {
            CategoryId: n.Id,
            ParentCategoryId: n.ParentCategoryId,
            Items: [],
            Name: n.Name,
            Sorting: n.Sorting
        });
    }

    let getChildrens = (parentId) => {
        let childItems = [];
        dic.forEach((item, key) => {
            if (item.ParentCategoryId === parentId) {
                item.Items = getChildrens(item.CategoryId);
                childItems.push(item);
            }
        });
        return childItems;
    }

    var rootNodes = [];
    categories.forEach((node) => {
        if (node.ParentCategoryId == null) {
            node.Items = getChildrens(node.Id);
            rootNodes.push(node);
        }
    });





    return Object.assign({}, {
        fetch_status: 'fetch_success',
        items: categories,
        recursiveItems: rootNodes
    });

};


const reducer = (state = { fetch_status: 'empty', items: [], recursiveItems: [] }, action) => {
    switch (action.type) {
        case FETCH_CATEGORIES_REQUEST:
            return Object.assign({}, {
                fetch_status: 'fetching',
                items: state.items
            });
        case FETCH_CATEGORIES_SUCCESS:
            return writeCategories(state, action);
        default:
            return state;
    }
};

export { reducer };