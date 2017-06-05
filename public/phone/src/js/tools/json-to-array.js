//把json格式的对象转成数组
function jsonToArray(json) {
    var opts = json || {};
    var obj = opts.json || {};
    var arr = [];
    if (obj instanceof Array) {
        obj.forEach(function (v, i) {
            arr.push([i, v]);
        })
    } else {
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) {
                arr.push({key: attr, value: obj[attr]});
            }
        }
    }
    return arr;
}

module.exports = jsonToArray;