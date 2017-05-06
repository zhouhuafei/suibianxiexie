//html转成DOM节点
function htmlToDom(json) {
    var opts = json || {};
    var html = opts.html;
    var div = document.createElement('div');
    div.innerHTML = html;
    return div.children[0];
}
module.exports = htmlToDom;