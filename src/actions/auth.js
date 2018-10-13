import request from "api/request";
import {
    getActionType
} from "actions/utils";

const prefix = "action.auth";

export const AUTH_LOGIN = getActionType(prefix)("AUTH_LOGIN");
export const authLogin = (data) => dispatch => {
    return request().post("/login/", {
        username: data.email,
        password: data.password,
    }).then(res => {
        dispatch({
            type: AUTH_LOGIN,
            token: res.data.token
        })
        dispatch(getProfle());
    })
}

export const GET_PROFILE = getActionType(prefix)("GET_PROFILE");
export const getProfle = () => dispatch => {
    return request().get("/profile/").then(res => {
        console.log(res);
        // dispatch({

        // })
    })
}