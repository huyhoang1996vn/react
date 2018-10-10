import request from "api/request";
import {
    getActionType
} from "actions/utils";

const prefix = "action.products";


export const GET_TOP = getActionType("GET_TOP");
export const getTopProducts = (limit = 10) => dispatch => {
    return request().get("http://52.14.71.211/api/product/?item=" + limit).then(res => {
        dispatch({
            type: GET_TOP,
            data: res.data
        })
    })
}

export const GET_BY_CATEGORY = getActionType("GET_BY_CATEGORY");
export const getByCategory = category_id => dispatch => {
    return request().get(`/product/?category=${category_id}`).then(data => {
        console.log(data);
    })
}

