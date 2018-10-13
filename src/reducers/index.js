import { combineReducers } from 'redux'

import session from "./session";
import products from "./products";
import common from "./common";

export default combineReducers({
    session,
    products,
    common
})