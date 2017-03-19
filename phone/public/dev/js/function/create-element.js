/**
 * Created by zhouhuafei on 17/3/19.
 */
function createElement(json) {
    var opt = json || {};
    opt.tagName = opt.tagName || 'div';//普通属性
    opt.attribute = opt.attribute || {};//自定义属性,checked,selected
    opt.custom = opt.custom || {};
    var tag = document.createElement(`${opt.tagName}`);
    for (var attr0 in opt.attribute) {
        if (opt.attribute.hasOwnProperty(attr0)) {
            tag[attr0] = opt.attribute[attr0];
        }
    }
    for (var attr1 in opt.custom) {
        if (opt.custom.hasOwnProperty(attr1)) {
            tag.setAttribute('data-'+attr1,opt.custom[attr1]);
        }
    }
    return tag;
}
module.exports = createElement;