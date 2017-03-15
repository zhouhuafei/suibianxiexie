function getOneDom(json){
    var opt=json||{};
    opt.dom=opt.dom||``;//这个仅支持传入选择器和原生dom节点
    var resultDom=null;
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