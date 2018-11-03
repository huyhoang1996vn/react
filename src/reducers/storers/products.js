import {
    GET_PRODUCTS,
    GET_PRODUCT
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
            console.log(action);
            return {
                ...state,
                productDetail: action.product
            }
        }

        // case EDIT_ORDER: {
        //     return {
        //         ...state,
        //         orderDetail: action.order
        //     }
        // }

        // case DELETE_ORDER: {
        //     return {
        //         ...state,
        //         allPRODUCTS: state.allPRODUCTS.filter(order => order.id !== action.order_id)
        //     }
        // }

        default: return state;
    }
}
