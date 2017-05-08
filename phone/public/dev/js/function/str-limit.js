//字符数量限制
function strLimit(json) {
    var opts = json || {};
    var max = opts.max;
    var str = opts.str;
    if (!str) {
        return '';
    }
    var length = str.length;
    if (length > max) {
        str = str.substring(0, max);
    }
    return str;
}

module.exports = strLimit;