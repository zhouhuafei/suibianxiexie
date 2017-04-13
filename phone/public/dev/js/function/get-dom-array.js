//对象的扩展方法
var extend = require('../function/extend.js');

//获取原生的dom节点并转换成数组,传入的参数仅支持:1.原生的dom节点,2.原生的dom集合,3.css选择器
function getDomArray(json) {
    var opt = extend({
        default: {
            element: null
        },
        inherit: json
    });
    var dom = [];
    if (opt.element) {
        //如果是字符串
        if (Object.prototype.toString.call(opt.element).slice(8, -1).toLowerCase() == 'string') {
            dom = [].slice.call(document.querySelectorAll(opt.element));
        }
        //如果是dom节点(一个元素)    原生的
        if (opt.element.nodeType == 1) {
            dom = [opt.element];
        }
        /*
         * 如果是dom集合(一组元素)    HtmlCollection(通过getElementsBy系列获取到的)
         * 如果是dom集合(一组元素)    NodeList(通过querySelectorAll获取到的)
         * */
        if (Object.prototype.toString.call(opt.element).slice(8, -1).toLowerCase() == 'htmlcollection' || Object.prototype.toString.call(opt.element).slice(8, -1).toLowerCase() == 'nodelist') {
            dom = [].slice.call(opt.element);
        }
    }
    return dom;
}
module.exports = getDomArray;