import request from "api/request";
import {
    getActionType
} from "actions/utils";

const prefix = "action.cart";

export const GET_CART = getActionType(prefix)("GET_CART");
export const ADD_CART = getActionType(prefix)("ADD_CART");
export const UPDATE_CART = getActionType(prefix)("UPDATE_CART");
export const DELETE_CART = getActionType(prefix)("DELETE_CART");
export const CLEAN_CART = getActionType(prefix)("CLEAN_CART");


export const getCart = () => (dispatch, getState) => {
    if (getState().session.userAuth.token) {
        return request().get("/cart/").then(res => {
            dispatch({
                type: GET_CART,
                items: res.data
            })
        })
    }
}

export const addNewItemToCart = (product) => (dispatch, getState) => {
    const productInCart = getState().cart.items.find(pr => pr.product.id === product.id);
    if (getState().session.userAuth.token) {
        return dispatch(postCart({
            product_id: product.id,
            quanlity: productInCart ? +productInCart.quanlity + 1 : 1
        }))
    } else {
        const item = {
            product,
            quanlity: productInCart ? +productInCart.quanlity + 1 : 1
        }
        if (productInCart) {
            dispatch({
                type: UPDATE_CART,
                item
            })
        } else {
            dispatch({
                type: ADD_CART,
                item
            })
        }
    }
}

export const updateItemInCart = (item) => (dispatch, getState) => {

    const productInCart = getState().cart.items.find(pr => pr.product.id === item.product.id);
    if (getState().session.userAuth.token) {
        return dispatch(postCart({
            product_id: item.product.id,
            quanlity: item.quanlity,
        }))
    } else {
        if (item.quanlity == 0) {
            dispatch({
                type: DELETE_CART,
                product_id: item.product.id,
            })
        } else {
            if (productInCart) {
                dispatch({
                    type: UPDATE_CART,
                    item,
                })
            } else {
                dispatch({
                    type: ADD_CART,
                    item,
                })
            }
        }

    }
}


export const postCart = (data) => (dispatch) => {
    return request().post("/cart/modify/", data).then(res => {
        if (res.data.message === "success") {
            return dispatch(getCart());
        }
    })
}
