//底层方法
var base = require('../base/base.js');

//超类型(子类型继承的对象)
var SuperType = require('../modules/m-super-type.js');

//子类型
var SubType = base.constructorInherit({
    superType: SuperType,
    parameter: {
        data:{

        }
    }
});

//内部模块的创建
SubType.prototype.moduleDomCreate = function () {
    this.moduleDom = base.createElement({
        style: this.opt.config.moduleStyle,
        custom: this.opt.config.moduleDomCustomAttr,
        attribute: {
            className: `m-no-data`,
            innerHTML: `
                <div class="m-no-data-icon iconfont icon-meiyoushuju"></div>
                <div class="m-no-data-txt">没有数据</div>
                <a class="m-no-data-btn g-button g-button-highlight" href="/">回首页</a>
            `
        }
    });
};

module.exports = SubType;