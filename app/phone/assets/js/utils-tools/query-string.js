// {a:1,b:2} 序列成 'a=1&b=2'
function stringify(json) {
    const obj = json || {};
    const result = [];
    Object.keys(obj).forEach(function (key) {
        result.push(`${key}=${obj[key]}`);
    });
    return result.join('&');
}

// 'a=1&b=2' 解析成 {a:1,b:2}
function parse(str) {
    const result = {};
    if (str) {
        str.split('&').forEach(function (v) {
            const arr = v.split('=');
            result[arr[0]] = arr[1];
        });
    }
    return result;
}

module.exports.stringify = stringify;
module.exports.parse = parse;
