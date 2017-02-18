/**
 * Created by zhouhuafei on 17/1/1.
 */
//html转成DOM节点
function htmlToDom(json) {
    var opt = json || {};
    var html = opt.html;
    var div = document.createElement('div');
    div.innerHTML = html;
    return div.children[0];
}
module.exports = htmlToDom;