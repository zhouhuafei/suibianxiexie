webpackJsonp([3],{

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


window.addEventListener('load', function () {
    setTimeout(function () {
        __webpack_require__(27);
        var header = __webpack_require__(2); //每个页面都要用到的js(一定要放到最顶部)

        //base函数测试
        (function () {
            var Select = __webpack_require__(28);
            //测试全选
            new Select({
                items: '.g-checkbox-checkbox',
                callback: {
                    click: function click(obj) {
                        console.log(obj);
                    }
                }
            });
        })();

        //验证
        (function () {
            var ValidateInput = __webpack_require__(29);
            var aInput = [].slice.call(document.querySelectorAll('.m-validate-form'));
            aInput.forEach(function (v) {
                new ValidateInput({ element: v });
            });
        })();

        var footer = __webpack_require__(3); //每个页面都要用到的js(一定要放到最底部)
    }, 0);
});

/***/ }),

/***/ 27:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//全选,不选,反选
var extend = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../tools/extend\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); //对象的扩展方法
var getDomArray = __webpack_require__(4); //获取原生的dom节点并转换成数组

function Select(json) {
    this.opts = extend({
        defaults: {
            items: null, //所有的被选项
            callback: {
                click: function click() {}
            }
        },
        inherits: json
    });
    this.itemsDom = getDomArray({ element: this.opts.items });
    this.init();
}

//初始化
Select.prototype.init = function () {
    this.power();
};

//不选
Select.prototype.selectNothing = function () {
    this.itemsDom.forEach(function (v) {
        v.checked = false;
    });
};

//全选
Select.prototype.selectAll = function () {
    this.itemsDom.forEach(function (v) {
        v.checked = true;
    });
};

//反选
Select.prototype.selectReverse = function () {
    this.itemsDom.forEach(function (v) {
        v.checked = !v.checked;
    });
};

//当某一项被选中时,是否全部选项都被选中了
Select.prototype.power = function () {
    var self = this;
    this.itemsDom.forEach(function (v1) {
        v1.addEventListener('click', function () {
            var isCheckedAll = true; //是否全部的选项都被选中了(假设全部选中)
            self.itemsDom.forEach(function (v2) {
                if (v2.checked == false) {
                    isCheckedAll = false;
                }
            });
            self.opts.callback.click({ element: this, isCheckedAll: isCheckedAll });
        });
    });
};

module.exports = Select;

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var validate = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../tools/validate\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); //表单验证
var getDomArray = __webpack_require__(4); //获取原生的dom节点并转换成数组

function ValidateForm(json) {
    this.opts = json || {};
    this.element = getDomArray({ element: this.opts.element })[0];
    this.hintClass = this.opts.hintClass || 'm-validate-form-hint';
    this.eventsType = this.opts.eventsType || 'blur';
    this.validateType = this.element.dataset.validate || 'undefined';
    this.validateHintTxt = this.element.dataset.hint || 'undefined';
    this.init();
}
ValidateForm.prototype.init = function () {
    this.render();
    this.validateEvents();
};
ValidateForm.prototype.render = function () {
    this.renderWrap();
    this.renderHint();
};
ValidateForm.prototype.renderWrap = function () {
    this.wrapDom = this.element.parentNode;
    if (this.wrapDom && getComputedStyle(this.wrapDom).position == 'static') {
        this.wrapDom.style.position = 'relative';
    }
};
ValidateForm.prototype.renderHint = function () {
    this.hintDom = document.createElement('span');
    this.hintDom.classList.add(this.hintClass);
};
ValidateForm.prototype.renderHintAdd = function (json) {
    //只有没被隐藏的才进行验证
    if (this.element.offsetWidth) {
        var opts = json || {};
        this.hintDom.innerHTML = opts.txt || '本项必填';
        this.wrapDom.appendChild(this.hintDom);
    }
};
ValidateForm.prototype.renderHintRemove = function () {
    var isHaveHintDom = this.wrapDom.querySelector('.' + this.hintClass);
    if (isHaveHintDom) {
        this.wrapDom.removeChild(this.hintDom);
    }
};
ValidateForm.prototype.validateSave = function () {
    var self = this;
    var type = self.validateType.split(' ');
    var hintTxt = self.validateHintTxt.split(' ');
    var value = this.element.value;
    this.isValidateSuccess = true; //是否验证成功了
    type.forEach(function (v, i) {
        if (v == 'no-space' && self.isValidateSuccess) {
            //设置了非空验证
            validate.isSpace({
                value: value,
                success: function success() {
                    //空
                    self.renderHintAdd({ txt: hintTxt[i] });
                    self.isValidateSuccess = false;
                },
                failure: function failure() {
                    //非空
                    self.renderHintRemove();
                    self.isValidateSuccess = true;
                }
            });
        }
        if (v == 'no-zero' && self.isValidateSuccess) {
            //设置了非零验证
            validate.isZero({
                value: value,
                success: function success() {
                    //零
                    self.renderHintAdd({ txt: hintTxt[i] });
                    self.isValidateSuccess = false;
                },
                failure: function failure() {
                    //非零
                    self.renderHintRemove();
                    self.isValidateSuccess = true;
                }
            });
        }
        if (v == 'yes-integer' && self.isValidateSuccess) {
            //设置了整数验证
            validate.isInteger({
                value: value,
                success: function success() {
                    //整数
                    self.renderHintRemove();
                    self.isValidateSuccess = true;
                },
                failure: function failure() {
                    //非整数
                    self.renderHintAdd({ txt: hintTxt[i] });
                    self.isValidateSuccess = false;
                }
            });
        }
    });
};
ValidateForm.prototype.validateEvents = function () {
    var self = this;
    if (self.element) {
        self.element.addEventListener(self.eventsType, function () {
            self.validateSave();
        });
    }
};

module.exports = ValidateForm;

/***/ })

},[26]);