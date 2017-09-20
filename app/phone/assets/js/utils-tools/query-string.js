function stringify(json) {
    const obj = json || {};
    const result = [];
    Object.keys(obj).forEach(function (key) {
        result.push(`${key}=${obj[key]}`);
    });
    return result.join('&');
}

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
