var extend = require('../function/extend.js');
var getDomArray = require('../function/get-dom-array.js');

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