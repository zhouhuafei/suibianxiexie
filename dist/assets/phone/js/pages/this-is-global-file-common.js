webpackJsonp([2],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 工具方法集合
function Tools() {}

/**
 * @description 判断类型
 * @param {*} whatever - 任何类型的数据都可以
 * */
Tools.prototype.typeOf = function (whatever) {
    return Object.prototype.toString.call(whatever).slice(8, -1).toLowerCase();
};
// 对象扩展
Tools.prototype.extend = function (json) {
    var self = this;
    var opts = json || {};
    opts.defaults = opts.defaults || {}; // 默认对象
    opts.inherits = opts.inherits || {}; // 继承对像
    opts.isDeep = opts.isDeep === false ? opts.isDeep : true; // 是否进行深拷贝(默认进行深拷贝)
    var defaultsType = Object.prototype.toString.call(opts.defaults).slice(8, -1).toLowerCase();
    var inheritsType = Object.prototype.toString.call(opts.inherits).slice(8, -1).toLowerCase();
    if (defaultsType === inheritsType && opts.isDeep) {
        if (defaultsType === 'object' || defaultsType === 'array') {
            // 当为对象或者为数组
            Object.keys(opts.inherits).forEach(function (attr) {
                var attrDefaultsType = Object.prototype.toString.call(opts.defaults[attr]).slice(8, -1).toLowerCase();
                var attrInheritsType = Object.prototype.toString.call(opts.inherits[attr]).slice(8, -1).toLowerCase();
                if (attrDefaultsType === attrInheritsType && opts.isDeep) {
                    // 类型相同
                    if (attrDefaultsType === 'object' || attrDefaultsType === 'array') {
                        // 当为对象或者为数组
                        self.extend({ defaults: opts.defaults[attr], inherits: opts.inherits[attr] });
                    } else {
                        opts.defaults[attr] = opts.inherits[attr];
                    }
                } else {
                    // 类型不同,直接后面的覆盖前面的
                    opts.defaults[attr] = opts.inherits[attr];
                }
            });
        } else {
            opts.defaults = opts.inherits;
        }
    } else {
        opts.defaults = opts.inherits;
    }
    return opts.defaults;
};
/**
 * @description 对象移除引用
 * @param {Object} obj - 参数需要是一个对象或者是一个数组,这里一定不能给默认值,否则undefined就没了
 * */
Tools.prototype.objRemoveQuote = function (obj) {
    var self = this;
    var objType = Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
    if (objType !== 'object' && objType !== 'array') {
        return obj;
    }
    var newObj = {};
    if (objType === 'array') {
        newObj = [];
    }
    Object.keys(obj).forEach(function (attr) {
        newObj[attr] = self.objRemoveQuote(obj[attr]);
    });
    return newObj;
};
/**
 * @description 面向对象继承
 * @param {Function} Super - 继承自某个超类型(这个必须传的是一个构造函数)
 * @param {Object} parameter - 子类型的参数(这个必须传的是一个对象)
 * */
Tools.prototype.constructorInherit = function (Super) {
    var parameter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var self = this;

    // 如果超类型不存在
    if (Object.prototype.toString.call(Super).toLowerCase().slice(8, -1) !== 'function') {
        console.log('no find Super or Super error');
        return false;
    }

    // 子类型
    function Sub(json) {
        // 子类型继承超类型的属性
        Super.call(this, self.extend({
            /*
             * 注意:
             * defaults要防止对象的引用(如果不防止的话,会出现BUG)
             * 例如 wrap的默认值是'.g-wrap'
             * 第一次   var obj1=new Sub({wrap:'body'});   wrap的值是'body'
             * 第二次   var obj2=new Sub();    这里按理说wrap的值应该是默认值'.g-wrap'
             * 但是由于对象引用的原因,这里的值会变成'body'
             * 因此这里要处理掉对象的引用,所以我使用了JSON的方法进行了阻止
             * 但是JSON.stringify方法居然会过滤掉对象内部的所有函数,真是日了狗了
             * 所以我就封装了一个移除对象引用的函数
             * */
            defaults: self.objRemoveQuote(parameter),
            inherits: json
        }));
    }

    // 子类型继承超类型的方法
    Object.keys(Super.prototype).forEach(function (attr) {
        Sub.prototype[attr] = Super.prototype[attr];
    });

    return Sub;
};
// 数组去重
Tools.prototype.arrayRemoveRepeat = function (array) {
    var self = this;
    array = self.typeOf(array) === 'array' ? array : [];
    var newArray = [];
    array.forEach(function (v) {
        if (newArray.indexOf(v) === -1) {
            newArray.push(v);
        }
    });
    return newArray;
};
/**
 * @description 秒转时间
 * @param {Number} seconds - 秒数
 * */
Tools.prototype.secondsToTime = function () {
    var seconds = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    // 天
    var nowDay = Math.floor(seconds / 3600 / 24);
    // 时
    var nowHours = Math.floor(seconds / 3600 % 24);
    // 分
    var nowMinutes = Math.floor(seconds % 3600 / 60);
    // 秒
    var nowSeconds = Math.floor(seconds % 60);
    return { day: nowDay, hours: nowHours, minutes: nowMinutes, seconds: nowSeconds };
};
// 倒计时
Tools.prototype.timeCountDown = function (json) {
    var self = this;
    var opts = self.extend({
        defaults: {
            seconds: 0,
            isToTime: true, // 是否转换成时间
            callback: {
                run: function run() {},
                over: function over() {}
            }
        },
        inherits: json
    });
    var seconds = opts.seconds; // 秒数
    var run = opts.callback.run; // 运行的回调
    var over = opts.callback.over; // 结束的回调
    // 时间大于等于0秒
    if (seconds >= 0) {
        if (opts.isToTime) {
            run(self.secondsToTime(seconds)); // 运行时的回调
        } else {
            run({ day: 0, hours: 0, minutes: 0, seconds: seconds }); // 运行时的回调
        }
        // 倒计时走你
        var timer = setInterval(function () {
            seconds--;
            if (seconds >= 0) {
                if (opts.isToTime) {
                    run(self.secondsToTime(seconds)); // 运行时的回调
                } else {
                    run({ day: 0, hours: 0, minutes: 0, seconds: seconds }); // 运行时的回调
                }
            } else {
                over(); // 结束时的回调
                clearInterval(timer);
            }
        }, 1000);
    }
    // 时间小于0秒
    if (seconds < 0) {
        console.log('倒计时的秒数不能小于0');
    }
};
/**
 * @description 字符串限制最大长度
 * @param {String} str - 字符串
 * @param {Number} maxLength - 限制最大长度
 * */
Tools.prototype.strLimitLength = function (str, maxLength) {
    if (!str) {
        return '';
    }
    if (Number(str.length) > maxLength) {
        str = str.substring(0, maxLength);
    }
    return str;
};
/**
 * @description json转数组
 * @param {Object} json - json格式的对象{}
 * */
Tools.prototype.jsonToArray = function () {
    var json = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var arr = [];
    if (json instanceof Array) {
        json.forEach(function (v, i) {
            arr.push({ key: i, value: v });
        });
    } else {
        Object.keys(json).forEach(function (attr) {
            arr.push({ key: attr, value: json[attr] });
        });
    }
    return arr;
};
/**
 * @description 补零函数
 * @param {Number} value - 数字
 * @param {Number} place - 这个数字是个几位数的数字,如果是个3位数的数字,不足三位,则补0
 * */
Tools.prototype.fillZero = function () {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var place = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

    var valueLen = value.toString().length;
    var zeroLen = place - valueLen;
    var arr = [];
    for (var i = 0; i < zeroLen; i++) {
        arr.push('0');
    }
    var zero = arr.join('');
    if (value < Math.pow(10, place)) {
        return '' + zero + value;
    }
    return '' + value;
};
// px转rem
Tools.prototype.px2rem = function () {
    var px = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 320;

    return px / base * 10 + 'rem';
};
/**
 * @description 字符串转驼峰
 * @param {String} str - 字符串
 * @param {String} rule - 规则
 * */
Tools.prototype.strToHump = function (str) {
    var rule = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '-';

    var self = this;
    var type = self.typeOf(str);
    if (type === 'string') {
        var arr = str.split(rule);
        arr.forEach(function (v, i) {
            if (i !== 0) {
                if (arr[i][0]) {
                    arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1);
                }
            }
        });
        str = arr.join('');
    } else {
        console.log('参数错误,请输入字符串');
    }
    return str;
};
// 获取随机数
Tools.prototype.getRandom = function (min, max) {
    var self = this;
    min = self.typeOf(min) === 'number' ? min : 0;
    max = self.typeOf(max) === 'number' ? max : 1;
    return Math.round(Math.random() * (max - min) + min);
};
// 是不是空字符串
Tools.prototype.isEmpty = function (value) {
    return value.toString().trim() === '';
};
// 是不是数字0
Tools.prototype.isZero = function (value) {
    return Number(value) === 0;
};
// 是不是正整数
Tools.prototype.isPositiveInteger = function (value) {
    var reg = /^[1-9]\d*$/;
    return reg.test(value);
};
// 是不是保留了place位小数(默认两位)
Tools.prototype.isKeepDecimal = function (value) {
    var place = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

    var reg = new RegExp('^\\d+\\.\\d{' + place + '}$');
    return reg.test(value);
};
// 是不是手机号
Tools.prototype.isPhoneNum = function (value) {
    var reg = /^1[3458][0-9]\d{4,8}$/;
    return reg.test(value);
};
// 是不是邮箱
Tools.prototype.isEmail = function (value) {
    var reg = /^([0-9A-Za-z\-_.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g;
    return reg.test(value);
};
// {a:1,b:2} 序列成 'a=1&b=2'
Tools.prototype.queryStringify = function () {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var self = this;
    var result = [];
    Object.keys(obj).forEach(function (key) {
        var vType = self.typeOf(obj[key]);
        if (vType === 'object' || vType === 'array') {
            result.push(key + '=' + JSON.stringify(obj[key]));
        } else {
            result.push(key + '=' + obj[key]);
        }
    });
    return result.join('&');
};
// 'a=1&b=2' 解析成 {a:1,b:2}
Tools.prototype.queryParse = function (str) {
    var result = {};
    if (str) {
        str.split('&').forEach(function (v) {
            var arr = v.split('=');
            try {
                result[arr[0]] = JSON.parse(arr[1]);
            } catch (e) {
                result[arr[0]] = arr[1];
            }
        });
    }
    return result;
};
/**
 * @description 保留几位小数
 * @param {Number} value - 数字
 * @param {Number} place - 保留几位小数(默认两位)
 * @param {Boolean} isFormat - 是否格式化(默认格式化)
 * */
Tools.prototype.keepDecimal = function () {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var place = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
    var isFormat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    var format = /(?!\b)(?=(\d{3})+$)/;
    var result = value;
    var baseNum = Math.pow(10, place);
    if (Number(place) !== 0) {
        result = (Math.floor(parseFloat(value) * baseNum) / baseNum).toFixed(2);
    }
    if (isFormat) {
        var arr = result.split('.');
        arr[0] = arr[0].replace(format, ',');
        result = arr.join('.');
    }
    return result;
};
/**
 * @description 日期格式化
 * @param {Number} date - 毫秒数
 * @param {String} result - 'year/month/day hours:minutes:seconds' - 格式
 * */
Tools.prototype.dateFormat = function () {
    var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var result = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'year/month/day hours:minutes:seconds';

    var self = this;
    var myDate = new Date();
    if ({}.toString.call(date).slice(8, -1).toLowerCase() === 'date') {
        date = date.getTime();
    }
    myDate.setTime(date);
    var obj = {
        year: myDate.getFullYear(), // 年
        month: self.fillZero(myDate.getMonth() + 1, 2), // 月
        day: self.fillZero(myDate.getDate(), 2), // 日
        hours: self.fillZero(myDate.getHours(), 2), // 时
        minutes: self.fillZero(myDate.getMinutes(), 2), // 分
        seconds: self.fillZero(myDate.getSeconds(), 2), // 秒
        milliseconds: myDate.getMilliseconds(), // 毫秒
        week1: '\u661F\u671F' + ['日', '一', '二', '三', '四', '五', '六'][myDate.getDay()], // 星期几
        week2: '\u5468' + ['日', '一', '二', '三', '四', '五', '六'][myDate.getDay()], // 周几
        week3: '\u793C\u62DC' + ['日', '一', '二', '三', '四', '五', '六'][myDate.getDay()] // 礼拜几
    };
    Object.keys(obj).forEach(function (key) {
        result = result.replace(new RegExp(key), obj[key]);
    });
    obj.result = result;
    return obj;
};
// 输出
module.exports = new Tools();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var tools = __webpack_require__(0);

// 应用方法集合
function Applications() {}

// 设置cookie
Applications.prototype.setCookie = function (name, value, expires, domain, path, secure) {
    var myDate = new Date();
    var myTime = myDate.getTime();
    myDate.setTime(myTime + expires * 24 * 60 * 60 * 1000); // 单位是天 1天 1/24天(1小时)
    var cookie = name + '=' + value;
    if (expires) {
        cookie += '; expires=' + myDate;
    }
    if (domain) {
        cookie += '; domain=' + domain;
    }
    if (path) {
        cookie += '; path=' + path;
    }
    if (secure) {
        cookie += '; secure=' + secure;
    }
    document.cookie = cookie;
};
// 获取cookie
Applications.prototype.getCookie = function (name) {
    var cookie = document.cookie;
    var arr = cookie.split('; ');
    var value = '';
    arr.forEach(function (v) {
        var arr2 = v.split('=');
        if (arr2[0] === name) {
            value = arr2[1];
        }
    });
    return value;
};
// 清除cookie
Applications.prototype.removeCookie = function (name, domain, path, secure) {
    this.setCookie(name, '', -1, domain, path, secure);
};
// 创建元素节点
Applications.prototype.createElement = function (json) {
    var opts = json || {};
    opts.elementName = opts.elementName || 'div'; // 标签名称
    opts.style = opts.style || {}; // style样式
    opts.customAttribute = opts.customAttribute || {}; // 自定义属性
    opts.attribute = opts.attribute || {}; // 普通属性,checked,selected,innerHTML
    var elementNode = document.createElement(opts.elementName); // 元素节点
    Object.keys(opts.style).forEach(function (attr0) {
        elementNode.style[attr0] = opts.style[attr0];
    });
    Object.keys(opts.customAttribute).forEach(function (attr1) {
        elementNode.setAttribute('data-' + attr1, opts.customAttribute[attr1]);
    });
    Object.keys(opts.attribute).forEach(function (attr2) {
        elementNode[attr2] = opts.attribute[attr2];
    });
    return elementNode;
};
// 加减操作
Applications.prototype.addMinusInput = function (json) {
    // 购物加减商品系列
    if (!json) {
        console.log('no find parameter');
        return;
    }
    var noActiveClass = json.noActiveClass || 'on'; // 不能点的时候的class
    var minNum = json.minNum === undefined ? 1 : json.minNum; // 最小数量
    var add = json.add; // 加的按钮
    var addCallback = json.addCallback; // 加的回调
    var minus = json.minus; // 减少的按钮
    var minusCallback = json.minusCallback; // 减少的回调
    var overMinCallback = json.overMinCallback || function () {}; // 减少到最小值之后继续减少
    var input = json.input; // 输入框的按钮
    var blurCallback = json.blurCallback; // 失去焦点的回调
    var inventoryNum = parseInt(json.inventoryNum); // 商品库存
    var space = function space() {
        if (input.value.trim() === '') {
            input.value = minNum;
        }
    };
    // 增加
    add.onclick = function () {
        space();
        var num = parseInt(input.value);
        num++;
        input.value = num;
        if (num >= inventoryNum) {
            if (inventoryNum === 0) {
                input.value = minNum;
            } else {
                input.value = inventoryNum;
            }
            add.classList.add(noActiveClass);
        }
        minus.classList.remove(noActiveClass);
        if (addCallback) {
            addCallback();
        }
    };
    // 减少
    minus.onclick = function () {
        space();
        var num = parseInt(input.value);
        num--;
        input.value = num;
        if (num < minNum) {
            input.value = minNum;
            minus.classList.add(noActiveClass);
            overMinCallback();
        }
        add.classList.remove(noActiveClass);
        if (minusCallback) {
            minusCallback();
        }
    };
    // 获取焦点
    input.onfocus = function () {
        input.select();
    };
    // 失去焦点
    input.onblur = function () {
        space();
        var num = parseInt(input.value);
        if (isNaN(num)) {
            num = minNum;
        }
        minus.classList.remove(noActiveClass);
        add.classList.remove(noActiveClass);
        if (num >= inventoryNum) {
            input.value = inventoryNum;
            add.classList.add(noActiveClass);
        }
        if (num <= minNum) {
            input.value = minNum;
            minus.classList.add(noActiveClass);
        }
        if (blurCallback) {
            blurCallback();
        }
    };
};
// 获取原生的dom节点并转换成数组,传入的参数支持:1.原生的dom节点,2.原生的dom集合,3.css选择器
Applications.prototype.getDomArray = function (element) {
    var dom = [];
    if (element) {
        // 如果是字符串
        if (Object.prototype.toString.call(element).slice(8, -1).toLowerCase() === 'string') {
            dom = [].slice.call(document.querySelectorAll(element));
        }
        // 如果是dom节点(一个元素)    原生的
        if (element.nodeType === 1) {
            dom = [element];
        }
        /*
         * 如果是dom集合(一组元素)    HtmlCollection(通过getElementsBy系列获取到的)
         * 如果是dom集合(一组元素)    NodeList(通过querySelectorAll获取到的)
         * */
        if (Object.prototype.toString.call(element).slice(8, -1).toLowerCase() === 'htmlcollection' || Object.prototype.toString.call(element).slice(8, -1).toLowerCase() === 'nodelist') {
            dom = [].slice.call(element);
        }
    }
    return dom;
};
// 获取指定父级
Applications.prototype.getParent = function (element, parentSelector) {
    var self = this;
    element = self.getDomArray(element)[0];
    // 第一参数不符合规范
    if (!element) {
        console.log('第一个参数有误');
        return null;
    }
    // 没有第二参数默认选取直接父级
    if (!parentSelector) {
        return element.parentNode;
    }
    if (typeof parentSelector === 'string') {
        element = element.parentNode;
        switch (parentSelector.charAt(0)) {
            case '.':
                // 通过class获取父级
                while (element) {
                    if (!element.classList) {
                        // element === document
                        console.log('no find class');
                        return null;
                    }
                    if (element.classList.contains(parentSelector.substring(1))) {
                        return element;
                    }
                    element = element.parentNode;
                }
                break;
            case '#':
                // 通过id获取父级
                while (element) {
                    if (element === document) {
                        console.log('no find id');
                        return null;
                    }
                    if (element.id === parentSelector.substring(1)) {
                        return element;
                    }
                    element = element.parentNode;
                }
                break;
            default:
                // 通过标签名获取父级
                while (element) {
                    if (element === document) {
                        console.log('no find tagName');
                        return null;
                    }
                    if (element.tagName.toLowerCase() === parentSelector) {
                        return element;
                    }
                    element = element.parentNode;
                }
                break;
        }
    }
    return null;
};
// html转成DOM节点
Applications.prototype.htmlToDom = function (html) {
    var div = document.createElement('div');
    div.innerHTML = html;
    return div.children[0];
};
// 图片上传
Applications.prototype.imgUploadBase64 = function () {
    function Fn(json) {
        this.opts = json || {};
        // 如果没有选择文件的input,则不继续往下执行
        if (!this.opts.input) {
            console.log('no find input');
            return;
        }
        // 一次上传限制几张图片
        this.opts.limitNum = this.opts.limitNum || '5';
        // 选择图片的回调
        this.opts.changeCallback = this.opts.changeCallback || function () {
            console.log('no find changeCallback');
        };
        // 把图片读取成base64编码的回调
        this.opts.base64Callback = this.opts.base64Callback || function () {
            console.log('no find base64Callback');
        };
        // 初始化
        this.init();
    }

    Fn.prototype.init = function () {
        // 渲染结构
        this.render();
        // 渲染功能
        this.power();
    };
    Fn.prototype.render = function () {};
    Fn.prototype.power = function () {
        // 事件相关
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
            // 图片的相关信息
            self.imgData = [];
            var files = this.files;
            var len = files.length;
            for (var i = 0; i < len; i++) {
                var f = files[i];
                var isImages = /image/ig.test(f.type);
                // 是图片
                if (isImages) {
                    if (imagesNum < limitNum) {
                        // 小于限制几张图片的数量
                        self.imgData.push(f);
                        imagesNum++;
                    } else {// 大于限制几张图片的数量

                    }
                }
            }
            self.opts.changeCallback({ imgData: self.imgData });
            // 把图片读成base64编码
            self.fileReadAsDataURL();
        });
    };
    Fn.prototype.fileReadAsDataURL = function () {
        var self = this;
        this.imgData.forEach(function (v, i) {
            var fileRender = new FileReader();
            fileRender.readAsDataURL(v);
            fileRender.addEventListener('load', function () {
                self.opts.base64Callback({ base64: this.result, index: i });
            });
        });
    };
    return Fn;
};
// 是不是PC
Applications.prototype.isPc = function () {
    var userAgentInfo = navigator.userAgent;
    var Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod'];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
};
// 是不是微信
Applications.prototype.isWeiXin = function () {
    return navigator.userAgent.toLowerCase().match(/MicroMessenger/ig);
};
// 是不是android
Applications.prototype.isAndroid = function () {
    return window.navigator.appVersion.match(/android/ig);
};
// 是不是iphone
Applications.prototype.isIphone = function () {
    return window.navigator.appVersion.match(/iphone/ig);
};
// 获取元素距离文档的left和top
Applications.prototype.offset = function (element) {
    var self = this;
    var top = 0;
    var left = 0;
    element = self.getDomArray(element)[0];
    while (element) {
        top += element.offsetTop;
        left += element.offsetLeft;
        element = element.offsetParent;
    }
    return {
        top: top,
        left: left
    };
};
// 滚动到指定位置
Applications.prototype.scrollToY = function () {
    var to = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '0';

    var scale = 6;
    var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
    var speed = 0;
    var timer = null;
    var fn = function fn() {
        speed = Math.ceil((scrollT - to) / scale);
        scrollT -= speed;
        window.scrollTo(0, scrollT);
        timer = requestAnimationFrame(fn);
        if (scrollT <= to * 1) {
            cancelAnimationFrame(timer);
        }
    };
    requestAnimationFrame(fn);
};
// 全选,不选,反选
Applications.prototype.select = function () {
    var self = this;

    function Select(json) {
        this.opts = tools.extend({
            defaults: {
                items: null, // 所有的被选项
                callback: {
                    click: function click() {}
                }
            },
            inherits: json
        });
        this.itemsDom = self.getDomArray(this.opts.items); // 获取原生的dom节点并转换成数组
        this.init();
    }

    // 初始化
    Select.prototype.init = function () {
        this.power();
    };

    // 不选
    Select.prototype.selectNothing = function () {
        this.itemsDom.forEach(function (v) {
            v.checked = false;
        });
    };

    // 全选
    Select.prototype.selectAll = function () {
        this.itemsDom.forEach(function (v) {
            v.checked = true;
        });
    };

    // 反选
    Select.prototype.selectReverse = function () {
        this.itemsDom.forEach(function (v) {
            v.checked = !v.checked;
        });
    };

    // 当某一项被选中时,是否全部选项都被选中了
    Select.prototype.power = function () {
        var self = this;
        this.itemsDom.forEach(function (v1) {
            v1.addEventListener('click', function () {
                var isCheckedAll = true; // 是否全部的选项都被选中了(假设全部选中)
                self.itemsDom.forEach(function (v2) {
                    if (v2.checked === false) {
                        isCheckedAll = false;
                    }
                });
                self.opts.callback.click({ element: this, isCheckedAll: isCheckedAll });
            });
        });
    };

    return Select;
};
// 当滚动到了浏览器的底部
Applications.prototype.whenScrollBottom = function () {
    function WhenScrollBottom(json) {
        this.opts = tools.extend({
            defaults: {
                callback: {
                    success: function success() {},
                    failure: function failure() {}
                },
                isInitRender: true, // 是否初始化的时候就进行渲染
                interval: 80, // 函数节流时间(延迟时间)
                errorHeight: 0 // 滚动到底部上面一定高度就算是滚动到底部了(误差高度)
            },
            inherits: json
        });
        this.isLoadOver = false; // 数据是否加载完毕
        this.init();
    }

    WhenScrollBottom.prototype.init = function () {
        if (this.opts.isInitRender) {
            this.render();
        }
        this.power();
    };

    WhenScrollBottom.prototype.render = function () {
        var callback = this.opts.callback;
        var allH = document.body.scrollHeight;
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        var clientHeight = document.documentElement.clientHeight;
        if (scrollTop + clientHeight >= allH - this.opts.errorHeight && !this.isLoadOver) {
            callback.success(this);
        } else {
            callback.failure();
        }
    };

    // 数据加载完毕
    WhenScrollBottom.prototype.dataLoadOver = function () {
        this.isLoadOver = true;
        // 数据加载完毕,手动调用这个方法,或者手动把isLoadOver属性变成true,建议掉方法
    };

    WhenScrollBottom.prototype.power = function () {
        var self = this;
        var timer = null;
        window.addEventListener('scroll', function () {
            clearTimeout(timer);
            timer = setTimeout(function () {
                self.render();
            }, self.opts.interval);
        });
    };
    return WhenScrollBottom;
};
// 是否禁止浏览器滚动
Applications.prototype.whetherDisableScroll = function () {
    return {
        // 阻止冒泡
        stopPropagation: function stopPropagation(ev) {
            ev.stopPropagation();
        },
        // 阻止默认事件
        preventDefault: function preventDefault(ev) {
            ev.preventDefault();
        },
        // 阻止冒泡,阻止默认事件
        returnFalse: function returnFalse(ev) {
            ev.preventDefault();
            ev.stopPropagation();
        },
        // 禁止滚动
        noScroll: function noScroll() {
            document.addEventListener('touchmove', this.preventDefault, false);
            document.documentElement.style.overflow = 'hidden';
        },
        // 解除禁止浏览器滚动
        yesScroll: function yesScroll() {
            document.removeEventListener('touchmove', this.preventDefault, false);
            document.documentElement.style.overflow = 'auto';
        }
    };
};

