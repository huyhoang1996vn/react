import { BASE_PATH, STATIC_PATH } from "./index";

const _url = (url) => {
    return `${BASE_PATH}${url}`
}

const _staticUrl = url => `${STATIC_PATH}${url}`;

export default {
    _url,
    _staticUrl
}

export {
    _url,
    _staticUrl
}