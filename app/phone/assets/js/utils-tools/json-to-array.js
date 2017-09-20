// json转数组
module.exports = function (json = {}) {
    const arr = [];
    if (json instanceof Array) {
        json.forEach(function (v, i) {
            arr.push({key: i, value: v});
        });
    } else {
        Object.keys(json).forEach(function (attr) {
            arr.push({key: attr, value: json[attr]});
        });
    }
    return arr;
};
