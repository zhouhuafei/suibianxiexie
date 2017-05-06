//获取指定父级
function getParent(json) {
    var opt = json || {};
    var object = opt.object;
    var selector = opt.selector;
    if (!object) {//第一参数不符合规范
        console.log('参数错误,第一参数需要一个元素节点对象');
        return null;
    }
    if (!selector) {//没有第二参数默认选取直接父级
        return object.parentNode;
    } else if (typeof selector == 'string') {
        object = object.parentNode;
        switch (selector.charAt(0)) {
            case '.'://通过class获取父级
                while (object) {
                    if (!object.classList) {
                        console.log('no find class');
                        return null;
                    }
                    if (object.classList.contains(selector.substring(1))) {
                        return object;
                    } else {
                        object = object.parentNode;
                    }
                }
                break;
            case '#'://通过id获取父级
                while (object) {
                    if (object == document) {
                        console.log('no find id');
                        return null;
                    }
                    if (object.id == selector.substring(1)) {
                        return object;
                    } else {
                        object = object.parentNode;
                    }
                }
                break;
            default://通过标签名获取父级
                while (object) {
                    if (object == document) {
                        console.log('no find tagName');
                        return null;
                    }
                    if (object.tagName.toLowerCase() == selector) {
                        return object;
                    } else {
                        object = object.parentNode;
                    }
                }
                break;
        }
    }
}
module.exports = getParent;