//创建元素节点
function createElement(json) {
    var opts = json || {};
    opts.elementName = opts.elementName || 'div';//标签名称
    opts.style = opts.style || ``;//style样式
    opts.custom = opts.custom || {};//自定义属性
    opts.attribute = opts.attribute || {};//普通属性,checked,selected
    var elementNode = document.createElement(opts.elementName);//元素节点
    if(opts.style){
        elementNode.setAttribute('style',opts.style);
    }
    for (var attr1 in opts.custom) {
        if (opts.custom.hasOwnProperty(attr1)) {
            elementNode.setAttribute('data-'+attr1,opts.custom[attr1]);
        }
    }
    for (var attr0 in opts.attribute) {
        if (opts.attribute.hasOwnProperty(attr0)) {
            elementNode[attr0] = opts.attribute[attr0];
        }
    }
    return elementNode;
}
module.exports = createElement;