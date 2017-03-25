//对象的扩展方法
var extend=require('../function/extend.js');

//获取一个原生的dom节点,当传入的是dom,或者是选择器的时候
function getOneDom(json) {
    var opt=extend({
        default:{
            dom:null
        },
        inherit:json
    });
    var resultDom = null;
    if (opt.dom) {
        //如果是字符串
        if (Object.prototype.toString.call(opt.dom).slice(8, -1).toLowerCase() == 'string') {
            resultDom = document.querySelector(opt.dom);
        }
        //如果是dom节点
        if (opt.dom.nodeType && opt.dom.nodeType == 1) {
            resultDom = opt.dom;
        }
    }
    return resultDom;
}
module.exports = getOneDom;