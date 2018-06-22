webpackJsonp([1],{

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var tools = __webpack_require__(0); // 工具方法集合
var applications = __webpack_require__(1); // 应用方法集合
var Super = __webpack_require__(2); // 超类型(子类型继承的对象)

// 子类型
var Sub = tools.constructorInherit(Super, {
    // 回调
    callback: {
        click: function click(obj) {}
    },
    // 配置
    config: {
        isHaveEvent: true, // 是否具备事件(默认具备)
        allStarNum: 5, // 所有的星星数
        nowStarNum: 4 // 当前被选择的星星数
    },
    // 数据
    data: {}
});

// (建)(覆)内部模块的创建(覆盖超类型)
Sub.prototype.moduleDomCreate = function () {
    var html = '';
    for (var i = 0; i < this.opts.config.allStarNum; i++) {
        var className = '';
        if (i < this.opts.config.nowStarNum) {
            className = 'g-star-item-active';
        }
        html += '<div data-index="' + i + '" class="iconfont icon-star g-star-item ' + className + '"></div>';
    }
    this.moduleDom = applications.createElement({
        style: this.opts.config.moduleDomStyle,
        customAttribute: this.opts.config.moduleDomCustomAttribute,
        attribute: {
            className: 'g-star',
            innerHTML: html
        }
    });
    this.opts.star = this.moduleDom.children;
};

// (功)(覆)功能(覆盖超类型)
Sub.prototype.power = function () {
    var self = this;
    if (this.opts.config.isHaveEvent) {
        this.moduleDom.addEventListener('click', function (ev) {
            var target = ev.target;
            if (target.classList.contains('g-star-item')) {
                var index = target.dataset.index;
                for (var j = 0; j < self.opts.config.allStarNum; j++) {
                    if (j <= index) {
                        self.opts.star[j].classList.add('g-star-item-active');
                    } else {
                        self.opts.star[j].classList.remove('g-star-item-active');
                    }
                }
                self.opts.callback.click({ element: this, index: index });
            }
        });
    }
};

module.exports = Sub;

/***/ })

});