// jsonp - jsonp只支持get请求,其他一概不支持
Applications.prototype.jsonp = function (obj) {
    var url = obj.url;
    var data = obj.data || {};
    var callback = obj.callback || function () {};
    if (url) {
        var fnName = 'jsonpCallback' + new Date().getTime();
        window[fnName] = function (json) {
            callback(json);
        };
        var script = document.createElement('script');
        script.addEventListener('load', function () {
            document.body.removeChild(script);
        });
        var parameter = tools.queryStringify(data);
        if (parameter) {
            script.src = url + '?' + parameter + '&callback=' + fnName;
        } else {
            script.src = url + '?callback=' + fnName;
        }
        document.body.appendChild(script);
    } else {
        console.log('url not find');
    }
};

module.exports = new Applications();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var tools = __webpack_require__(0); // 工具方法集合
var applications = __webpack_require__(1); // 应用方法集合

// 底层构造函数
function Super(json) {
    // 函数外部传来的参数
    this.opts = tools.extend({
        // 内部默认参数
        defaults: {
            // 父级
            wrap: '.g-body', // 这个仅支持传入选择器和原生dom节点
            // 回调
            callback: {
                // 内部模块创建之前
                moduleDomCreateBefore: function moduleDomCreateBefore(self) {
                    // 内部模块创建之前的回调待续...
                },
                // 内部模块创建之后
                moduleDomCreateAfter: function moduleDomCreateAfter(self) {
                    // 内部模块创建之后的回调待续...
                },
                // 内部模块渲染之前
                moduleDomRenderBefore: function moduleDomRenderBefore(self) {
                    // 内部模块渲染之前的回调待续...
                },
                // 内部模块渲染之后
                moduleDomRenderAfter: function moduleDomRenderAfter(self) {
                    // 内部模块渲染之后的回调待续...
                },
                // 内部模块移除之前
                moduleDomRemoveBefore: function moduleDomRemoveBefore(self) {
                    // 内部模块移除之前的回调待续...
                },
                // 内部模块移除之后
                moduleDomRemoveAfter: function moduleDomRemoveAfter(self) {
                    // 内部模块移除之后的回调待续...
                },
                // 内部模块显示之前
                moduleDomShowBefore: function moduleDomShowBefore(self) {
                    // 内部模块显示之前的回调待续...
                },
                // 内部模块显示之后
                moduleDomShowAfter: function moduleDomShowAfter(self) {
                    // 内部模块显示之后的回调待续...
                },
                // 内部模块隐藏之前
                moduleDomHideBefore: function moduleDomHideBefore(self) {
                    // 内部模块隐藏之前的回调待续...
                },
                // 内部模块隐藏之后
                moduleDomHideAfter: function moduleDomHideAfter(self) {
                    // 内部模块隐藏之后的回调待续...
                },
                // 外部容器获取之前
                wrapDomGetBefore: function wrapDomGetBefore(self) {
                    // 外部容器获取之前的回调待续...
                },
                // 外部容器获取之后
                wrapDomGetAfter: function wrapDomGetAfter(self) {
                    // 外部容器获取之后的回调待续...
                },
                // 外部容器移除之前
                wrapDomRemoveBefore: function wrapDomRemoveBefore(self) {
                    // 外部容器移除之前的回调待续...
                },
                // 外部容器移除之后
                wrapDomRemoveAfter: function wrapDomRemoveAfter(self) {
                    // 外部容器移除之后的回调待续...
                }
            },
            // 配置
            config: {
                // 内部模块的自定义属性
                moduleDomCustomAttribute: {},
                // 内部模块插入到外部容器的方式
                moduleDomRenderMethod: {
                    method: 'appendChild', // 'appendChild','insertBefore'
                    child: null
                },
                moduleDomStyle: {}, // 内部模块的样式
                moduleDomIsShow: true, // 内部模块是否显示(默认显示)
                moduleDomIsClearTimer: true // 内部模块是否清除所有定时器(默认清除)
            },
            // 数据
            data: {}
        },
        // 外部传入参数
        inherits: json
    });
    // 函数内部自带的属性
    this.moduleDom = null; // 内部的模块
    this.wrapDom = null; // 内部模块的外部承载容器,如果没有也没关系,不过不往里面append罢了
    this.moduleDomTimer = {}; // 内部模块的定时器存储(假设内部模块有定时器)
    this.init(); // 初始化
}

