const formatVnd = (money) => {
    return money.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})
}

const vndToUsd = (money) => +money / 23255.814

export {
    formatVnd,
    vndToUsd
}