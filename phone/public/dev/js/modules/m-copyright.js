var createElement = require('../function/create-element');//创建元素节点
var constructorInherit = require('../tools/constructor-inherit');//构造函数的继承(拷贝继承)
var SuperType = require('../modules/m-super-type');//超类型(子类型继承的对象)

//子类型
var SubType = constructorInherit({
    superType: SuperType,
    //默认参数(继承超类型)
    parameter: {
        //回调
        callback: {},
        //配置
        config: {},
        //数据
        data: {}
    }
});

//内部模块的创建(覆盖超类型)
SubType.prototype.moduleDomCreate = function () {
    this.moduleDom = createElement({
        style: this.opts.config.moduleDomStyle,
        custom: this.opts.config.moduleDomCustomAttr,
        attribute: {
            className: `m-copyright`,
            innerHTML: `
                <div class="m-copyright-icon iconfont icon-banquan"></div>
                <div class="m-copyright-txt">版权信息哟</div>
            `
        }
    });
};

//功能(覆盖超类型)
SubType.prototype.power = function () {
    //功能重写待续...
};

module.exports = SubType;