// 初始化
Super.prototype.init = function () {
    this.render();
    this.power();
};

// 渲染
Super.prototype.render = function () {
    this.moduleDomRemove(); // 内部模块的移除(重新初始化的时候要移除掉以前有的内部模块)

    var callback = this.opts.callback;
    callback.moduleDomCreateBefore(this);
    this.moduleDomCreate(); // 内部模块的创建
    callback.moduleDomCreateAfter(this);

    this.wrapDomGet(); // 外部容器的获取
    this.moduleDomRender(); // 内部模块的渲染(如果外部容器存在,就把内部模块填充到外部容器里)
};

// 功能(这个方法需要在子类型里被覆盖掉)
Super.prototype.power = function () {
    // 功能待续...
};

// 内部模块的创建(这个方法需要在子类型里被覆盖掉)
Super.prototype.moduleDomCreate = function () {
    this.moduleDom = applications.createElement({
        style: this.opts.config.moduleDomStyle,
        customAttribute: this.opts.config.moduleDomCustomAttribute,
        attribute: {
            className: 'g-super-type',
            innerHTML: '\n                <div class="g-super-type-text">\u5468\u534E\u98DE\u7231\u4FAF\u4E3D\u6770,\u4FAF\u4E3D\u6770\u7231\u5468\u534E\u98DEsup-es5</div>\n            '
        }
    });
};

