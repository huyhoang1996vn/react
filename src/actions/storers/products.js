import request from "api/request";
import {
    getActionType
} from "actions/utils";

const prefix = "action.storers.products";

export const GET_PRODUCTS = getActionType(prefix)("GET_PRODUCTS");
export const GET_PRODUCT = getActionType(prefix)("GET_PRODUCT");
export const DEL_PRODUCT = getActionType(prefix)("DEL_PRODUCT");


export const getProducts = () => dispatch => {
    return request().get("/product/").then(res => {
        if (res.data.length >= 0) {
            dispatch({
                type: GET_PRODUCTS,
                products: res.data
            })
        }
    })
}

export const getProduct = (product_id) => dispatch => {
    return request().get(`/product/${product_id}/`).then(res => {
        dispatch({
            type: GET_PRODUCT,
            product: res.data
        })
    })
}

export const updateProduct = (product_id, form_data) => dispatch => {
    return request({
        "Content-Type": 'multipart/form-data'
    }).put(`/product/${product_id}/`, form_data).then(res => {
        dispatch({
            type: GET_PRODUCT,
            product: res.data
        })
    })
}

export const addProduct = (form_data) => dispatch => {
    return request({
        "Content-Type": 'multipart/form-data'
    }).post(`/product/`, form_data)
}

export const delProduct = (product_id) => dispatch => {
    return request().delete(`/product/${product_id}/`).then(res => {
        dispatch({
            type: DEL_PRODUCT,
            product_id
        })
    })
}