//字符数量限制
function stringLimit(json) {
    var opts = json || {};
    var max = opts.max;
    var string = opts.string;
    if (!string) {
        return '';
    }
    var length = string.length;
    if (length > max) {
        string = string.substring(0, max);
    }
    return string;
}
module.exports = stringLimit;