import {
    GET_TOP,
    GET_CATEGORIES,
    GET_PRODUCTS_BY_CATEGORY,
    GET_PRODUCT_BY_ID,
    SEARCH_PRODUCTS_BY_NAME
} from "actions/products";


const defaultState = {
    topPropducts: [],
    detailProduct: {
        product: {},
        relatedProducts: [],
    },
    categoryProducts: {
        category: {},
        products: [],
    },  
    categories: [],
    searchedProducts: [],
}


export default function (state = defaultState, action) {
    switch (action.type) {
        case GET_TOP: {
            return {
                ...state,
                topPropducts: action.data
            }
        }
        case GET_CATEGORIES: {
            return {
                ...state,
                categories: action.data
            }
        }

        case GET_PRODUCTS_BY_CATEGORY: {
            return {
                ...state,
                categoryProducts: {
                    category: [],
                    products: action.data, 
                }
            }
        }
        case GET_PRODUCT_BY_ID : {
            return {
                ...state,
                detailProduct: action.data
            }
        }
        case SEARCH_PRODUCTS_BY_NAME: {
            return {
                ...state,
                searchedProducts: action.data
            }
        }
        default: return state;
    }
}