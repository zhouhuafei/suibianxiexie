webpackJsonp([5],{

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


window.addEventListener('load', function () {
    setTimeout(function () {
        __webpack_require__(14);
        var header = __webpack_require__(3); //每个页面都要用到的js(一定要放到最顶部)

        //没有数据
        (function () {
            var NoData = __webpack_require__(5);
            new NoData({
                data: {
                    txt: '404 - Not Find'
                }
            });
        })();

        var footer = __webpack_require__(4); //每个页面都要用到的js(一定要放到最底部)
    }, 0);
});

/***/ }),

/***/ 14:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var tools = __webpack_require__(0); //工具方法集合
var applications = __webpack_require__(1); //应用方法集合
var SuperType = __webpack_require__(2); //超类型(子类型继承的对象)

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
    var btnIconHtml = '';
    if (this.opts.config.btn.isShowIcon) {
        btnIconHtml = '<div class="g-button-icon iconfont ' + data.btn.icon + '"></div>';
    }
    this.moduleDom = applications.createElement({
        style: this.opts.config.moduleStyle,
        custom: this.opts.config.moduleDomCustomAttr,
        attribute: {
            className: 'm-no-data',
            innerHTML: '\n                <div class="m-no-data-icon iconfont ' + data.icon + '"></div>\n                <div class="m-no-data-txt">' + data.txt + '</div>\n                <a class="m-no-data-btn g-button g-button-confirm" href="' + data.btn.link + '">\n                    ' + btnIconHtml + '\n                    <div class="g-button-txt">' + data.btn.txt + '</div>\n                </a>\n            '
        }
    });
};

//功能(覆盖超类型)
SubType.prototype.power = function () {
    //功能重写待续...
};

module.exports = SubType;

/***/ })

},[13]);