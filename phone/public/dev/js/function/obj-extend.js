function extend(json) {
    var opt = json || {};
    var defult = opt.default;
    var inherit = opt.inherit;
    for (var attr in defult) {
        if (defult.hasOwnProperty(attr)) {
            defult[attr] = JSON.parse(JSON.stringify(inherit[attr]));
        }
    }
    return defult;
}
module.exports = extend;