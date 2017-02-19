function extend(json) {
    var opt = json || {};
    var defaults = opt.default;
    var inherit = opt.inherit;
    for (var attr in inherit) {
        if (inherit.hasOwnProperty(attr)) {
            defaults[attr] = JSON.parse(JSON.stringify(inherit[attr]));
        }
    }
    return defaults;
}
console.log(extend({default:{a:1,b:{s:2}},inherit:{a:2}}));
module.exports = extend;