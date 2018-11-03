import request from "api/request";
import {
    getActionType
} from "actions/utils";

const prefix = "action.storers";

export const GET_ORDERS = getActionType(prefix)("GET_ORDERS");
export const GET_ORDER = getActionType(prefix)("GET_ORDER");


export const getOrders = () => dispatch => {
    return request().get("/order/store/")
    .then(res => {
        if (res && res.data) {
            dispatch({
                type: GET_ORDERS,
                orders: res.data
            })
        }
    })
}


export const getOrder = (order_id) => dispatch => {
    return request().get(`/order/store/${order_id}/`)
    .then(res => {
        if (res && res.data) {
            dispatch({
                type: GET_ORDER,
                order: res.data
            })
        }
    })
}
