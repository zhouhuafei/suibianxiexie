// 获取随机数
module.exports = function (min, max) {
    const self = this;
    min = self.typeOf(min) === 'number' ? min : 0;
    max = self.typeOf(max) === 'number' ? max : 1;
    return Math.round(Math.random() * (max - min) + min);
};