// 内部模块的渲染
Super.prototype.moduleDomRender = function () {
    var callback = this.opts.callback;
    var config = this.opts.config;
    if (config.moduleDomIsShow && this.wrapDom) {
        callback.moduleDomRenderBefore(this);
        var renderMethod = config.moduleDomRenderMethod;
        if (renderMethod.method === 'insertBefore') {
            var dom = applications.getDomArray(renderMethod.child)[0];
            if (dom) {
                this.wrapDom.insertBefore(this.moduleDom, dom);
            } else {
                this.wrapDom.insertBefore(this.moduleDom, this.wrapDom.children[0]);
            }
        }
        if (renderMethod.method === 'appendChild') {
            this.wrapDom.appendChild(this.moduleDom);
        }
        callback.moduleDomRenderAfter(this);
    }
};

// 内部模块的移除
Super.prototype.moduleDomRemove = function () {
    var callback = this.opts.callback;
    if (this.moduleDom && this.moduleDom.parentNode) {
        callback.moduleDomRemoveBefore(this);
        this.moduleDom.parentNode.removeChild(this.moduleDom);
        callback.moduleDomRemoveAfter(this);
    }
    this.moduleDomClearTimer();
};

// 内部模块的定时器清除(假设内部模块有定时器)
Super.prototype.moduleDomClearTimer = function () {
    var self = this;
    if (self.opts.config.moduleDomIsClearTimer) {
        Object.keys(self.moduleDomTimer).forEach(function (attr) {
            clearInterval(self.moduleDomTimer[attr]);
            clearTimeout(self.moduleDomTimer[attr]);
        });
    }
};

