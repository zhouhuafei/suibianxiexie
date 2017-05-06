//底层方法
var base = require('../base/base');

//超类型(子类型继承的对象)
var SuperType = require('../modules/m-super-type');

//子类型
var SubType = base.constructorInherit({
    superType: SuperType,
    //默认参数(继承超类型)
    parameter: {
        //回调
        callback: {
            click: function () {
            },
            moduleDomRenderBefore: function (self) {
                if (self.wrapDom&&getComputedStyle(self.wrapDom).position == 'static') {
                    self.wrapDom.style.position = 'relative';
                }
            }
        },
        //配置
        config: {
            isTransparent: false,//是不是透明的(默认不透明)
            moduleDomIsShow: false//内部模块是否显示(默认不显示)
        },
        //数据
        data:{}
    }
});

//内部模块的创建(覆盖超类型)
SubType.prototype.moduleDomCreate = function () {
    var isTransparent = '';
    if (this.options.config.isTransparent) {
        isTransparent = 'm-mask-transparent';
    }
    this.moduleDom = base.createElement({
        style: this.options.config.moduleStyle,
        custom: this.options.config.moduleDomCustomAttr,
        attribute: {
            className: `m-mask ${isTransparent}`,
            innerHTML: ``
        }
    });
};

//功能(覆盖超类型)
SubType.prototype.power = function () {
    var self = this;
    this.moduleDom.addEventListener('click', function (ev) {
        self.options.callback.click();
        ev.stopPropagation();
    })
};

module.exports = SubType;