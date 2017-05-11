var extend = require('../tools/extend');//对象的扩展方法
var getDomArray = require('../function/get-dom-array');//获取原生的dom节点并转换成数组

//获取元素距离文档的left和top
function offset(json) {
    var opts = extend({
        defaults: {
            element: null
        },
        inherits: json
    });
    var top = 0;
    var left = 0;
    var element = getDomArray({element: opts.element})[0];
    while (element) {
        top += element.offsetTop;
        left += element.offsetLeft;
        element = element.offsetParent;
    }
    return {
        top: top,
        left: left
    };
}

module.exports = offset;