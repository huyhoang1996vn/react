import {
    AUTH_LOGIN
} from "actions/auth";

const defaultState = {
    userAuth: {
        data: {},
        token: ""
    }
}

export default function(state = defaultState, {type, ...action}) {
    switch(type) {
        case AUTH_LOGIN: {
            return {
                ...state,
                userAuth: {
                    data: {},
                    token: action.token
                }
            }
        }
        default: return state;
    }
}

