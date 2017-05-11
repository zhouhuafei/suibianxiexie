var createElement = require('../function/create-element');//创建元素节点
var constructorInherit = require('../function/constructor-inherit');//构造函数的继承(拷贝继承)
var scrollTo=require('../function/scroll-to');//滚动到指定位置
var SuperType = require('../modules/m-super-type');//超类型(子类型继承的对象)

//子类型
var SubType = constructorInherit({
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
    this.moduleDom = createElement({
        style: this.opts.config.moduleDomStyle,
        custom: this.opts.config.moduleDomCustomAttr,
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
        scrollTo({to: '0'});
    });
    window.addEventListener('scroll', function () {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop >= self.opts.config.showHeight) {
            self.moduleDom.classList.add('m-go-top-active');
        } else {
            self.moduleDom.classList.remove('m-go-top-active');
        }
    })
};

module.exports = SubType;