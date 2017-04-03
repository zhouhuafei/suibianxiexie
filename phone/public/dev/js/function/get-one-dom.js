//对象的扩展方法
var extend=require('../function/extend.js');

//获取一个原生的dom节点,当传入的是dom,或者是选择器的时候
function getOneDom(json) {
    var opt=extend({
        default:{
            element:null
        },
        inherit:json
    });
    var dom = null;
    if (opt.element) {
        //如果是字符串
        if (Object.prototype.toString.call(opt.element).slice(8, -1).toLowerCase() == 'string') {
            dom = document.querySelector(opt.element);
        }
        //如果是dom(元素)节点
        if (opt.element.nodeType && opt.element.nodeType == 1) {
            dom = opt.element;
        }
    }
    return dom;
}
module.exports = getOneDom;