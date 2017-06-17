var typeOf = require('./type-of');
var extend = require('./extend');

function strToHump(json) {
    var opts = extend({
        defaults: {
            str: '',
            rule: '-'
        },
        inherits: json
    });
    var str = opts.str;
    var rule = opts.rule;
    var type = typeOf(str);
    if (type == `string`) {
        let arr = str.split(rule);
        arr.forEach(function (v, i) {
            if (i != 0) {
                if(arr[i][0]){
                    arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1);
                }
            }
        });
        str = arr.join('');
    } else {
        console.log('参数错误,请输入字符串');
    }
    return str;
}
module.exports = strToHump;