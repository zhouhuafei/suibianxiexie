function extend(json) {
    var opt = json || {};
    var defaults = opt.default||{};
    var inherit = opt.inherit||{};
    for (var attr in inherit) {
        if (inherit.hasOwnProperty(attr)) {
            defaults[attr] = JSON.parse(JSON.stringify(inherit[attr]));
        }
    }
    return defaults;
}
module.exports = extend;
