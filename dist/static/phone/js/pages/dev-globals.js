webpackJsonp([6],{

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


window.addEventListener('load', function () {
    setTimeout(function () {
        var applications = __webpack_require__(0);

        // base函数测试
        (function () {
            // 测试全选
            var Select = applications.select();
            new Select({
                items: '.g-checkbox-checkbox',
                callback: {
                    click: function click(obj) {
                        console.log(obj);
                    }
                }
            });
        })();

        // 验证
        (function () {
            var ValidateInput = __webpack_require__(27);
            var aInput = [].slice.call(document.querySelectorAll('.page-validate-form'));
            aInput.forEach(function (v) {
                new ValidateInput({ element: v });
            });
        })();

        __webpack_require__(28); // 当前页面用到的样式
        var common = __webpack_require__(3); // 每个页面都要用到的js(一定要放到最底部)
    }, 0);
});

/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var tools = __webpack_require__(1); // 工具方法集合
var applications = __webpack_require__(0); // 应用方法集合

function ValidateForm(json) {
    this.opts = json || {};
    this.element = applications.getDomArray(this.opts.element)[0];
    this.hintClass = this.opts.hintClass || 'g-validate-form-hint';
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
    if (this.wrapDom && getComputedStyle(this.wrapDom).position === 'static') {
        this.wrapDom.style.position = 'relative';
    }
};
ValidateForm.prototype.renderHint = function () {
    this.hintDom = document.createElement('span');
    this.hintDom.classList.add(this.hintClass);
};
ValidateForm.prototype.renderHintAdd = function (json) {
    // 只有没被隐藏的才进行验证
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
    this.isValidateSuccess = true; // 是否验证成功了
    type.forEach(function (v, i) {
        if (v === 'no-space' && self.isValidateSuccess) {
            // 设置了非空验证
            if (tools.isEmpty(value)) {
                self.renderHintAdd({ txt: hintTxt[i] });
                self.isValidateSuccess = false;
            } else {
                self.renderHintRemove();
                self.isValidateSuccess = true;
            }
        }
        if (v === 'no-zero' && self.isValidateSuccess) {
            // 设置了非零验证
            if (tools.isZero(value)) {
                self.renderHintAdd({ txt: hintTxt[i] });
                self.isValidateSuccess = false;
            } else {
                self.renderHintRemove();
                self.isValidateSuccess = true;
            }
        }
        if (v === 'yes-positive-integer' && self.isValidateSuccess) {
            // 设置了正整数验证
            if (tools.isPositiveInteger(value)) {
                self.renderHintRemove();
                self.isValidateSuccess = true;
            } else {
                self.renderHintAdd({ txt: hintTxt[i] });
                self.isValidateSuccess = false;
            }
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

/***/ 28:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[26]);