//补零函数
function fillZero(json) {
    var opts = json || {};
    var num = opts.num || '0';
    if (num < 10) {
        return '0' + num;
    } else {
        return '' + num;
    }
}

module.exports = fillZero;