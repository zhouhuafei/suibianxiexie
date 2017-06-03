var createElement = require('../function/create-element');//创建元素节点
var constructorInherit = require('../tools/constructor-inherit');//构造函数的继承(拷贝继承)
var SuperType = require('../modules/m-super-type');//超类型(子类型继承的对象)

//子类型
var SubType = constructorInherit({
    superType: SuperType,
    //默认参数(继承超类型)
    parameter: {
        //回调
        callback: {
            click: function () {
            }
        },
        //配置
        config: {
            isHand: false,//是否手动控制
            status: 'on',//状态
            txt: {
                on: '已开启',
                off: '已关闭'
            }
        },
        //数据
        data: {}
    }
});

//内部模块的创建(覆盖超类型)
SubType.prototype.moduleDomCreate = function () {
    var config = this.opts.config;
    this.moduleDomActiveClass = `m-radio-switch-active`;
    var isOn = ``;
    if (config.status == 'on') {
        isOn = this.moduleDomActiveClass;
    }
    this.moduleDom = createElement({
        style: config.moduleStyle,
        custom: config.moduleDomCustomAttr,
        attribute: {
            className: `m-radio-switch ${isOn}`,
            innerHTML: `
                <div class="m-radio-switch-wrap">
                    <div class="m-radio-switch-round"></div>
                </div>
                <div class="m-radio-switch-txt">${config.txt[config.status]}</div>
            `
        }
    });
};

//功能(覆盖超类型)
SubType.prototype.power = function () {
    var self = this;
    var config = this.opts.config;
    this.moduleDom.addEventListener('click', function () {
        if (!config.isHand) {
            if (!self.isOn()) {
                self.on();
            } else {
                self.off();
            }
        }
        self.opts.callback.click({status: config.status});
    })
};

//是否处于开启状态
SubType.prototype.isOn = function () {
    return this.moduleDom.classList.contains(this.moduleDomActiveClass);
};

//开启
SubType.prototype.on = function () {
    var config = this.opts.config;
    if (!this.isOn()) {
        this.moduleDom.classList.add(this.moduleDomActiveClass);
        config.status = 'on';
        this.moduleDom.querySelector('.m-radio-switch-txt').innerHTML = `${config.txt[config.status]}`;
    }
};

//关闭
SubType.prototype.off = function () {
    var config = this.opts.config;
    if (this.isOn()) {
        this.moduleDom.classList.remove(this.moduleDomActiveClass);
        config.status = 'off';
        this.moduleDom.querySelector('.m-radio-switch-txt').innerHTML = `${config.txt[config.status]}`;
    }
};

module.exports = SubType;