import request from "api/request";
import {
    getActionType
} from "actions/utils";

import {
    CLEAN_CART
} from "./cart";

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

export const AUTH_REGISTER = getActionType(prefix)("AUTH_REGISTER");
export const authRegister = (data) => dispatch => {
    const { email, password, first_name, last_name } = data;
    return request().post("/register/", {
        email,
        password,
        first_name,
        last_name,
        avatar: null,
        roll: "customer"
    })
}

export const AUTH_LOGOUT = getActionType(prefix)("AUTH_LOGOUT");
export const authLogout = () => dispatch => {
    dispatch({
        type: AUTH_LOGOUT
    })
}


export const GET_PROFILE = getActionType(prefix)("GET_PROFILE");
export const getProfle = () => dispatch => {
    return request().get("/profile/").then(res => {
        dispatch({
            type: GET_PROFILE,
            data: res.data,
        })
    })
}


export const editProfle = (data) => dispatch => {
    return request().put("/profile/", data).then(res => {
        dispatch({
            type: GET_PROFILE,
            data: res.data,
        })
    })
}
