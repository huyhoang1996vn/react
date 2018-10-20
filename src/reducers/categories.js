import {
    GET,
    ADD,
    UPDATE,
    DELETE,
} from "actions/categories";

const defaultSate = [];


export default function(state = defaultSate, action) {
    switch(action.type) {
        case GET: {
            return action.data;
        }
        case UPDATE: {
            return state.map(item => item.id == action.data.id ? action.data : item );
        }
        case DELETE: {
            return state.filter(item => item.id !== action.data );
        }
        default: return state;
    }
}

