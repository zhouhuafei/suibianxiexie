//底层方法
var base = require('../base/base.js');

//超类型(子类型继承的对象)
var SuperType = require('../modules/m-super-type.js');

//子类型
var SubType = base.constructorInherit({
    superType: SuperType,
    parameter: {
        //数据
        data:{

        }
    }
});

//内部模块的创建
SubType.prototype.moduleDomCreate = function () {
    this.moduleDom = base.createElement({
        attribute: {
            className: `m-copyright`,
            innerHTML: `
                <div class="m-copyright-icon iconfont icon-banquan"></div>
                <div class="m-copyright-txt">版权信息哟</div>
            `
        }
    });
};

module.exports = SubType;