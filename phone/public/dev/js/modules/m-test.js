//底层方法
var base = require('../base/base');

//构造函数
function Fn(json) {
    this.opt = base.extend({
        defaults: {
            parent: ``,
            data:{
                config:{
                    isShow:true
                },
                ajax:{
                    info:`周华飞测试`
                }
            }
        },
        inherits: json
    });
    this.init();
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
    this.moduleDom = document.createElement('div');
    this.moduleDom.className = ``;
    this.moduleDom.innerHTML = `
        <div>
            ${this.opt.data.ajax.info}
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
    //先清空
    this.removeModuleDom();
    //再填充
    if (this.parentDom) {
        this.parentDom.appendChild(this.moduleDom);
    }
};

//移除内部的模块
Fn.prototype.removeModuleDom = function () {
    if(this.parentDom){
        this.parentDom.innerHTML=``;
    }
    //继续清除一些其他东西,例如定时器
};

//移除外部的容器
Fn.prototype.removeParentDom = function () {
    if (this.parentDom) {
        this.parentDom.parentNode.removeChild(this.parentDom);
    }
};

//功能
Fn.prototype.power=function(){
    //如果有定时器,那么初始化的时候要先清除定时器,多个定时器可以存储成一个对象
    this.timer={
        one:null,
        two:null
    };
    // 重新初始化待续...
    // 1.事件会不会叠加(应该不对),
    // 2.定时器能清除掉么(应该可以清除,在移除内部的模块方法里进行清除),
    // 3.选人父级的那段判断是不是dom的代码是否可以封装成一个函数
    // 4.mask函数重新制作,变成模块
    // 5.function文件夹里的arrFindIndex删除
    // 6.function文件夹里能制作成模块的东西,进行模块制作,例如懒加载
    // 7.有些函数名字太长,需要进行重新命名,有些没必要的模块文件进行删除或者重写
    // 8.清零样式修改scss修改
};

module.exports = Fn;
