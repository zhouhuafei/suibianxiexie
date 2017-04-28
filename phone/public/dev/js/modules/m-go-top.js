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
        callback: {},
        //配置
        config: {
            showHeight: 200
        },
        //数据
        data: {}
    }
});

//内部模块的创建(覆盖超类型)
SubType.prototype.moduleDomCreate = function () {
    this.moduleDom = base.createElement({
        style: this.opt.config.moduleDomStyle,
        custom: this.opt.config.moduleDomCustomAttr,
        attribute: {
            className: `m-go-top`,
            innerHTML: `<div class="m-go-top-icon iconfont icon-shangjiantou"></div>`
        }
    });
};

//功能(覆盖超类型)
SubType.prototype.power = function () {
    var self = this;
    this.moduleDom.addEventListener('click', function () {
        base.scrollTo({to: '0'});
    });
    window.addEventListener('scroll', function () {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop >= self.opt.config.showHeight) {
            self.moduleDom.classList.add('m-go-top-active');
        } else {
            self.moduleDom.classList.remove('m-go-top-active');
        }
    })
};

module.exports = SubType;