// 内部模块的显示(显示隐藏和是否清除定时器无关)
Super.prototype.moduleDomShow = function () {
    var callback = this.opts.callback;
    callback.moduleDomShowBefore(this);
    if (this.wrapDom) {
        this.opts.config.moduleDomIsShow = true;
        this.moduleDomRender();
    }
    callback.moduleDomShowAfter(this);
};

// 内部模块的隐藏(显示隐藏和是否清除定时器无关)
Super.prototype.moduleDomHide = function () {
    var callback = this.opts.callback;
    if (this.moduleDom.parentNode) {
        this.opts.config.moduleDomIsShow = false;
        callback.moduleDomHideBefore(this);
        this.moduleDom.parentNode.removeChild(this.moduleDom);
        callback.moduleDomHideAfter(this);
    }
};

// 外部容器的获取
Super.prototype.wrapDomGet = function () {
    var callback = this.opts.callback;
    callback.wrapDomGetBefore(this);
    this.wrapDom = applications.getDomArray(this.opts.wrap)[0];
    callback.wrapDomGetAfter(this);
};

// 外部容器的移除
Super.prototype.wrapDomRemove = function () {
    var callback = this.opts.callback;
    // 先移除内部的模块
    this.moduleDomRemove();
    // 再移除外部的容器
    if (this.wrapDom) {
        callback.wrapDomRemoveBefore(this);
        this.wrapDom.parentNode.removeChild(this.wrapDom);
        callback.wrapDomRemoveAfter(this);
    }
};

