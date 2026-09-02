const p = new Promise((resolve) => {
    console.log('Promise is created'); // executor function -> promise ke ander chalne wala function (synchronous hota h) 
    resolve('Promise is resolved'); // resolve and reject asynchronous hote h
})
