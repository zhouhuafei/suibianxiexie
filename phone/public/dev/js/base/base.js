//一些小方法
var base = {
    offset: require('../function/offset'),//获取元素距离文档的left和top
    constructorInherit: require('../function/constructor-inherit'),//构造函数继承
    scrollTo: require('../function/scroll-to'),//滚动到
    whetherDisableScroll: require('../function/whether-disable-scroll'),//是否禁止浏览器滚动
    WhenScrollBottom: require('../function/when-scroll-bottom'),//当滚动到底部
    objToArray: require('../function/obj-to-array'),//把json格式的对象转成数组
    getDomArray: require('../function/get-dom-array'),//获取一组dom节点
    createElement: require('../function/create-element'),//创建元素节点
    extend: require('../function/extend')//对象扩展
};
module.exports = base;