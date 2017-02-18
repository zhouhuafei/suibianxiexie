/**
 * Created by zhouhuafei on 17/1/1.
 */
//对象转数组
function jsonToArray(json) {
    var opt = json || {};
    var obj = opt.obj;
    var arr = [];
    if (obj instanceof Array) {
        obj.forEach(function (v, i) {
            arr.push([i, v]);
        })
    } else {
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) {
                arr.push([attr, obj[attr]]);
            }
        }
    }
    return arr;
}
module.exports = jsonToArray;
