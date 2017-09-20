// 工具方法集合
function Tools() {
}

// 判断类型
Tools.prototype.typeOf = function (obj) {
    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
};
// 对象扩展
Tools.prototype.extend = function (json) {
    const self = this;
    const opts = json || {};
    opts.defaults = opts.defaults || {};// 默认对象
    opts.inherits = opts.inherits || {};// 继承对像
    opts.isDeep = opts.isDeep === false ? opts.isDeep : true;// 是否进行深拷贝(默认进行深拷贝)
    const defaultsType = Object.prototype.toString.call(opts.defaults).slice(8, -1).toLowerCase();
    const inheritsType = Object.prototype.toString.call(opts.inherits).slice(8, -1).toLowerCase();
    if (defaultsType === inheritsType && opts.isDeep) {
        if (defaultsType === 'object' || defaultsType === 'array') { // 当为对象或者为数组
            Object.keys(opts.inherits).forEach(function (attr) {
                const attrDefaultsType = Object.prototype.toString.call(opts.defaults[attr]).slice(8, -1).toLowerCase();
                const attrInheritsType = Object.prototype.toString.call(opts.inherits[attr]).slice(8, -1).toLowerCase();
                if (attrDefaultsType === attrInheritsType && opts.isDeep) { // 类型相同
                    if (attrDefaultsType === 'object' || attrDefaultsType === 'array') { // 当为对象或者为数组
                        self.extend({defaults: opts.defaults[attr], inherits: opts.inherits[attr]});
                    } else {
                        opts.defaults[attr] = opts.inherits[attr];
                    }
                } else { // 类型不同,直接后面的覆盖前面的
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
// 对象移除引用
Tools.prototype.objRemoveQuote = function (json) {
    const self = this;
    const opts = json || {};
    const obj = opts.obj;// 这里一定不能给默认值
    const objType = Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
    if (objType !== 'object' && objType !== 'array') {
        return obj;
    }
    let newObj = {};
    if (objType === 'array') {
        newObj = [];
    }
    Object.keys(obj).forEach(function (attr) {
        newObj[attr] = self.objRemoveQuote({obj: obj[attr]});
    });
    return newObj;
};
// 面向对象继承
Tools.prototype.constructorInherit = function (json) {
    const self = this;
    const opts = self.extend({
        defaults: {
            superType: null, // 继承哪个超类(这个必须传的是一个构造函数,或者不传值)
            parameter: {}, // 默认参数(这个必须传的是一个对象,或者不传值)
        },
        inherits: json,
    });
    // 超类型(需要是个构造函数)
    const SuperType = opts.superType;
    // 子类型的默认参数(需要是个对象)
    const parameter = opts.parameter;
    // 如果超类型不存在
    if (Object.prototype.toString.call(SuperType).toLowerCase().slice(8, -1) !== 'function') {
        console.log('no find SuperType or SuperType error');
        return false;
    }

    // 子类型
    function SubType(json) {
        // 子类型自身的属性
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
        this.opts = self.extend({
            defaults: self.objRemoveQuote({obj: parameter}),
            inherits: json,
        });
        // 子类型继承超类型的属性
        opts.superType.call(this, this.opts);
    }

    // 子类型继承超类型的方法
    Object.keys(SuperType.prototype).forEach(function (attr) {
        SubType.prototype[attr] = SuperType.prototype[attr];
    });
    return SubType;
};
// 数组去重
Tools.prototype.arrayRemoveRepeat = function (array) {
    const self = this;
    array = self.typeOf(array) === 'array' ? array : [];
    const newArray = [];
    array.forEach(function (v) {
        if (newArray.indexOf(v) === -1) {
            newArray.push(v);
        }
    });
    return newArray;
};
// 秒转时间
Tools.prototype.secondsToTime = function (json) {
    const opts = json || {};
    const seconds = opts.seconds;
    // 天
    const nowDay = Math.floor(seconds / 3600 / 24);
    // 时
    const nowHours = Math.floor(seconds / 3600 % 24);
    // 分
    const nowMinutes = Math.floor(seconds % 3600 / 60);
    // 秒
    const nowSeconds = Math.floor(seconds % 60);
    return {day: nowDay, hours: nowHours, minutes: nowMinutes, seconds: nowSeconds};
};
// 倒计时
Tools.prototype.timeCountDown = function (json) {
    const self = this;
    const opts = self.extend({
        defaults: {
            seconds: 0,
            callback: {
                run: function () {
                },
                over: function () {
                },
            },
        },
        inherits: json,
    });
    let seconds = opts.seconds;// 秒数
    const run = opts.callback.run;// 运行的回调
    const over = opts.callback.over;// 结束的回调
    // 时间大于等于0秒
    if (seconds >= 0) {
        run(self.secondsToTime({seconds: seconds}));// 运行时的回调
        // 倒计时走你
        const timer = setInterval(function () {
            seconds--;
            if (seconds >= 0) {
                run(self.secondsToTime({seconds: seconds}));// 运行时的回调
            } else {
                over();// 结束时的回调
                clearInterval(timer);
            }
        }, 1000);
    }
    // 时间小于0秒
    if (seconds < 0) {
        console.log('倒计时的秒数不能小于0');
    }
};
// 字符串限制长度
Tools.prototype.strLimitLength = function (json) {
    const opts = json || {};
    const maxLength = opts.maxLength;
    let str = opts.str;
    if (!str) {
        return '';
    }
    if (Number(str.length) > maxLength) {
        str = str.substring(0, maxLength);
    }
    return str;
};
// json转数组
Tools.prototype.jsonToArray = function (json) {
    const opts = json || {};
    const obj = opts.json || {};
    const arr = [];
    if (obj instanceof Array) {
        obj.forEach(function (v, i) {
            arr.push({key: i, value: v});
        });
    } else {
        Object.keys(obj).forEach(function (attr) {
            arr.push({key: attr, value: obj[attr]});
        });
    }
    return arr;
};
// 补零函数
Tools.prototype.fillZero = function (json) {
    const opts = json || {};
    const num = opts.num || '0';
    if (num < 10) {
        return `0${num}`;
    }
    return `${num}`;
};
// px转rem
Tools.prototype.px2rem = function (json) {
    const opts = json || {};
    const base = opts.base || '320';
    const px = opts.px || '0';
    return `${px / base * 10}rem`;
};
// 字符串转驼峰
Tools.prototype.strToHump = function (json) {
    const opts = this.extend({
        defaults: {
            str: '',
            rule: '-',
        },
        inherits: json,
    });
    let str = opts.str;
    const rule = opts.rule;
    const type = this.typeOf(str);
    if (type === 'string') {
        const arr = str.split(rule);
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
    const self = this;
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
    const reg = /^\d+$/;
    return reg.test(value);
};
// 保留几位小数(默认两位)
Tools.prototype.keepDecimal = function (value = 0, place = 2) {
    const baseNum = 10 ** place;
    return (Math.floor(parseFloat(value) * baseNum) / baseNum).toFixed(2);
};
// 是不是保留了place位小数(默认两位)
Tools.prototype.isKeepDecimal = function (value, place = 2) {
    const reg = new RegExp(`^\\d+\\.\\d{${place}}$`);
    return reg.test(value);
};
// 是不是手机号
Tools.prototype.isPhoneNum = function (value) {
    const reg = /^1[3458][0-9]\d{4,8}$/;
    return reg.test(value);
};
// 是不是邮箱
Tools.prototype.isEmail = function (value) {
    const reg = /^([0-9A-Za-z\-_.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g;
    return reg.test(value);
};
// {a:1,b:2} 序列成 'a=1&b=2'
Tools.prototype.queryStringify = function (json) {
    const obj = json || {};
    const result = [];
    Object.keys(obj).forEach(function (key) {
        result.push(`${key}=${obj[key]}`);
    });
    return result.join('&');
};
// 'a=1&b=2' 解析成 {a:1,b:2}
Tools.prototype.queryParse = function (str) {
    const result = {};
    if (str) {
        str.split('&').forEach(function (v) {
            const arr = v.split('=');
            result[arr[0]] = arr[1];
        });
    }
    return result;
};
// 输出
module.exports = new Tools();
