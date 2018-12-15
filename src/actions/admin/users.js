import request from "api/request";
import {
    getActionType
} from "actions/utils";

const prefix = "action.admin.users";

export const GET = getActionType(prefix)("GET");
export const GET_DETAIL = getActionType(prefix)("GET_DETAIL");
export const DELETE = getActionType(prefix)("DELETE");


export const get = () => (dispatch) => {
    return request().get("/userbase/").then(res => {
        if (res.data.length >= 0) {
            dispatch({
                type: GET,
                data: res.data
            })
        }
    })
}


export const add = (data = {}) => (dispatch) => {
    return request().post("/userbase/", data)
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
    return request().get("/userbase/" + id + "/").then(res => {
        if (res.data.id) {
            dispatch({
                type: GET_DETAIL,
                data: res.data
            })
        }
    })
}

export const updateDetail = (id, data = {}) => (dispatch) => {
    return request().put("/userbase/" + id + "/", data)
        .then(res => {
            if(res.data.id) {
                dispatch({
                    type: GET_DETAIL,
                    data: res.data
                })
            }
        })
}

export const deleteOne = (id) => (dispatch) => {
    return request().delete("/userbase/" + id + "/")
        .then(res => {
            if(res.data.id) {
                dispatch({
                    type: DELETE,
                    user_id: id
                })
            }
        })
}
