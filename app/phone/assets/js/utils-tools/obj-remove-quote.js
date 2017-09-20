// 对象移除引用
function objRemoveQuote(json) {
    const obj = json || {};// 这里一定不能给默认值
    const objType = Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
    if (objType !== 'object' && objType !== 'array') {
        return obj;
    }
    let newObj = {};
    if (objType === 'array') {
        newObj = [];
    }
    Object.keys(obj).forEach(function (attr) {
        newObj[attr] = objRemoveQuote(obj[attr]);
    });
    return newObj;
}

module.exports = objRemoveQuote;
