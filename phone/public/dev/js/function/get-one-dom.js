//获取一个原生的dom节点,当传入的是dom,或者是选择器的时候
function getOneDom(json) {
    var opt = json || {};
    opt.dom = opt.dom || `body`;//这个仅支持传入选择器和原生dom节点
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