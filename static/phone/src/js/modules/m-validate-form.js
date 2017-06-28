var validate = require('../tools/validate');//表单验证
var getDomArray = require('../function/get-dom-array');//获取原生的dom节点并转换成数组

function ValidateForm(json) {
    this.opts = json || {};
    this.element = getDomArray({element: this.opts.element})[0];
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
    this.isValidateSuccess = true;//是否验证成功了
    type.forEach(function (v, i) {
        if (v == 'no-space' && self.isValidateSuccess) {//设置了非空验证
            validate.isSpace({
                value: value,
                success: function () {//空
                    self.renderHintAdd({txt: hintTxt[i]});
                    self.isValidateSuccess = false;
                },
                fail: function () {//非空
                    self.renderHintRemove();
                    self.isValidateSuccess = true;
                }
            });
        }
        if (v == 'no-zero' && self.isValidateSuccess) {//设置了非零验证
            validate.isZero({
                value: value,
                success: function () {//零
                    self.renderHintAdd({txt: hintTxt[i]});
                    self.isValidateSuccess = false;
                },
                fail: function () {//非零
                    self.renderHintRemove();
                    self.isValidateSuccess = true;
                }
            });
        }
        if (v == 'yes-integer' && self.isValidateSuccess) {//设置了整数验证
            validate.isInteger({
                value: value,
                success: function () {//整数
                    self.renderHintRemove();
                    self.isValidateSuccess = true;
                },
                fail: function () {//非整数
                    self.renderHintAdd({txt: hintTxt[i]});
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