// 获取内部模块的整体html结构
Super.prototype.getModuleDomHtml = function () {
    return this.moduleDom.outerHTML;
};

module.exports = Super;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

__webpack_require__(15);

var Super = function () {
    function Super(json) {
        _classCallCheck(this, Super);

        var self = this;
        self.tools = __webpack_require__(0); // 工具方法集合
        self.applications = __webpack_require__(1); // 应用方法集合
        self.axios = __webpack_require__(16); // ajax
        self.opts = self.tools.extend({
            defaults: {
                lazyload: {
                    isInitRender: false
                }
            },
            inherits: json
        });
        self.init();
    }

    // (初)初始化数据


    _createClass(Super, [{
        key: 'init',
        value: function init() {
            var self = this;
            window.addEventListener('load', function () {
                setTimeout(function () {
                    self.renderHeader();
                    self.power();
                    self.renderFooter();
                }, 0);
            });
        }

        // (功)(盖)功能(这个方法需要在子类型里被覆盖掉)

    }, {
        key: 'power',
        value: function power() {
            console.log('dataInfo:', this.dataInfo);
        }

        // (渲)渲染

    }, {
        key: 'renderHeader',
        value: function renderHeader() {
            var self = this;

            // 数据信息
            self.dataInfo = function () {
                var input = document.querySelector('#page-info-str');
                var value = input.value;
                input.parentNode.removeChild(input);
                var wrap = document.querySelector('.g-wrap');
                [].slice.call(wrap.querySelectorAll('script')).forEach(function (v) {
                    wrap.removeChild(v);
                });
                try {
                    return JSON.parse(value);
                } catch (err) {
                    console.log('dataInfo的json格式值出现错误:', err);
                    return value || {};
                }
            }();

            // 延迟加载
            var LazyLoad = __webpack_require__(18);
            self.lazyload = new LazyLoad(self.opts.lazyload);
        }

        // (渲)渲染

    }, {
        key: 'renderFooter',
        value: function renderFooter() {
            var self = this;
            var gDataInfo = self.dataInfo;

            // 版权
            if (gDataInfo && gDataInfo.isShowCopyright) {
                var Copyright = __webpack_require__(19);
                new Copyright({
                    wrap: '.page-copyright-wrap'
                });
            }

            // 底部导航
            if (gDataInfo && gDataInfo.footerNav) {
                var Footer = __webpack_require__(20);
                gDataInfo.footerNav.wrap = '.page-footer-nav-wrap';
                new Footer(gDataInfo.footerNav);
            }

            // 返回顶部
            var GoTop = __webpack_require__(21);
            new GoTop({
                wrap: '.page-go-top-wrap'
            });

            // 延迟加载
            self.lazyload.render();
        }
    }]);

    return Super;
}();

module.exports = Super;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var tools = __webpack_require__(0); // 工具方法集合
var applications = __webpack_require__(1); // 应用方法集合
var Super = __webpack_require__(2); // 超类型(子类型继承的对象)
var Mask = __webpack_require__(10); // 遮罩

// 子类型
var Sub = tools.constructorInherit(Super, {
    // 回调
    callback: {
        moduleDomRenderBefore: function moduleDomRenderBefore(self) {
            if (self.opts.config.type === 'confirm') {
                if (self.opts.config.confirm.isShowMask) {
                    self.mask = new Mask({
                        config: {
                            moduleDomIsShow: true,
                            moduleDomRenderMethod: { method: 'insertBefore' }
                        }
                    });
                }
                if (self.wrapDom && getComputedStyle(self.wrapDom).position === 'static') {
                    self.wrapDom.style.position = 'relative';
                }
            }
        },
        // 确认
        confirm: function confirm() {},
        // 取消
        cancel: function cancel() {},
        // 关闭
        close: function close() {}
    },
    // 配置
    config: {
        /*
         * 弹窗类型
         * `alert`  提示信息类型
         * `confirm`    确认框类型
         * */
        type: 'alert', // 默认是提示框
        /*
         * 弹窗位置
         * `center` 居中
         * `bottom` 居下
         * `top` 居上
         * */
        positionLocation: 'center', // 弹窗的定位位置    positionMethod定位方式强制fixed
        // 提示框
        alert: {
            timer: null, // 定时器装载
            time: 3000, // 展示的时间
            isShowIcon: false, // 是否显示icon
            isShowClose: true, // 是否显示关闭按钮
            icon: 'icon-chenggong', // icon的class
            content: '成功' // 内容信息
        },
        // 确认框
        confirm: {
            // 点击确认是否关闭弹窗
            isShowHeader: true, // 是否显示头部
            headerContent: '提示:', // 头部内容
            isShowBody: true, // 是否显示主体
            content: '<div>确定要执行这个操作?</div>', // 主体内容
            isShowFooter: true, // 是否显示尾部
            footerContent: '', // 尾部内容
            isShowClose: true, // 是否显示关闭按钮
            closeContent: '<div class="iconfont icon-guanbi"></div>', // 关闭按钮的内容
            isShowConfirm: true, // 是否显示确认按钮
            confirmContent: '确认', // 确认按钮的内容
            isShowCancel: true, // 是否显示取消按钮
            cancelContent: '取消', // 取消按钮的内容
            isCustom: false, // 是否自定义
            isShowIcon: false, // 是否显示icon
            icon: 'icon-jinggao', // icon的类型
            isShowMask: true, // 是否显示遮罩
            isHandHide: false // 是否手动隐藏(一般只用于点击确认时)
        }
    },
    // 数据
    data: {}
});

// 内部模块的创建(覆盖超类型)
Sub.prototype.moduleDomCreate = function () {
    var config = this.opts.config;
    var type = 'g-dialog-' + config.type; // 弹窗类型
    var positionLocation = 'g-dialog-' + config.positionLocation; // 弹窗的定位位置
    // 弹窗结构
    var html = '\n        ' + this.renderAlert() + '\n        ' + this.renderConfirm() + '\n    ';
    this.moduleDom = applications.createElement({
        style: this.opts.config.moduleDomStyle,
        customAttribute: this.opts.config.moduleDomCustomAttribute,
        attribute: {
            className: 'g-dialog ' + type + ' ' + positionLocation,
            innerHTML: html
        }
    });
};

