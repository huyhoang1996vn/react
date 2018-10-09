import { combineReducers } from 'redux'

import session from "./session";
import products from "./products";

export default combineReducers({
    session,
    products
})