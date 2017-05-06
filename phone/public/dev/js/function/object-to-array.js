//把json格式的对象转成数组
function objectToArray(json) {
    var opts = json || {};
    var object = opts.object;
    var arr = [];
    if (object instanceof Array) {
        object.forEach(function (v, i) {
            arr.push([i, v]);
        })
    } else {
        for (var attr in object) {
            if (object.hasOwnProperty(attr)) {
                arr.push({key:attr, value:object[attr]});
            }
        }
    }
    return arr;
}
module.exports = objectToArray;