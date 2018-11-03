import request from "api/request";
import {
    getActionType
} from "actions/utils";

const prefix = "action.storers.products";

export const GET_PRODUCTS = getActionType(prefix)("GET_PRODUCTS");
export const GET_PRODUCT = getActionType(prefix)("GET_PRODUCT");


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