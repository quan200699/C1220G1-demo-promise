let x = 0;
//Cách tạo Promise
let promise = new Promise(((resolve, reject) => {
    if (x == 5) {
        return resolve(27);
    }
    return reject('Lỗi x khác 5');
}))
promise.then(value => console.log(value)).catch(error => console.log(error))

//Async Await
function demoAsyncFunction(number: number) {
    return new Promise((resolve, reject) => {
        if(number % 2 == 0){
            return resolve("Chia hết cho 2");
        }
        return reject('Không chia hết cho 2');
    });
}

async function run() {
    let x = await demoAsyncFunction(6);
    console.log(x);
}

run();

let p1 = new Promise(function(resolve, reject) {
    resolve(42);
});

let p2 = p1.then(function(value) {
    console.log(value);
}).catch(reason => console.log(reason)).then()

p2.then(function() {
    console.log("Finished");
});
