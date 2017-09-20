// 字符串转驼峰
module.exports = function (json) {
    const opts = this.extend({
        defaults: {
            str: '',
            rule: '-',
        },
        inherits: json,
    });
    let str = opts.str;
    const rule = opts.rule;
    const type = this.typeOf(str);
    if (type === 'string') {
        const arr = str.split(rule);
        arr.forEach(function (v, i) {
            if (i !== 0) {
                if (arr[i][0]) {
                    arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1);
                }
            }
        });
        str = arr.join('');
    } else {
        console.log('参数错误,请输入字符串');
    }
    return str;
};
