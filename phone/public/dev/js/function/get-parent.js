//获取指定父级
function getParent(json) {
    var opts = json || {};
    var element = opts.element;
    var wrap = opts.wrap;
    if (!element) {//第一参数不符合规范
        console.log('参数错误,第一参数需要一个元素节点对象');
        return null;
    }
    if (!wrap) {//没有第二参数默认选取直接父级
        return element.parentNode;
    } else if (typeof wrap == 'string') {
        element = element.parentNode;
        switch (wrap.charAt(0)) {
            case '.'://通过class获取父级
                while (element) {
                    if (!element.classList) {
                        console.log('no find class');
                        return null;
                    }
                    if (element.classList.contains(wrap.substring(1))) {
                        return element;
                    } else {
                        element = element.parentNode;
                    }
                }
                break;
            case '#'://通过id获取父级
                while (element) {
                    if (element == document) {
                        console.log('no find id');
                        return null;
                    }
                    if (element.id == wrap.substring(1)) {
                        return element;
                    } else {
                        element = element.parentNode;
                    }
                }
                break;
            default://通过标签名获取父级
                while (element) {
                    if (element == document) {
                        console.log('no find tagName');
                        return null;
                    }
                    if (element.tagName.toLowerCase() == wrap) {
                        return element;
                    } else {
                        element = element.parentNode;
                    }
                }
                break;
        }
    }
}

module.exports = getParent;