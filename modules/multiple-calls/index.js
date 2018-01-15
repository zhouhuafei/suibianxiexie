/**
 * @description 至少调用num次才会触发函数的执行
 * @param {Number} num - 数字
 * @param {Function} fn - 函数
 * */
function multipleCalls(num, fn) {
    const result = {
        initNum: num,
    };
    const error = null;
    if (num <= 0) {
        fn(error, result);
    }
    return function () {
        num--;
        if (num <= 0) {
            fn(error, result);
        }
    };
}

const mulCalls = multipleCalls(3, function (error, result) {
    if (!error) {
        console.log(`调用${result.initNum}次才会触发我哟`);
    }
});
mulCalls();
mulCalls();
mulCalls();

module.exports = multipleCalls;
