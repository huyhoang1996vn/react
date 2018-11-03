import {
    GET_ORDERS,
    GET_ORDER,
    EDIT_ORDER,
    DELETE_ORDER
} from "actions/storers";

const defaultState = {
    allOrders: [],
    orderDetail: {},
};

export default function(state = defaultState, action) {
    switch(action.type) {
        case GET_ORDERS: {
            return {
                ...state,
                allOrders: action.orders
            }
        }
        case GET_ORDER: {
            return {
                ...state,
                orderDetail: action.order
            }
        }

        case EDIT_ORDER: {
            return {
                ...state,
                orderDetail: action.order
            }
        }

        case DELETE_ORDER: {
            console.log(action);
            return {
                ...state,
                allOrders: state.allOrders.filter(order => order.id !== action.order_id)
            }
        }

        default: return state;
    }
}
