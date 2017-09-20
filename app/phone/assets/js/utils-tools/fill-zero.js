// 补零函数
module.exports = function (num = 0) {
    if (num < 10) {
        return `0${num}`;
    }
    return `${num}`;
};
