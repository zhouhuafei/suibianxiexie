//获取指定父级
function getParent(json) {
    var opt = json || {};
    var obj = opt.obj;
    var selector = opt.selector;
    if (!obj) {//第一参数不符合规范
        console.log('参数错误,第一参数需要一个元素节点对象');
        return null;
    }
    if (!selector) {//没有第二参数默认选取直接父级
        return obj.parentNode;
    } else if (typeof selector == 'string') {
        obj = obj.parentNode;
        switch (selector.charAt(0)) {
            case '.'://通过class获取父级
                while (obj) {
                    if (!obj.classList) {
                        console.log('no find class');
                        return null;
                    }
                    if (obj.classList.contains(selector.substring(1))) {
                        return obj;
                    } else {
                        obj = obj.parentNode;
                    }
                }
                break;
            case '#'://通过id获取父级
                while (obj) {
                    if (obj == document) {
                        console.log('no find id');
                        return null;
                    }
                    if (obj.id == selector.substring(1)) {
                        return obj;
                    } else {
                        obj = obj.parentNode;
                    }
                }
                break;
            default://通过标签名获取父级
                while (obj) {
                    if (obj == document) {
                        console.log('no find tagName');
                        return null;
                    }
                    if (obj.tagName.toLowerCase() == selector) {
                        return obj;
                    } else {
                        obj = obj.parentNode;
                    }
                }
                break;
        }
    }
}
module.exports = getParent;