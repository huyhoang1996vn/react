import axios from "axios";
import { _store } from "index";
import { API_URL } from "config";

import {
    fetchingServer
} from "actions/common";


const debugData = data => {
    _store.dispatch(fetchingServer(false));
    return Promise.resolve(data);
}

const debugError = er => {
    _store.dispatch(fetchingServer(false));
    if (er.response && er.response.statusText === 'Unauthorized') window.location.replace("/my-account");
    return Promise.reject(er);
}

const request = (headers = {}) => {
    const token = _store.getState().session.userAuth.token;


    const options = {
        baseURL: API_URL,
        headers: {
            // Authorization: `Token ${token}`
            ...headers,
        },
    }
    if (token) {
        options.headers = {
            ...options.headers,
            Authorization: `Token ${token}`
        }
    }

    const axiosApi = axios.create(options);

    _store.dispatch(fetchingServer(true));

    return {
        get(url, options = {}) {
            return axiosApi.get(url).then(debugData).catch(debugError)
        },
        post(url, data, options = {}) {
            return axiosApi.post(url, data).then(debugData).catch(debugError)
        },
        put(url, data, options = {}) {
            return axiosApi.put(url, data).then(debugData).catch(debugError)
        },
        delete(url, options = {}) {
            return axiosApi.delete(url).then(debugData).catch(debugError)
        },
    }
}


export default request;