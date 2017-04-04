//底层方法
var base = require('../base/base.js');

//超类型(子类型继承的对象)
var SuperType = require('../modules/m-super-type.js');

//子类型
var SubType = base.constructorInherit({
    superType: SuperType,
    parameter: {
        //回调
        callback: {
            moduleDomClick: function () {
            }
        },
        config: {
            showHeight: 200
        }
    }
});

SubType.prototype.moduleDomCreate = function () {
    this.moduleDom = base.createElement({
        attribute: {
            className: `m-go-top`,
            innerHTML: `<div class="m-go-top-icon iconfont icon-shangjiantou"></div>`
        }
    });
};

SubType.prototype.power = function () {
    var self = this;
    this.moduleDom.addEventListener('click', function () {
        base.scrollTo({to: '0'});
    });
    window.addEventListener('scroll', function () {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop >= self.opt.config.showHeight) {
            self.moduleDom.classList.add('m-go-top-active');
        } else {
            self.moduleDom.classList.remove('m-go-top-active');
        }
    })
};
module.exports = SubType;