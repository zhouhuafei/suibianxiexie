/**
 * Created by zhouhuafei on 17/1/1.
 */
//补零函数
function fillZero(json) {
    var opt = json || {};
    var num = opt.num;
    if (num < 10) {
        return '0' + num;
    } else {
        return '' + num;
    }
}
module.exports = fillZero;