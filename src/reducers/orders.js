import {
    GET_ORDERS
} from "actions/orders";

const defaultStates = [];


export default function(state = defaultStates, action) {
    switch(action.type) {
        case GET_ORDERS: {
            return action.orders
        }
        default: return state;
    }
}
