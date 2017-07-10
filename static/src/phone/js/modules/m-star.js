let tools = require('../base/tools');//工具方法集合
let applications = require('../base/applications');//应用方法集合
let SuperType = require('../modules/m-super-type');//超类型(子类型继承的对象)

//子类型
var SubType = tools.constructorInherit({
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
            isHaveEvent: true,//是否具备事件(默认具备)
            allStarNum: 5,//所有的星星数
            nowStarNum: 4//当前被选择的星星数
        },
        //数据
        data: {}
    }
});

//内部模块的创建(覆盖超类型)
SubType.prototype.moduleDomCreate = function () {
    var html = ``;
    for (var i = 0; i < this.opts.config.allStarNum; i++) {
        var className = '';
        if (i < this.opts.config.nowStarNum) {
            className = 'm-star-items-active';
        }
        html += `<div data-index="${i}" class="iconfont icon-xingping m-star-items ${className}"></div>`;
    }
    this.moduleDom = applications.createElement({
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
                for (var j = 0; j < self.opts.config.allStarNum; j++) {
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