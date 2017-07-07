function Use() {
}
Use.prototype.setCookie = function (json) {
    var opts = json || {};
    var name = opts.name;
    var value = opts.value;
    var expires = opts.expires || '0';
    var myDate = new Date();
    var myTime = myDate.getTime();
    myDate.setTime(myTime + expires * 24 * 60 * 60 * 1000);
    document.cookie = name + '=' + value + '; expires=' + myDate;
};
Use.prototype.getCookie = function (json) {
    var opts = json || {};
    var name = opts.name;
    var cookie = document.cookie;
    var arr = cookie.split('; ');
    var value = '';
    arr.forEach(function (v) {
        var arr2 = v.split('=');
        if (arr2[0] === name) {
            value = arr2[1];
            return false;
        }
    });
    return value;
};
Use.prototype.removeCookie = function (json) {
    var opts = json || {};
    var name = opts.name;
    this.setCookie(name, '', -1);
};
Use.prototype.createElement = function (json) {
    var opts = json || {};
    opts.elementName = opts.elementName || 'div';//标签名称
    opts.style = opts.style || ``;//style样式
    opts.custom = opts.custom || {};//自定义属性
    opts.attribute = opts.attribute || {};//普通属性,checked,selected
    var elementNode = document.createElement(opts.elementName);//元素节点
    if (opts.style) {
        elementNode.setAttribute('style', opts.style);
    }
    for (var attr1 in opts.custom) {
        if (opts.custom.hasOwnProperty(attr1)) {
            elementNode.setAttribute('data-' + attr1, opts.custom[attr1]);
        }
    }
    for (var attr0 in opts.attribute) {
        if (opts.attribute.hasOwnProperty(attr0)) {
            elementNode[attr0] = opts.attribute[attr0];
        }
    }
    return elementNode;
};
Use.prototype.addMinusInput = function (json) {//购物加减商品系列
    if (!json) {
        console.log('no find parameter');
        return false;
    }
    var noActiveClass = json.noActiveClass || 'on';//不能点的时候的class
    var minNum = json.minNum == undefined ? 1 : json.minNum;//最小数量
    var add = json.add;//加的按钮
    var addCallback = json.addCallback;//加的回调
    var minus = json.minus;//减少的按钮
    var minusCallback = json.minusCallback;//减少的回调
    var overMinCallback = json.overMinCallback || function () {
        };//减少到最小值之后继续减少
    var input = json.input;//输入框的按钮
    var blurCallback = json.blurCallback;//失去焦点的回调
    var inventoryNum = parseInt(json.inventoryNum);//商品库存
    var space = function () {
        if (input["value"].trim() == '') {
            input["value"] = minNum;
        }
    };
    //增加
    add.onclick = function () {
        space();
        var num = parseInt(input.value);
        num++;
        input["value"] = num;
        if (num >= inventoryNum) {
            if (inventoryNum == 0) {
                input["value"] = minNum;
            } else {
                input["value"] = inventoryNum;
            }
            add.classList.add(noActiveClass);
        }
        minus.classList.remove(noActiveClass);
        addCallback && addCallback();
    };
    //减少
    minus.onclick = function () {
        space();
        var num = parseInt(input.value);
        num--;
        input["value"] = num;
        if (num < minNum) {
            input["value"] = minNum;
            minus.classList.add(noActiveClass);
            overMinCallback();
        }
        add.classList.remove(noActiveClass);
        minusCallback && minusCallback();
    };
    //获取焦点
    input["onfocus"] = function () {
        input.select();
    };
    //失去焦点
    input["onblur"] = function () {
        space();
        var num = parseInt(input.value);
        if (isNaN(num)) {
            num = minNum;
        }
        minus.classList.remove(noActiveClass);
        add.classList.remove(noActiveClass);
        if (num >= inventoryNum) {
            input["value"] = inventoryNum;
            add.classList.add(noActiveClass);
        }
        if (num <= minNum) {
            input["value"] = minNum;
            minus.classList.add(noActiveClass);
        }
        blurCallback && blurCallback();
    };
};
Use.prototype.getDomArray = function (json) {
    var opts = json || {};
    var dom = [];
    var element = opts.element ? opts.element : false;
    if (element) {
        //如果是字符串
        if (Object.prototype.toString.call(element).slice(8, -1).toLowerCase() == 'string') {
            dom = [].slice.call(document.querySelectorAll(element));
        }
        //如果是dom节点(一个元素)    原生的
        if (element.nodeType == 1) {
            dom = [element];
        }
        /*
         * 如果是dom集合(一组元素)    HtmlCollection(通过getElementsBy系列获取到的)
         * 如果是dom集合(一组元素)    NodeList(通过querySelectorAll获取到的)
         * */
        if (Object.prototype.toString.call(element).slice(8, -1).toLowerCase() == 'htmlcollection' || Object.prototype.toString.call(element).slice(8, -1).toLowerCase() == 'nodelist') {
            dom = [].slice.call(element);
        }
    }
    return dom;
};
Use.prototype.getParent = function (json) {
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
};
Use.prototype.htmlToDom = function htmlToDom(json) {
    var opts = json || {};
    var html = opts.html;
    var div = document.createElement('div');
    div.innerHTML = html;
    return div.children[0];
};
Use.prototype.imgUploadBase64 = function () {
    function Fn(json) {
        this.opts = json || {};
        //如果没有选择文件的input,则不继续往下执行
        if (!this.opts.input) {
            console.log('no find input');
            return;
        }
        //一次上传限制几张图片
        this.opts.limitNum = this.opts.limitNum || '5';
        //选择图片的回调
        this.opts.changeCallback = this.opts.changeCallback || function () {
                console.log('no find changeCallback');
            };
        //把图片读取成base64编码的回调
        this.opts.base64Callback = this.opts.base64Callback || function () {
                console.log('no find base64Callback');
            };
        //初始化
        this.init();
    }

    Fn.prototype.init = function () {
        //渲染结构
        this.render();
        //渲染功能
        this.power();
    };
    Fn.prototype.render = function () {

    };
    Fn.prototype.power = function () {
        //事件相关
        this.events();
    };
    Fn.prototype.events = function () {
        this.eventsInputChange();
    };
    Fn.prototype.eventsInputChange = function () {
        var self = this;
        var limitNum = this.opts.limitNum;
        this.opts.input.addEventListener('change', function () {
            var imagesNum = 0;
            //图片的相关信息
            self.imgData = [];
            var files = this.files;
            var len = files.length;
            for (var i = 0; i < len; i++) {
                var f = files[i];
                var isImages = /image/ig.test(f.type);
                //不是图片
                if (!isImages) {
                    continue;
                }
                //是图片
                if (isImages) {
                    if (imagesNum < limitNum) {//小于限制几张图片的数量
                        self.imgData.push(f);
                        imagesNum++;
                    } else {//大于限制几张图片的数量

                    }
                }
            }
            self.opts.changeCallback({imgData: self.imgData});
            //把图片读成base64编码
            self.fileReadAsDataURL();
        });
    };
    Fn.prototype.fileReadAsDataURL = function () {
        var self = this;
        this.imgData.forEach(function (v, i) {
            var fileRender = new FileReader();
            fileRender.readAsDataURL(v);
            fileRender.addEventListener('load', function () {
                self.opts.base64Callback({base64: this.result, index: i});
            });
        });
    };
    return Fn;
}();
Use.prototype.fn = function () {

};
Use.prototype.fn = function () {

};
Use.prototype.fn = function () {

};
Use.prototype.fn = function () {

};
Use.prototype.fn = function () {

};
Use.prototype.fn = function () {

};
module.exports = new Use();