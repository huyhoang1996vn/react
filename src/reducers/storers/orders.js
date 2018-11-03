import {
    GET_ORDERS,
    GET_ORDER
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

        default: return state;
    }
}
