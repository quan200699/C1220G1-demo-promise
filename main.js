var x = 5;
var promise = new Promise((function (resolve, reject) {
    if (x == 5) {
        return resolve(27);
    }
    return reject('Lỗi x khác 5');
}));
promise.then(function (value) { return console.log(value); })["catch"](function (error) { return console.log(error); });
