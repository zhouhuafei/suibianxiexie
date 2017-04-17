//底层方法
var base = require('../base/base.js');

//超类型(子类型继承的对象)
var SuperType = require('../modules/m-super-type.js');

//子类型
var SubType = base.constructorInherit({
    superType: SuperType,
    parameter: {
        //回调
        callback: {
            moduleDomClick: function () {
            },
            moduleDomRenderBefore: function (self) {
                if (self.wrapDom&&getComputedStyle(self.wrapDom).position == 'static') {
                    self.wrapDom.style.position = 'relative';
                }
            }
        },
        //配置
        config: {
            moduleDomIsTransparent: false,//内部模块是不是透明的(默认不透明)
            moduleDomIsShow: false//内部模块是否显示(默认不显示)
        }
    }
});

//内部模块的创建(覆盖超类)
SubType.prototype.moduleDomCreate = function () {
    var isTransparent = '';
    if (this.opt.config.isTransparent) {
        isTransparent = 'm-mask-transparent';
    }
    this.moduleDom = base.createElement({
        style: this.opt.config.moduleStyle,
        custom: this.opt.config.moduleDomCustomAttr,
        attribute: {
            className: `m-mask ${isTransparent}`,
            innerHTML: ``
        }
    });
};

//功能(覆盖超类)
SubType.prototype.power = function () {
    var self = this;
    this.moduleDom.addEventListener('click', function (ev) {
        self.opt.callback.moduleDomClick();
        ev.stopPropagation();
    })
};

module.exports = SubType;