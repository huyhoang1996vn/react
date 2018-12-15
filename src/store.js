import { createStore, compose, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';
import rootReducer from 'reducers'
import config from "config";


const persistConfig = {
    key: config.KEY_PERSIST_STORE,
    storage,
    blacklist: [],
    // whitelist: ['session'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    let store = createStore(
        persistedReducer,
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        composeEnhancer(applyMiddleware(thunk)),
    )
    let persistor = persistStore(store)
    return { store, persistor }
}