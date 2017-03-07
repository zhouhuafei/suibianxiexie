//底层方法
var base = require('../base/base');

//构造函数
function Fn(json) {
    this.opt = base.objExtend({
        defaults: {
            parent: ``
        },
        inherits: json
    });
    this.init();
}

//初始化
Fn.prototype.init = function () {
    this.render();
};


//渲染
Fn.prototype.render = function () {
    this.renderModuleDom();
    this.renderParentDom();
};

//内部的模块
Fn.prototype.renderModuleDom = function () {
    this.moduleDom = document.createElement('div');
    this.moduleDom.className = ``;
    this.moduleDom.innerHTML = `
        <div>
            module
        </div>
    `;
};

//外部的容器
Fn.prototype.renderParentDom = function () {
    if (this.opt.parent) {
        //如果是字符串
        if (Object.prototype.toString.call(this.opt.parent).slice(8, -1).toLowerCase() == 'string') {
            this.parentDom = document.querySelector(this.opt.parent);
        }
        //如果是dom节点
        if (this.opt.parent.nodeType && this.opt.parent.nodeType == 1) {
            this.parentDom = this.opt.parent;
        }
    }
    if (this.parentDom) {
        this.parentDom.appendChild(this.moduleDom);
    }
};

//移除内部的模块
Fn.prototype.removeModuleDom = function () {
    if (this.moduleDom.parentNode) {
        this.moduleDom.parentNode.removeChild(this.moduleDom);
    }
};

//移除外部的容器
Fn.prototype.removeparentDom = function () {
    if (this.parentDom) {
        this.parentDom.parentNode.removeChild(this.parentDom);
    }
};

//重新渲染
Fn.prototype.refreshRender = function () {
    this.removeModuleDom();
    this.render();
    if (this.parentDom) {
        this.parentDom.appendChild(this.moduleDom);
    }
};

module.exports = Fn;