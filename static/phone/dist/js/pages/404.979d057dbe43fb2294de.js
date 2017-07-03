webpackJsonp([5],{

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(3);
__webpack_require__(16);
window.addEventListener('load', function () {
    setTimeout(function () {

        //没有数据
        (function () {
            var NoData = __webpack_require__(7);
            new NoData({
                data: {
                    txt: '404 - Not Find'
                }
            });
        })();

        __webpack_require__(4); //每个页面都要用到的js(一定要放到最底部)
    }, 0);
});

/***/ }),

/***/ 16:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

var createElement = __webpack_require__(0); //创建元素节点
var constructorInherit = __webpack_require__(2); //构造函数的继承(拷贝继承)
var SuperType = __webpack_require__(1); //超类型(子类型继承的对象)

//子类型
var SubType = constructorInherit({
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
                link: '/phone/'
            }
        }
    }
});

//内部模块的创建(覆盖超类型)
SubType.prototype.moduleDomCreate = function () {
    var data = this.opts.data;
    var btnIconHtml = ``;
    if (this.opts.config.btn.isShowIcon) {
        btnIconHtml = `<div class="g-btn-icon iconfont ${data.btn.icon}"></div>`;
    }
    this.moduleDom = createElement({
        style: this.opts.config.moduleStyle,
        custom: this.opts.config.moduleDomCustomAttr,
        attribute: {
            className: `m-no-data`,
            innerHTML: `
                <div class="m-no-data-icon iconfont ${data.icon}"></div>
                <div class="m-no-data-txt">${data.txt}</div>
                <a class="m-no-data-btn g-btn g-btn-confirm" href="${data.btn.link}">
                    ${btnIconHtml}
                    <div class="g-btn-txt">${data.btn.txt}</div>
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

/***/ })

},[15]);