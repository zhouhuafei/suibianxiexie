//对象的扩展方法
var extend=require('../function/extend');

//补零函数
function fillZero(json) {
    var opt=extend({
        default:{
            num:null
        },
        inherit:json
    });
    var num = opt.num;
    if (num < 10) {
        return '0' + num;
    } else {
        return '' + num;
    }
}
module.exports = fillZero;