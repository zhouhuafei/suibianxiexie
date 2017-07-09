let tools = require('../base/tools');//工具方法集合
let applications = require('../base/applications');//应用方法集合
let SuperType = require('../modules/m-super-type');//超类型(子类型继承的对象)

//子类型
var SubType = tools.constructorInherit({
    superType: SuperType,
    //默认参数(继承超类型)
    parameter: {
        //回调
        callback: {},
        //配置
        config: {
            btn: {
                isShowIcon: false
            }
        },
        //数据
        data: {
            icon: 'icon-meiyoushuju',
            txt: '没有数据',
            btn: {
                icon: 'icon-shouye',
                txt: '回首页',
                link: '/'
            }
        }
    }
});

//内部模块的创建(覆盖超类型)
SubType.prototype.moduleDomCreate = function () {
    var data = this.opts.data;
    var btnIconHtml = ``;
    if (this.opts.config.btn.isShowIcon) {
        btnIconHtml = `<div class="g-button-icon iconfont ${data.btn.icon}"></div>`;
    }
    this.moduleDom = applications.createElement({
        style: this.opts.config.moduleStyle,
        custom: this.opts.config.moduleDomCustomAttr,
        attribute: {
            className: `m-no-data`,
            innerHTML: `
                <div class="m-no-data-icon iconfont ${data.icon}"></div>
                <div class="m-no-data-txt">${data.txt}</div>
                <a class="m-no-data-btn g-button g-button-confirm" href="${data.btn.link}">
                    ${btnIconHtml}
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