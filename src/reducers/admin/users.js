import {
    GET,
    GET_DETAIL
} from "actions/admin/users";

const defaultState = {
    all: [],
    detail: {},
};

export default function(state = defaultState, action) {
    switch(action.type) {
        case GET: {
            return {
                ...state,
                all: action.data
            }
        }
        case GET_DETAIL: {
            return {
                ...state,
                detail: action.data
            }
        }

        default: return state;
    }
}
