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
        config: {},
        //数据
        data: {
            items: [
                {
                    href: '/',
                    icon: 'icon-shouye',
                    txt: '周',
                    mark: ''
                },
                {
                    href: '/mine',
                    icon: 'icon-wode',
                    txt: '华',
                    mark: ''
                },
                {
                    href: '/ui',
                    icon: 'icon-guanzhu',
                    txt: '飞',
                    mark: ''
                },
                {
                    href: '/set',
                    icon: 'icon-shezhi',
                    txt: '永',
                    mark: ''
                },
                {
                    href: '/cart',
                    icon: 'icon-gouwuche',
                    txt: '远',
                    mark: ''
                },
                {
                    href: '/',
                    icon: 'icon-shoucang',
                    txt: '爱',
                    mark: ''
                },
                {
                    href: '/mine',
                    icon: 'icon-shoucang',
                    txt: '侯',
                    mark: ''
                },
                {
                    href: '/ui',
                    icon: 'icon-shoucang',
                    txt: '丽',
                    mark: ''
                },
                {
                    href: '/set',
                    icon: 'icon-shoucang',
                    txt: '杰',
                    mark: ''
                },
                {
                    href: '/cart',
                    icon: 'icon-shoucang',
                    txt: '!',
                    mark: ''
                }
            ]
        }
    }
});

//内部模块的创建(覆盖超类型)
SubType.prototype.moduleDomCreate = function () {
    var data = this.opt.data;
    var items = data.items;
    var html = ``;
    items.forEach(function (v) {
        var markHtml = ``;
        if (v.mark) {
            markHtml = `<div class="m-navigation-mark">${v.mark}</div>`;
        }
        html += `
            <a href="${v.href}" class="m-navigation-wrap">
                <div class="m-navigation-icon iconfont ${v.icon}"></div>
                <div class="m-navigation-txt">${v.txt}</div>
                ${markHtml}
            </a>
        `;
    });
    this.moduleDom = base.createElement({
        style: this.opt.config.moduleDomStyle,
        custom: this.opt.config.moduleDomCustomAttr,
        attribute: {
            className: `m-navigation`,
            innerHTML: html
        }
    });
};

//功能(覆盖超类型)
SubType.prototype.power = function () {
    //功能重写待续...
};

module.exports = SubType;