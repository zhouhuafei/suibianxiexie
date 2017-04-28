var base = require('../base/base');//底层方法
var validate = require('../function/validate');//表单验证

function ValidateInput(json) {
    this.opt = json || {};
    this.form = this.opt.form;
    this.hintClass = this.opt.hintClass || 'm-validate-form-hint';
    this.errorClass = this.opt.errorClass || 'm-validate-form-error';
    this.validateType = this.form.dataset.validate || [];
    this.validateHintTxt = this.form.dataset.hint || [];
    this.init();
}
ValidateInput.prototype.init = function () {
    this.render();
};
ValidateInput.prototype.render = function () {
    this.renderWrap();
    this.renderHint();
};
ValidateInput.prototype.renderWrap = function () {
    this.wrapDom = this.form.parentNode;
    if (this.wrapDom && getComputedStyle(this.wrapDom).position == 'static') {
        this.wrapDom.style.position = 'relative';
    }
};
ValidateInput.prototype.renderHint = function () {
    this.hintDom = document.createElement('span');
    this.hintDom.classList.add(this.hintClass);
};
ValidateInput.prototype.renderHintAdd = function (json) {
    //只有没被隐藏的才进行验证
    if(this.form.offsetWidth){
        var opt = json || {};
        this.hintDom.innerHTML = opt.txt || '本项必填';
        this.wrapDom.appendChild(this.hintDom);
        this.form.classList.add(this.errorClass);
    }
};
ValidateInput.prototype.renderHintRemove = function () {
    var isHaveHintDom = this.wrapDom.querySelector(`.${this.hintClass}`);
    if (isHaveHintDom) {
        this.wrapDom.removeChild(this.hintDom);
    }
    this.form.classList.remove(this.errorClass);
};
ValidateInput.prototype.validateSave = function () {
    var self = this;
    var type = self.validateType.split(' ');
    var hintTxt = self.validateHintTxt.split(' ');
    var value = this.form.value;
    var isTrue = true;
    type.forEach(function (v, i) {
        if (v == 'no-space' && isTrue) {//设置了非空验证
            validate.isSpace({
                value: value,
                success: function () {//空
                    self.renderHintAdd({txt: hintTxt[i]});
                    isTrue = false;
                },
                fail: function () {//非空
                    self.renderHintRemove();
                    isTrue = true;
                }
            });
        }
        if (v == 'no-zero' && isTrue) {//设置了非零验证
            validate.isZero({
                value: value,
                success: function () {//零
                    self.renderHintAdd({txt: hintTxt[i]});
                    isTrue = false;
                },
                fail: function () {//非零
                    self.renderHintRemove();
                    isTrue = true;
                }
            });
        }
        if (v == 'yes-integer' && isTrue) {//设置了整数验证
            validate.isInteger({
                value: value,
                success: function () {//整数
                    self.renderHintRemove();
                    isTrue = true;
                },
                fail: function () {//非整数
                    self.renderHintAdd({txt: hintTxt[i]});
                    isTrue = false;
                }
            });
        }
    });
};
ValidateInput.prototype.validateEventBlur = function () {
    var self = this;
    if (self.form) {
        self.form.addEventListener('blur', function () {
            self.validateSave();
        });
    }
};

module.exports = ValidateInput;