// 数组去重
module.exports = function (array) {
    const self = this;
    array = self.typeOf(array) === 'array' ? array : [];
    const newArray = [];
    array.forEach(function (v) {
        if (newArray.indexOf(v) === -1) {
            newArray.push(v);
        }
    });
    return newArray;
};
