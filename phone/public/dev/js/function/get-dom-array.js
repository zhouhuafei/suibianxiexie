var extend = require('../function/extend');//对象的扩展方法

//获取原生的dom节点并转换成数组,传入的参数仅支持:1.原生的dom节点,2.原生的dom集合,3.css选择器
function getDomArray(json) {
    var options = extend({
        defaults: {
            element: null
        },
        inherits: json
    });
    var dom = [];
    if (options.element) {
        //如果是字符串
        if (Object.prototype.toString.call(options.element).slice(8, -1).toLowerCase() == 'string') {
            dom = [].slice.call(document.querySelectorAll(options.element));
        }
        //如果是dom节点(一个元素)    原生的
        if (options.element.nodeType == 1) {
            dom = [options.element];
        }
        /*
         * 如果是dom集合(一组元素)    HtmlCollection(通过getElementsBy系列获取到的)
         * 如果是dom集合(一组元素)    NodeList(通过querySelectorAll获取到的)
         * */
        if (Object.prototype.toString.call(options.element).slice(8, -1).toLowerCase() == 'htmlcollection' || Object.prototype.toString.call(options.element).slice(8, -1).toLowerCase() == 'nodelist') {
            dom = [].slice.call(options.element);
        }
    }
    return dom;
}
module.exports = getDomArray;