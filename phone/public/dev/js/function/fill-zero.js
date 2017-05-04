//对象的扩展方法
var extend=require('../function/extend');

//补零函数
function fillZero(json) {
    var opt=extend({
        defaults:{
            num:null
        },
        inherits:json
    });
    var num = opt.num;
    if (num < 10) {
        return '0' + num;
    } else {
        return '' + num;
    }
}
module.exports = fillZero;