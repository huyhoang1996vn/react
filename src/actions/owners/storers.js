import request from "api/request";
import {
    getActionType
} from "actions/utils";

import { GROUP_USERS } from "constants/index"

const prefix = "action.owners.storers";

export const GET = getActionType(prefix)("GET");
export const GET_DETAIL = getActionType(prefix)("GET_DETAIL");


export const get = () => (dispatch) => {
    return request().get("/store/owner/").then(res => {
        if (res.data.length >= 0) {
            dispatch({
                type: GET,
                data: res.data
            })
        }
    })
}


export const add = (data = {}) => (dispatch) => {
    return request().post("/store/owner/", data)
        .then(res => {
            console.log(res);
            // if(res.data.id) {
            //     dispatch({
            //         type: GET_DETAIL,
            //         data: res.data
            //     })
            // }
        })
}

export const getDetail = (id) => (dispatch) => {
    return request().get("/store/owner/" + id + "/").then(res => {
        if (res.data.id) {
            dispatch({
                type: GET_DETAIL,
                data: res.data
            })
        }
    })
}

export const updateDetail = (id, data = {}) => (dispatch) => {
    return request().put("/store/owner/" + id + "/", data)
        .then(res => {
            if(res.data.id) {
                dispatch({
                    type: GET_DETAIL,
                    data: res.data
                })
            }
        })
}
