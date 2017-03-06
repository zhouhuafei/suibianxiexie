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
/*
    arr.indexOf这个方法原生的提供的有,你为毛还要重新写一个？智障么？
*/
module.exports = arrToIndex;
