var extend = require('../function/extend.js');//对象的扩展
var getDomArray = require('../function/get-dom-array.js');//获取一组dom节点

//获取元素距离文档的left和top
function offset(json) {
    var opt = extend({
        default: {
            element: null
        },
        inherit: json
    });
    var top = 0;
    var left = 0;
    var obj = getDomArray({element:opt.element})[0];
    while (obj) {
        top += obj.offsetTop;
        left += obj.offsetLeft;
        obj = obj.offsetParent;
    }
    return {
        top: top,
        left: left
    };
}
module.exports = offset;