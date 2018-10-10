const a1 = () => new Promise((rs, rj) => {
    setTimeout(() => {
        rs(1);
    }, 3000);
})

const a2 = () => new Promise((rs, rj) => {
    setTimeout(() => {
        rs(2);
    }, 2000);
})

Promise.all([a1(), a2()])
.then(data => {
    console.log(data);
})