const formatVnd = (money) => {
    return money ? money.toLocaleString('it-IT', {style : 'currency', currency : 'VND'}) : "0VND"
}

const vndToUsd = (money) => +money / 23255.814

export {
    formatVnd,
    vndToUsd
}