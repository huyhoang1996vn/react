import request from "api/request";
import {
    getActionType
} from "actions/utils";

const prefix = "action.categories";

export const GET = getActionType(prefix)("GET");
export const ADD = getActionType(prefix)("ADD");
export const UPDATE = getActionType(prefix)("UPDATE");
export const DELETE = getActionType(prefix)("DELETE");



export const getCategories = () => dispatch => {
    return request().get("/category/").then(res => {
        dispatch({
            type: GET,
            data: res.data
        })
    })
}

export const updateCategory = (category) => dispatch => {
    return request().put(`/category/${category.id}/`, category).then(res => {
        dispatch({
            type: UPDATE,
            data: res.data
        })
    })
}


export const deleteCategory = (category_id) => dispatch => {
    return request().delete(`/category/${category_id}/`).then(res => {
        dispatch({
            type: DELETE,
            data: category_id
        })
    })
}