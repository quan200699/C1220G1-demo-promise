var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let x = 0;
let promise = new Promise(((resolve, reject) => {
    if (x == 5) {
        return resolve(27);
    }
    return reject('Lỗi x khác 5');
}));
promise.then(value => console.log(value)).catch(error => console.log(error));
function demoAsyncFunction(number) {
    return new Promise((resolve, reject) => {
        if (number % 2 == 0) {
            return resolve("Chia hết cho 2");
        }
        return reject('Không chia hết cho 2');
    });
}
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        let x = yield demoAsyncFunction(6);
        console.log(x);
    });
}
run();
//# sourceMappingURL=main.js.map