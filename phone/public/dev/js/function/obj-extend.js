function extend(json) {
    var opt = json || {};
    var defaults = opt.default||{};
    var inherits = opt.inherits||{};
    for (var attr in inherits) {
        if (inherits.hasOwnProperty(attr)) {
            defaults[attr] = JSON.parse(JSON.stringify(inherits[attr]));
        }
    }
    return defaults;
}
module.exports = extend;
//有BUG,例如extend({default:{a:0,b:{b1:1}},inherits:{a:0,b:{b2:2}}});
//得到的结果{a:0,b:{b2:2}},b1的数据就没了,正确的结果应该保留{a:0,b:{b1:1,b2:2}}
