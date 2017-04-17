//数组去重
function arrayRemoveRepeat(json) {
    var opt = json || {};
    var array = opt.array || [];
    if (Object.prototype.toString.call(array).slice(8, -1).toLowerCase() != 'array') {
        return [];
    }
    var newArray = [];
    array.forEach(function (v) {
        if (newArray.indexOf(v) == -1) {
            newArray.push(v);
        }
    });
    return newArray;
}
module.exports = arrayRemoveRepeat;