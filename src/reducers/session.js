import {
    AUTH_LOGIN,
    AUTH_LOGOUT,
    GET_PROFILE
} from "actions/auth";

const defaultState = {
    userAuth: {
        data: {},
        token: ""
    },
    managerAuth: {
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

        case AUTH_LOGOUT: {
            return {
                ...state,
                userAuth: defaultState.userAuth,
            }
        }

        case GET_PROFILE: {
            return {
                ...state,
                userAuth: {
                    ...state.userAuth,
                    data: action.data,
                }
            }
        }
        default: return state;
    }
}

