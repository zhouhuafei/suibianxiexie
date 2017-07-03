webpackJsonp([3],{

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(3);
__webpack_require__(26);
window.addEventListener('load', function () {
    setTimeout(function () {

        //base函数测试
        (function () {
            var Select = __webpack_require__(27);
            //测试全选
            new Select({
                items: '.g-checkbox-checkbox',
                callback: {
                    click: function (obj) {
                        console.log(obj);
                    }
                }
            });
        })();

        //验证
        (function () {
            const ValidateInput = __webpack_require__(28);
            const aInput = [].slice.call(document.querySelectorAll('.m-validate-form'));
            aInput.forEach(function (v) {
                new ValidateInput({ element: v });
            });
        })();

        __webpack_require__(4); //每个页面都要用到的js(一定要放到最底部)
    }, 0);
});

/***/ }),

/***/ 26:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

//全选,不选,反选
var extend = __webpack_require__(5); //对象的扩展方法
var getDomArray = __webpack_require__(6); //获取原生的dom节点并转换成数组

function Select(json) {
    this.opts = extend({
        defaults: {
            items: null, //所有的被选项
            callback: {
                click: function () {}
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

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

var validate = __webpack_require__(29); //表单验证
var getDomArray = __webpack_require__(6); //获取原生的dom节点并转换成数组

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
    var isHaveHintDom = this.wrapDom.querySelector(`.${this.hintClass}`);
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
                success: function () {
                    //空
                    self.renderHintAdd({ txt: hintTxt[i] });
                    self.isValidateSuccess = false;
                },
                fail: function () {
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
                success: function () {
                    //零
                    self.renderHintAdd({ txt: hintTxt[i] });
                    self.isValidateSuccess = false;
                },
                fail: function () {
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
                success: function () {
                    //整数
                    self.renderHintRemove();
                    self.isValidateSuccess = true;
                },
                fail: function () {
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

/***/ }),

/***/ 29:
/***/ (function(module, exports) {

//验证
var validate = {
    //是不是空
    isSpace: function (json) {
        var opts = json || {};
        var success = opts.success || function () {
            console.log('no find success callback');
        };
        var fail = opts.fail || function () {
            console.log('no find fail callback');
        };
        var value = opts.value || " ";
        var valueTrim = value.trim();
        var b = false;
        if (valueTrim == '') {
            b = true;
            success();
        } else {
            fail();
        }
        return b;
    },
    //是不是0
    isZero: function (json) {
        var opts = json || {};
        var success = opts.success || function () {
            console.log('no find success callback');
        };
        var fail = opts.fail || function () {
            console.log('no find fail callback');
        };
        var value = opts.value || " ";
        var valueTrim = value.trim();
        var b = false;
        if (valueTrim == 0) {
            b = true;
            success();
        } else {
            fail();
        }
        return b;
    },
    //是不是整数(包含0)
    isInteger: function (json) {
        var opts = json || {};
        var success = opts.success || function () {
            console.log('no find success callback');
        };
        var fail = opts.fail || function () {
            console.log('no find fail callback');
        };
        var value = opts.value || " ";
        var valueTrim = value.trim();
        var reg = /^\d+$/;
        var b = false;
        if (reg.test(valueTrim)) {
            b = true;
            success();
        } else {
            fail();
        }
        return b;
    },
    //是不是保留了num位小数点
    isReservedDecimal: function (json) {
        var opts = json || {};
        var success = opts.success || function () {
            console.log('no find success callback');
        };
        var fail = opts.fail || function () {
            console.log('no find fail callback');
        };
        var num = opts.num || 2;
        var value = opts.value || " ";
        var valueTrim = value.trim();
        var reg = new RegExp("^\\d+\\.\\d{" + num + "}$");
        var b = false;
        if (reg.test(valueTrim)) {
            b = true;
            success();
        } else {
            fail();
        }
        return b;
    }
};

module.exports = validate;

/***/ })

},[25]);