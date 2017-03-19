//底层方法
var base = require('../base/base');

//构造函数
function Fn(json) {
    //外部传进来的参数
    this.opt = base.extend({
        defaults: {
            //父级
            parent: `body`,//这个仅支持传入选择器和原生dom节点
            //回调
            callback: {
                click: function () {
                }
            },
            //配置
            config: {
                isClearTimer: true,//是否清除所有定时器(默认清除)
                isShowModule: true//是否显示模块(默认显示)
            },
            //数据
            data: {
                info: `周华飞测试`
            }
        },
        inherits: json
    });
    //内部的一些属性
    this.moduleDom = null;//内部的模块
    this.parentDom = null;//内部模块的外部承载容器,如果没有也没关系,不过不往里面append罢了
    this.timer = {};//假设内部有定时器
    this.init();//初始化
}

//初始化
Fn.prototype.init = function () {
    this.render();
    this.power();
};

//渲染
Fn.prototype.render = function () {
    this.renderModuleDom();
    this.renderParentDom();
};

//内部的模块
Fn.prototype.renderModuleDom = function () {
    this.moduleDom = base.createElement({
        custom: {
            index: 0
        },
        attribute: {
            className: `m-test`,
            innerHTML: `
                <div class="m-test-timer">0</div>
                <div class="m-test-info">${this.opt.data.info}</div>
            `
        }
    });
};

//外部的容器
Fn.prototype.renderParentDom = function () {
    this.parentDom = base.getOneDom({dom: this.opt.parent});
    if (!this.parentDom) {
        return false;
    }
    if (this.parentDom) {
        if (this.opt.config.isShowModule) {
            this.parentDom.appendChild(this.moduleDom);
        }
    }
};

//移除内部的模块
Fn.prototype.removeModuleDom = function () {
    if (this.moduleDom.parentNode) {
        this.moduleDom.parentNode.removeChild(this.moduleDom);
    }
    //继续清除一些其他东西,例如定时器(假设有定时器需要被清除)
    if (this.opt.config.isClearTimer) {
        for (var attr in this.timer) {
            if (this.timer.hasOwnProperty(attr)) {
                clearInterval(this.timer[attr]);
                clearTimeout(this.timer[attr]);
            }
        }
    }
};

//移除外部的容器
Fn.prototype.removeParentDom = function () {
    //先移除内部的模块
    this.removeModuleDom();
    //再移除外部的容器
    if (this.parentDom) {
        this.parentDom.parentNode.removeChild(this.parentDom);
    }
};

//模块显示
Fn.prototype.show = function () {
    if(this.parentDom){
        this.parentDom.appendChild(this.moduleDom);
    }
};

//模块隐藏
Fn.prototype.hide = function () {
    if (this.moduleDom.parentNode) {
        this.moduleDom.parentNode.removeChild(this.moduleDom);
    }
};

//功能
Fn.prototype.power = function () {
    var interval = this.moduleDom.querySelector('.m-test-timer');
    this.timer.timer1 = setInterval(function () {
        interval.innerHTML = interval.innerHTML * 1 + 1;
    }, 1000);
};

module.exports = Fn;