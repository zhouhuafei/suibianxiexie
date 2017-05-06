//字符数量限制
function stringLimit(json) {
    var options = json || {};
    var max = options.max;
    var string = options.string;
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