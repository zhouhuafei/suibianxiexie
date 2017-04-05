function createElement(json) {
    var opt = json || {};
    opt.elementName = opt.elementName || 'div';//标签名称
    opt.attribute = opt.attribute || {};//普通属性,checked,selected
    opt.custom = opt.custom || {};//自定义属性
    opt.style = opt.style || ``;//style样式
    var elementNode = document.createElement(`${opt.elementName}`);//元素节点
    for (var attr0 in opt.attribute) {
        if (opt.attribute.hasOwnProperty(attr0)) {
            elementNode[attr0] = opt.attribute[attr0];
        }
    }
    for (var attr1 in opt.custom) {
        if (opt.custom.hasOwnProperty(attr1)) {
            elementNode.setAttribute('data-'+attr1,opt.custom[attr1]);
        }
    }
    if(opt.style){
        elementNode.setAttribute('style',opt.style);
    }
    return elementNode;
}
module.exports = createElement;