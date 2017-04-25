//底层方法
var base = require('../base/base.js');

//超类型(子类型继承的对象)
var SuperType = require('../modules/m-super-type.js');

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
    for (var i = 0; i < this.opt.data.allStarNum; i++) {
        var className = '';
        if (i < this.opt.data.nowStarNum) {
            className = 'm-star-item-active';
        }
        html += `<div data-index="${i}" class="iconfont icon-xingping m-star-item ${className}"></div>`;
    }
    this.moduleDom = base.createElement({
        style: this.opt.config.moduleDomStyle,
        custom: this.opt.config.moduleDomCustomAttr,
        attribute: {
            className: `m-star`,
            innerHTML: html
        }
    });
    this.opt.star = this.moduleDom.children;
};

//功能(覆盖超类型)
SubType.prototype.power = function () {
    var self = this;
    if (this.opt.config.isHaveEvent) {
        this.moduleDom.addEventListener('click', function (ev) {
            var target = ev.target;
            if (target.classList.contains('m-star-item')) {
                var index = target.dataset.index;
                for (var j = 0; j < self.opt.data.allStarNum; j++) {
                    if (j <= index) {
                        self.opt.star[j].classList.add('m-star-item-active');
                    } else {
                        self.opt.star[j].classList.remove('m-star-item-active');
                    }
                }
                self.opt.callback.click({obj: this, index: index});
            }
        })
    }
};

module.exports = SubType;