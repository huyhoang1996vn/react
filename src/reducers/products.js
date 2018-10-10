import {
    GET_TOP
} from "actions/products";


const defaultState = {
    topPropducts: [],
    allProducts: [],
    detailProduct: {},
}


export default function(state = defaultState, action ) {
    switch(action.type) {
        case GET_TOP: {
            return {
                ...state,
                topPropducts: action.data
            }
        }
        default: return state;
    }
}