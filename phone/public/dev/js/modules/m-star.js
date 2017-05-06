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
        callback: {
            click: function (obj) {
            }
        },
        //配置
        config: {
            isHaveEvent: true//是否具备事件(默认具备)
        },
        //数据
        data: {
            allStarNum: 5,
            nowStarNum: 4
        }
    }
});

//内部模块的创建(覆盖超类型)
SubType.prototype.moduleDomCreate = function () {
    var html = ``;
    for (var i = 0; i < this.opts.data.allStarNum; i++) {
        var className = '';
        if (i < this.opts.data.nowStarNum) {
            className = 'm-star-items-active';
        }
        html += `<div data-index="${i}" class="iconfont icon-xingping m-star-items ${className}"></div>`;
    }
    this.moduleDom = base.createElement({
        style: this.opts.config.moduleDomStyle,
        custom: this.opts.config.moduleDomCustomAttr,
        attribute: {
            className: `m-star`,
            innerHTML: html
        }
    });
    this.opts.star = this.moduleDom.children;
};

//功能(覆盖超类型)
SubType.prototype.power = function () {
    var self = this;
    if (this.opts.config.isHaveEvent) {
        this.moduleDom.addEventListener('click', function (ev) {
            var target = ev.target;
            if (target.classList.contains('m-star-items')) {
                var index = target.dataset.index;
                for (var j = 0; j < self.opts.data.allStarNum; j++) {
                    if (j <= index) {
                        self.opts.star[j].classList.add('m-star-items-active');
                    } else {
                        self.opts.star[j].classList.remove('m-star-items-active');
                    }
                }
                self.opts.callback.click({element: this, index: index});
            }
        })
    }
};

module.exports = SubType;