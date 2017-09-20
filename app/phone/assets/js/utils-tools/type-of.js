/**
 * @description 对象的扩展
 * @param {*} whatever - 任何类型的数据都可以
 * */
module.exports = function (whatever) {
    return Object.prototype.toString.call(whatever).slice(8, -1).toLowerCase();
};
