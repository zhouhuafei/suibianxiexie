//对象的扩展方法
var extend=require('../function/extend');

//补零函数
function fillZero(json) {
    var options=extend({
        defaults:{
            number:0
        },
        inherits:json
    });
    var number = options.number;
    if (number < 10) {
        return '0' + number;
    } else {
        return '' + number;
    }
}
module.exports = fillZero;