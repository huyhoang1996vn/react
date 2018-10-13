import {
    FETCHING_SERVER
} from "actions/common";

const defaultStates = {
    isFetching: 0,
}


export default function(state = defaultStates, action) {
    switch(action.type) {
        case FETCHING_SERVER: {
            return {
                ...state,
                isFetching: action.isFetching ? state.isFetching + 1 : state.isFetching - 1
            }
        }
        default: return state;
    }
}
