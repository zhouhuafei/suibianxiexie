//移除对象引用
function objRemoveQuote(obj) {
    var objType = Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
    if (objType != "object" || objType != "array") {
        return obj;
    }
    var newObj = {};
    if (objType == 'array') {
        newObj = [];
    }
    for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) {
            newObj[attr] = objRemoveQuote(obj[attr]);
        }
    }
    return newObj;
}
module.exports = objRemoveQuote;