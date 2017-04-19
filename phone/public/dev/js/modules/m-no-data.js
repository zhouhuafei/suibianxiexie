//底层方法
var base = require('../base/base.js');

//超类型(子类型继承的对象)
var SuperType = require('../modules/m-super-type.js');

//子类型
var SubType = base.constructorInherit({
    superType: SuperType,
    //默认参数(继承超类型)
    parameter: {
        //回调
        callback: {},
        //配置
        config: {},
        //数据
        data: {
            icon: 'icon-meiyoushuju',
            txt: '没有数据',
            btn: {
                txt: '回首页',
                href: '/'
            }
        }
    }
});

//内部模块的创建(覆盖超类型)
SubType.prototype.moduleDomCreate = function () {
    var data = this.opt.data;
    this.moduleDom = base.createElement({
        style: this.opt.config.moduleStyle,
        custom: this.opt.config.moduleDomCustomAttr,
        attribute: {
            className: `m-no-data`,
            innerHTML: `
                <div class="m-no-data-icon iconfont ${data.icon}"></div>
                <div class="m-no-data-txt">${data.txt}</div>
                <a class="m-no-data-btn g-button g-button-highlight" href="${data.btn.href}">
                    <div class="g-button-icon iconfont"></div>
                    <div class="g-button-txt">${data.btn.txt}</div>
                </a>
            `
        }
    });
};

//功能(覆盖超类型)
SubType.prototype.power = function () {
    //功能重写待续...
};

module.exports = SubType;