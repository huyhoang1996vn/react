import request from "api/request";
import {
    getActionType
} from "actions/utils";

const prefix = "action.overviews";

export const ADMIN_GET = getActionType(prefix)("ADMIN_GET");
export const OWNER_GET = getActionType(prefix)("OWNER_GET");
export const STORER_GET = getActionType(prefix)("STORER_GET");

const urlOverview = {
    admin: {
        url: '/report/admin/',
        type: ADMIN_GET
    },
    owner: {
        url:  '/report/owner/',
        type: OWNER_GET
    },
    store: {
        url: '/report/store/',
        type: STORER_GET
    },
}




export const get = () => (dispatch, getState) => {
    const {type, url} = urlOverview[getState().session.userAuth.data.role];
    if (getState().session.userAuth.token) {
        return request().get(url).then(res => {
            dispatch({
                type,
                data: res.data
            })
        })
    }
}
