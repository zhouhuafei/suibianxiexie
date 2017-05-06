//移除对象引用
function objectRemoveQuote(json) {
    var opts=json||{};
    var object=opts.object;
    var objectType = Object.prototype.toString.call(object).slice(8, -1).toLowerCase();

    if (objectType != 'object' && objectType != 'array') {
        return object;
    }
    var newObject = {};
    if (objectType == 'array') {
        newObject = [];
    }
    for (var attr in object) {
        if (object.hasOwnProperty(attr)) {
            newObject[attr] = objectRemoveQuote({object:object[attr]});
        }
    }
    return newObject;
}
module.exports = objectRemoveQuote;