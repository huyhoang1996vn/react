import request from "api/request";
import {
    getActionType
} from "actions/utils";

const prefix = "action.orders";

export const GET_ORDERS = getActionType(prefix)("GET_ORDERS");

export const getOrders = () => (dispatch, getState) => {
    if (getState().session.userAuth.token) {
        return request().get("/order/list/").then(res => {
            if (res.data && res.data.length >= 0) {
                dispatch({
                    type: GET_ORDERS,
                    orders: res.data
                })
            }
        })
    }
}
