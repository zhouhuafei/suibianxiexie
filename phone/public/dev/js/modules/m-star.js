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
            click: function (object) {
            }
        },
        //配置
        config: {
            isHaveEvent: true//是否具备事件(默认具备)
        },
        //数据
        data: {
            allStarNumber: 5,
            nowStarNumber: 4
        }
    }
});

//内部模块的创建(覆盖超类型)
SubType.prototype.moduleDomCreate = function () {
    var html = ``;
    for (var i = 0; i < this.options.data.allStarNumber; i++) {
        var className = '';
        if (i < this.options.data.nowStarNumber) {
            className = 'm-star-items-active';
        }
        html += `<div data-index="${i}" class="iconfont icon-xingping m-star-items ${className}"></div>`;
    }
    this.moduleDom = base.createElement({
        style: this.options.config.moduleDomStyle,
        custom: this.options.config.moduleDomCustomAttr,
        attribute: {
            className: `m-star`,
            innerHTML: html
        }
    });
    this.options.star = this.moduleDom.children;
};

//功能(覆盖超类型)
SubType.prototype.power = function () {
    var self = this;
    if (this.options.config.isHaveEvent) {
        this.moduleDom.addEventListener('click', function (ev) {
            var target = ev.target;
            if (target.classList.contains('m-star-items')) {
                var index = target.dataset.index;
                for (var j = 0; j < self.options.data.allStarNumber; j++) {
                    if (j <= index) {
                        self.options.star[j].classList.add('m-star-items-active');
                    } else {
                        self.options.star[j].classList.remove('m-star-items-active');
                    }
                }
                self.options.callback.click({element: this, index: index});
            }
        })
    }
};

module.exports = SubType;