// 提示框
Sub.prototype.renderAlert = function () {
    var config = this.opts.config;
    if (config.type !== 'alert') {
        return '';
    }
    var alert = config.alert;
    var htmlIcon = '';
    if (alert.isShowIcon) {
        htmlIcon = '<div class="g-dialog-alert-icon iconfont ' + alert.icon + '"></div>';
    }
    var closeHtml = '';
    if (alert.isShowClose) {
        closeHtml = '<div class="g-dialog-alert-close iconfont icon-guanbi" ></div>';
    }
    return '\n        ' + closeHtml + '\n        ' + htmlIcon + '\n        <div class="g-dialog-alert-text">' + alert.content + '</div>\n    ';
};

// 确认框
Sub.prototype.renderConfirm = function () {
    var config = this.opts.config;
    if (config.type !== 'confirm') {
        return '';
    }
    var confirm = config.confirm;
    var htmlHeader = '';
    if (confirm.isShowHeader) {
        htmlHeader = '<div class="g-dialog-confirm-header">' + confirm.headerContent + '</div>';
    }
    var htmlBody = '';
    if (confirm.isShowBody) {
        var htmlIcon = '';
        if (confirm.isShowIcon) {
            htmlIcon = '<div class="g-dialog-confirm-body-system-icon iconfont ' + confirm.icon + '"></div>';
        }
        var bodyClass = 'g-dialog-confirm-body-system';
        var bodyContent = '\n            ' + htmlIcon + '\n            <div class="g-dialog-confirm-body-system-text">' + confirm.content + '</div>\n        ';
        if (confirm.isCustom) {
            bodyClass = 'g-dialog-confirm-body-custom';
            bodyContent = confirm.content;
        }
        htmlBody = '\n            <div class="g-dialog-confirm-body">\n                <div class="' + bodyClass + '">\n                    ' + bodyContent + '\n                </div>\n            </div>\n        ';
    }
    var htmlFooter = '';
    if (confirm.isShowFooter) {
        var htmlCancel = '';
        if (confirm.isShowCancel) {
            htmlCancel = '<div class="g-button g-button-cancel g-dialog-confirm-footer-cancel">' + confirm.cancelContent + '</div>';
        }
        var htmlConfirm = '';
        if (confirm.isShowConfirm) {
            htmlConfirm = '<div class="g-button g-dialog-confirm-footer-confirm">' + confirm.confirmContent + '</div>';
        }
        htmlFooter = '<div class="g-dialog-confirm-footer">' + htmlCancel + htmlConfirm + '</div>';
    }
    var htmlClose = '';
    if (confirm.isShowClose) {
        htmlClose = '<div class="g-dialog-confirm-close">' + confirm.closeContent + '</div>';
    }
    return '\n        ' + htmlHeader + '\n        ' + htmlBody + '\n        ' + htmlFooter + '\n        ' + htmlClose + ' \n    ';
};

// 功能(覆盖超类型)
Sub.prototype.power = function () {
    var self = this;
    var config = this.opts.config;
    // 提示框
    if (config.type === 'alert') {
        var close = this.moduleDom.querySelector('.g-dialog-alert-close');
        config.alert.timer = setTimeout(function () {
            self.hide();
        }, config.alert.time);
        close.addEventListener('click', function () {
            clearTimeout(config.alert.timer);
            self.hide();
        });
    }
    // 确认框
    if (config.type === 'confirm') {
        var _close = this.moduleDom.querySelector('.g-dialog-confirm-close');
        if (_close) {
            _close.addEventListener('click', function () {
                self.hide();
                self.opts.callback.close();
            });
        }
        var cancel = this.moduleDom.querySelector('.g-dialog-confirm-footer-cancel');
        if (cancel) {
            cancel.addEventListener('click', function () {
                self.hide();
                self.opts.callback.cancel();
            });
        }
        var confirm = this.moduleDom.querySelector('.g-dialog-confirm-footer-confirm');
        if (confirm) {
            confirm.addEventListener('click', function () {
                if (!self.opts.config.confirm.isHandHide) {
                    self.hide();
                }
                self.opts.callback.confirm();
            });
        }
    }
};

Sub.prototype.hide = function () {
    this.moduleDomHide();
    if (this.mask) {
        this.mask.moduleDomHide();
    }
};

module.exports = Sub;

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var tools = __webpack_require__(0); // 工具方法集合
var applications = __webpack_require__(1); // 应用方法集合
var Super = __webpack_require__(2); // 超类型(子类型继承的对象)

// 子类型
var Sub = tools.constructorInherit(Super, {
    // 回调
    callback: {
        click: function click() {},
        moduleDomRenderBefore: function moduleDomRenderBefore(self) {
            if (self.wrapDom && getComputedStyle(self.wrapDom).position === 'static') {
                self.wrapDom.style.position = 'relative';
            }
        }
    },
    // 配置
    config: {
        isTransparent: false, // 是不是透明的(默认不透明)
        moduleDomIsShow: false, // 内部模块是否显示(默认不显示)
        positionMethod: 'fixed' // 模块的定位方式 'fixed'(相对于整个文档) 'absolute'(相对于外部容器)
    },
    // 数据
    data: {}
});

// 内部模块的创建(覆盖超类型)
Sub.prototype.moduleDomCreate = function () {
    var config = this.opts.config;
    var className = '';
    if (config.isTransparent) {
        className = 'g-mask-transparent';
    }
    if (config.positionMethod === 'fixed') {
        className = 'g-mask-fixed';
    }
    this.moduleDom = applications.createElement({
        style: this.opts.config.moduleDomStyle,
        customAttribute: this.opts.config.moduleDomCustomAttribute,
        attribute: {
            className: 'g-mask ' + className,
            innerHTML: ''
        }
    });
};

// 功能(覆盖超类型)
Sub.prototype.power = function () {
    var self = this;
    this.moduleDom.addEventListener('click', function (ev) {
        self.opts.callback.click();
        ev.stopPropagation();
    });
};

module.exports = Sub;

/***/ }),
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var axios = __webpack_require__(9);
var tools = __webpack_require__(0);
var Dialog = __webpack_require__(4);

module.exports = function (json) {
    var opts = tools.extend({
        defaults: {
            isHandleError: true, // 是否处理错误
            isHandleFailure: true, // 是否处理失败
            timeout: 5000 // 超时
        },
        inherits: json
    });
    /*
    * javascript axios get params
    * javascript axios post/put/delete data
    * 把上述四种数据的传参方式进行统一化,统一使用data
    * nodejs express get req.query
    * nodejs express post/put/delete body-parser req.body
    * 把上述四种数据的传参方式进行统一化,统一使用req.data
    * */
    if (opts.method.toLowerCase() === 'get') {
        opts.params = opts.data || opts.params;
    }
    return axios(opts).catch(function (error) {
        if (opts.isHandleError) {
            new Dialog({
                config: {
                    alert: {
                        content: '\u9519\u8BEF : ' + error
                    }
                }
            });
        }
    }).then(function (response) {
        var dataInfo = { status: 'error' };
        if (response) {
            dataInfo = response.data;
            if (dataInfo.status === 'failure' && opts.isHandleFailure) {
                new Dialog({
                    config: {
                        alert: {
                            content: '\u5931\u8D25 : ' + dataInfo.message
                        }
                    }
                });
            }
        }
        return dataInfo;
    });
};

