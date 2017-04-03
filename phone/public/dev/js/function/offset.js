var extend = require('../function/extend.js');
var getOneDom = require('../function/get-one-dom.js');

function offset(json) {
    var opt = extend({
        default: {
            element: null
        },
        inherit: json
    });
    var top = 0;
    var left = 0;
    var obj = getOneDom({element:opt.element});
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