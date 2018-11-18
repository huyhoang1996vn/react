import { combineReducers } from 'redux'

import session from "./session";
import products from "./products";
import common from "./common";
import cart from "./cart";
import categories from "./categories";
import admin from "./admin";
import storers from "./storers";
import orders from "./orders";

export default combineReducers({
    session,
    products,
    common,
    cart,
    categories,
    admin,
    storers,
    orders
})