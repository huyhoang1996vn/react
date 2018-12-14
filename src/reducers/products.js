import {
    GET_TOP,
    GET_CATEGORIES,
    GET_PRODUCTS_BY_CATEGORY,
    GET_PRODUCT_BY_ID,
    SEARCH_PRODUCTS_BY_NAME,
    POST_FEED_BACK_PRODUCT,
    GET_FEED_BACK_PRODUCT
} from "actions/products";


const defaultState = {
    topPropducts: [],
    detailProduct: {
        product: {},
        relatedProducts: [],
        feedbacks: [],
    },
    categoryProducts: {
        category: {},
        products: [],
    },
    categories: [],
    searchedProducts: [],
}

const isActiveCategory = t => t.is_active;

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
                categories: action.data.filter(isActiveCategory)
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
        case GET_PRODUCT_BY_ID: {
            return {
                ...state,
                detailProduct: {
                    ...state.detailProduct,
                    ...action.data,
                    feedbacks: state.detailProduct.feedbacks || [],
                }
            }
        }
        case SEARCH_PRODUCTS_BY_NAME: {
            return {
                ...state,
                searchedProducts: action.data
            }
        }
        case POST_FEED_BACK_PRODUCT: {
            return {
                ...state,
                detailProduct: {
                    ...state.detailProduct,
                    feedbacks: [{...action.feedback}, ...state.detailProduct.feedbacks]
                }
            }
        }

        case GET_FEED_BACK_PRODUCT: {
            return {
                ...state,
                detailProduct: {
                    ...state.detailProduct,
                    feedbacks: action.feedbacks.reverse(),
                }
            }
        }

        default: return state;
    }
}