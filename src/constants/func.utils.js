const formatVnd = (money) => {
    return money ? money.toLocaleString('it-IT', {style : 'currency', currency : 'VND'}) : "0VND"
}

const vndToUsd = (money) => +money / 23255.814

const getDataObject = (data, keys = "", cb) => {
    let res = keys.split(".").reduce((acc, cur) => {
        if (cur !== null && acc[cur]) return acc[cur];
        else return null; 
    }, data || {});
    if (res) cb(res);
    return res;
}

export {
    formatVnd,
    vndToUsd,
    getDataObject
}
