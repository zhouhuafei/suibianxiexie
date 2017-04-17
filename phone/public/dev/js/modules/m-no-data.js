//底层方法
var base = require('../base/base.js');

//超类型(子类型继承的对象)
var SuperType = require('../modules/m-super-type.js');

//子类型
var SubType = base.constructorInherit({
    superType: SuperType,
    parameter: {
        data:{
            icon:'icon-meiyoushuju',
            txt:'没有数据',
            btn:{
                txt:'回首页',
                href:'/'
            }
        }
    }
});

//内部模块的创建
SubType.prototype.moduleDomCreate = function () {
    var data=this.opt.data;
    this.moduleDom = base.createElement({
        style: this.opt.config.moduleStyle,
        custom: this.opt.config.moduleDomCustomAttr,
        attribute: {
            className: `m-no-data`,
            innerHTML: `
                <div class="m-no-data-icon iconfont ${data.icon}"></div>
                <div class="m-no-data-txt">${data.txt}</div>
                <a class="m-no-data-btn g-button g-button-highlight" href="${data.btn.href}">${data.btn.txt}</a>
            `
        }
    });
};

module.exports = SubType;