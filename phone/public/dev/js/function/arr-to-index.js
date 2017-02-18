/**
 * Created by zhouhuafei on 17/1/10.
 */
function arrToIndex(json) {
    var opt = json || {};
    var arr = opt.arr || [];
    var info = opt.info;
    var index = null;
    arr.forEach(function (v, i) {
        if (v == info) {
            index = i;
            return false;
        }
    });
    return index;
}
module.exports = arrToIndex;