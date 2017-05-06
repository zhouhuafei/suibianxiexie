var extend = require('../function/extend');//对象的扩展
var getDomArray = require('../function/get-dom-array');//获取一组dom节点

//获取元素距离文档的left和top
function offset(json) {
    var options = extend({
        defaults: {
            element: null
        },
        inherits: json
    });
    var top = 0;
    var left = 0;
    var object = getDomArray({element:options.element})[0];
    while (object) {
        top += object.offsetTop;
        left += object.offsetLeft;
        object = object.offsetParent;
    }
    return {
        top: top,
        left: left
    };
}
module.exports = offset;