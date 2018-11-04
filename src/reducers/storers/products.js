import {
    GET_PRODUCTS,
    GET_PRODUCT,
    DEL_PRODUCT
} from "actions/storers/products";

const defaultState = {
    allProducts: [],
    productDetail: {},
};

export default function(state = defaultState, action) {
    switch(action.type) {
        case GET_PRODUCTS: {
            return {
                ...state,
                allProducts: action.products
            }
        }
        case GET_PRODUCT: {
            return {
                ...state,
                productDetail: action.product
            }
        }

        case DEL_PRODUCT: {
            return {
                ...state,
                allProducts: state.allProducts.filter(product => product.id !== action.product_id)
            }
        }

        default: return state;
    }
}
