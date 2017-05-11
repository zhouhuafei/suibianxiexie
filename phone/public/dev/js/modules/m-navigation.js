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
        data: {
            items: [
                {
                    link: '/',
                    icon: 'icon-shouye',
                    txt: '首页',
                    isShowMark: false
                },
                {
                    link: '/dev-global',
                    icon: 'icon-kaifa',
                    txt: 'g-global',
                    isShowMark: false
                },
                {
                    link: '/dev-module',
                    icon: 'icon-kaifa',
                    txt: 'm-module',
                    isShowMark: true
                },
                {
                    link: '/dev-word',
                    icon: 'icon-kaifa',
                    txt: '标准词汇',
                    isShowMark: false
                },
                {
                    link: '/mine',
                    icon: 'icon-wode',
                    txt: '我的',
                    isShowMark: false
                }
            ]
        }
    }
});

//内部模块的创建(覆盖超类型)
SubType.prototype.moduleDomCreate = function () {
    var data = this.opts.data;
    var items = data.items;
    var html = ``;
    items.forEach(function (v) {
        var markHtml = ``;
        if (v.isShowMark) {
            markHtml = `<div class="m-navigation-mark"></div>`;
        }
        html += `
            <a href="${v.link}" class="m-navigation-wrap">
                <div class="m-navigation-icon iconfont ${v.icon}"></div>
                <div class="m-navigation-txt">${v.txt}</div>
                ${markHtml}
            </a>
        `;
    });
    this.moduleDom = createElement({
        style: this.opts.config.moduleDomStyle,
        custom: this.opts.config.moduleDomCustomAttr,
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