var base = require('../base/base.js');

function ValidateInput(json) {
    this.opt = json || {};
    this.input = this.opt.input;
    this.parentClass = this.opt.parentClass || 'm-validate-input-parent';
    this.hintClass = this.opt.hintClass || 'm-validate-input-hint';
    this.errorClass = this.opt.errorClass || 'm-validate-input-error';
    this.validateType = this.input.dataset.validate || [];
    this.validateHintTxt = this.input.dataset.hint || [];
    this.init();
}
ValidateInput.prototype.init = function () {
    this.require();
    this.render();
};
ValidateInput.prototype.require = function () {
    this.validate = require('../function/validate');
};
ValidateInput.prototype.render = function () {
    this.renderParent();
    this.renderHint();
};
ValidateInput.prototype.renderParent = function () {
    this.parentDom = this.input.parentNode;
    this.parentDom.classList.add(this.parentClass);
};
ValidateInput.prototype.renderHint = function () {
    this.hintDom = document.createElement('em');
    this.hintDom.classList.add(this.hintClass);
};
ValidateInput.prototype.renderHintAdd = function (json) {
    var opt = json || {};
    this.hintDom.innerHTML = opt.txt || '本项必填';
    this.parentDom.appendChild(this.hintDom);
    this.input.classList.add(this.errorClass);
};
ValidateInput.prototype.renderHintRemove = function () {
    var isHaveHintDom = this.parentDom.querySelector(`.${this.hintClass}`);
    if (isHaveHintDom) {
        this.parentDom.removeChild(this.hintDom);
    }
    this.input.classList.remove(this.errorClass);
};
ValidateInput.prototype.validateSave = function () {
    var self = this;
    var type = self.validateType.split(' ');
    var hintTxt = self.validateHintTxt.split(' ');
    var value = this.input.value;
    var isTrue = true;
    type.forEach(function (v, i) {
        if (v == 'no-space' && isTrue) {//设置了非空验证
            self.validate.isSpace({
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
            self.validate.isZero({
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
            self.validate.isInteger({
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
    if (self.input) {
        self.input.addEventListener('blur', function () {
            self.validateSave();
        });
    }
};

module.exports = ValidateInput;