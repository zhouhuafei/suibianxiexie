//字符串限制长度
function strLimitLength(json) {
    var opts = json || {};
    var maxLength = opts.maxLength;
    var str = opts.str;
    if (!str) {
        return '';
    }
    if (str.length * 1 > maxLength) {
        str = str.substring(0, maxLength);
    }
    return str;
}

module.exports = strLimitLength;