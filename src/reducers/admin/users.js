import {
    GET,
    GET_DETAIL,
    DELETE
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

        case DELETE: {
            return {
                ...state,
                all: state.all.filter(user => user.id != action.user_id)
            }
        }

        default: return state;
    }
}
