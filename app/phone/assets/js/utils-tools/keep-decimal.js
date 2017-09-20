// 保留几位小数(默认两位)
module.exports = function (value = 0, place = 2) {
    const baseNum = 10 ** place;
    return (Math.floor(parseFloat(value) * baseNum) / baseNum).toFixed(2);
};
