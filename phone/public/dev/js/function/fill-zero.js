//对象的扩展方法
var extend=require('../function/extend');

//补零函数
function fillZero(json) {
    var opts=extend({
        defaults:{
            num:0
        },
        inherits:json
    });
    var num = opts.num;
    if (num < 10) {
        return '0' + num;
    } else {
        return '' + num;
    }
}
module.exports = fillZero;