/***/ }),
/* 17 */,
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var tools = __webpack_require__(0); // 工具方法集合
var applications = __webpack_require__(1); // 应用方法集合

// 延迟加载
function LazyLoad(json) {
    this.opts = tools.extend({
        defaults: {
            element: '.g-lazy-load', // 哪些元素进行懒加载
            srcAttr: 'data-src', // 默认获取哪里的属性值当做src
            moreHeight: 0, // 多加载一部分高度的图片
            interval: 80, // 函数节流时间(延迟时间)
            isInitRender: true // 是否初始化的时候就进行render
        },
        inherits: json
    });
    this.clientHeight = document.documentElement.clientHeight;
    this.init();
}

LazyLoad.prototype.init = function () {
    if (this.opts.isInitRender) {
        this.render();
    }
    this.power();
};
LazyLoad.prototype.render = function () {
    var self = this;
    var moreHeight = this.opts.moreHeight;
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var minTop = scrollTop - moreHeight;
    var maxTop = this.clientHeight + minTop + moreHeight;
    var src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAAtJREFUCB1jYAACAAAFAAGNu5vzAAAAAElFTkSuQmCC';
    var aDom = applications.getDomArray(this.opts.element);
    aDom.forEach(function (v) {
        if (v.tagName.toLowerCase() === 'img') {
            if (!v.getAttribute('src')) {
                v.src = src;
            }
            v.setAttribute('height', '100%');
            v.setAttribute('width', '100%');
        }
    });
    aDom.forEach(function (v) {
        // 排除那些被none掉的元素(被none掉的元素,通过offsetWidth和offsetHeight获取到的值是0)
        if (v.offsetWidth) {
            var elementTop = applications.offset(v).top;
            var elementBottom = elementTop + v.offsetHeight;
            // 出现在可视区才进行处理
            if (elementBottom >= minTop && elementTop <= maxTop) {
                if (v.tagName.toLowerCase() === 'img') {
                    if (v.getAttribute(self.opts.srcAttr)) {
                        v.src = v.getAttribute(self.opts.srcAttr);
                    }
                    v.removeAttribute('height');
                    v.removeAttribute('width');
                } else if (v.getAttribute(self.opts.srcAttr)) {
                    v.style.backgroundImage = 'url(' + v.getAttribute(self.opts.srcAttr) + ')';
                }
                v.classList.remove('g-lazy-load');
                v.classList.add('g-lazy-load-active');
            }
        }
    });
};
LazyLoad.prototype.power = function () {
    var self = this;
    var timer = null;
    window.addEventListener('scroll', function () {
        clearTimeout(timer);
        timer = setTimeout(function () {
            self.render();
        }, self.opts.interval);
    });
};
module.exports = LazyLoad;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var tools = __webpack_require__(0); // 工具方法集合
var applications = __webpack_require__(1); // 应用方法集合
var Super = __webpack_require__(2); // 超类型(子类型继承的对象)

// 子类型
var Sub = tools.constructorInherit(Super, {
    // 容器
    wrap: '.g-footer',
    // 回调
    callback: {},
    // 配置
    config: {},
    // 数据
    data: {}
});

// 内部模块的创建(覆盖超类型)
Sub.prototype.moduleDomCreate = function () {
    this.moduleDom = applications.createElement({
        style: this.opts.config.moduleDomStyle,
        customAttribute: this.opts.config.moduleDomCustomAttribute,
        attribute: {
            className: 'g-copyright',
            innerHTML: '\n                <div class="g-copyright-icon iconfont icon-logo"></div>\n                <div class="g-copyright-text">\u7248\u6743\u4FE1\u606F\u54DF</div>\n            '
        }
    });
};

// 功能(覆盖超类型)
Sub.prototype.power = function () {
    // 功能重写待续...
};

module.exports = Sub;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var tools = __webpack_require__(0); // 工具方法集合
var applications = __webpack_require__(1); // 应用方法集合
var Super = __webpack_require__(2); // 超类型(子类型继承的对象)

// 子类型
var Sub = tools.constructorInherit(Super, {
    // 容器
    wrap: '.g-footer',
    // 回调
    callback: {},
    // 配置
    config: {},
    // 数据
    data: [
        // {
        //     routeName: 'home',
        //     href: '/',
        //     text: '首页',
        //     icon: 'icon-shouye',
        //     isHighlight: false,
        //     isShowMark: false
        // }
    ]
});

Sub.prototype.moduleDomCreate = function () {
    this.moduleDomClass = 'g-footer-nav';
    var moduleDomHtml = '';
    var data = this.opts.data;
    Object.keys(data).forEach(function (key) {
        var v = data[key];
        var highlightClass = '';
        if (v.isHighlight) {
            highlightClass = 'g-footer-nav-item-active';
        }
        var markHtml = '';
        if (v.isShowMark) {
            markHtml = '<div class="g-footer-nav-item-mark"></div>';
        }
        moduleDomHtml += '\n            <a class="g-footer-nav-item ' + highlightClass + '" href="' + v.href + '">\n                <div class="g-footer-nav-item-icon iconfont ' + v.icon + '"></div>\n                <div class="g-footer-nav-item-text">' + v.text + '</div>\n                ' + markHtml + '\n            </a>\n        ';
    });
    this.moduleDom = applications.createElement({
        style: this.opts.config.moduleDomStyle,
        customAttribute: this.opts.config.moduleDomCustomAttribute,
        attribute: {
            className: this.moduleDomClass,
            innerHTML: '<div class="g-footer-nav-body">' + moduleDomHtml + '</div>'
        }
    });
};

// 功能(覆盖超类型)
Sub.prototype.power = function () {
    // 功能重写待续...
};

module.exports = Sub;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var tools = __webpack_require__(0); // 工具方法集合
var applications = __webpack_require__(1); // 应用方法集合
var Super = __webpack_require__(2); // 超类型(子类型继承的对象)

// 子类型
var Sub = tools.constructorInherit(Super, {
    // 容器
    wrap: '.g-footer',
    // 回调
    callback: {},
    // 配置
    config: {
        showHeight: 200
    },
    // 数据
    data: {}
});

// 内部模块的创建(覆盖超类型)
Sub.prototype.moduleDomCreate = function () {
    this.moduleDom = applications.createElement({
        style: this.opts.config.moduleDomStyle,
        customAttribute: this.opts.config.moduleDomCustomAttribute,
        attribute: {
            className: 'g-go-top',
            innerHTML: '<div class="g-go-top-icon iconfont icon-shangjiantou"></div>'
        }
    });
};

// 功能(覆盖超类型)
Sub.prototype.power = function () {
    var self = this;
    this.moduleDom.addEventListener('click', function () {
        applications.scrollToY('0');
    });
    window.addEventListener('scroll', function () {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop >= self.opts.config.showHeight) {
            self.moduleDom.classList.add('g-go-top-active');
        } else {
            self.moduleDom.classList.remove('g-go-top-active');
        }
    });
};

module.exports = Sub;

/***/ })
]);