import {
    GET_CART,
    ADD_CART,
    UPDATE_CART,
    DELETE_CART
} from "actions/cart";


const defaultState = {
    items: [],
}

export default function (state = defaultState, action) {
    switch (action.type) {
        case GET_CART: {
            return {
                ...state,
                items: action.items
            }
        }

        case ADD_CART: {
            return {
                ...state,
                items: [
                    ...state.items,
                    {
                        ...action.item
                    }
                ]
            }
        }

        case UPDATE_CART: {
            const newItems = state.items.map(carItem => {
                return carItem.product.id === action.item.product.id ? action.item : carItem;
            })
            return {
                ...state,
                items: newItems
            }
        }

        case DELETE_CART: {
            const newItems = state.items.filter(carItem => carItem.product.id !== action.product_id);
            return {
                ...state,
                items: newItems
            }
        }
        default: return state;
    }
}