//底层方法
var base = require('../base/base');

//构造函数
function Fn(json) {
    //外部传进来的参数
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
    //内部的一些属性
    this.moduleDom=null;//内部的模块
    this.parentDom=null;//内部模块的外部承载容器,如果没有也没关系,不过不往里面append罢了
    this.timer={};//假设内部有定时器
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
    //继续清除一些其他东西,例如定时器(假设有定时器需要被清除)
    for(var attr in this.timer){
        if(this.timer.hasOwnProperty(attr)){
            clearInterval(this.timer[attr]);
            clearTimeout(this.timer[attr]);
        }
    }
};

//移除外部的容器
Fn.prototype.removeParentDom = function () {
    if (this.parentDom) {
        this.parentDom.parentNode.removeChild(this.parentDom);
    }
};

//功能
Fn.prototype.power=function(){
    // 3.选人父级的那段判断是不是dom的代码是否可以封装成一个函数
    // 4.mask函数重新制作,变成模块
    // 5.function文件夹里的arrFindIndex删除
    // 6.function文件夹里能制作成模块的东西,进行模块制作,例如懒加载
    // 7.有些函数名字太长,需要进行重新命名,有些没必要的模块文件进行删除或者重写
    // 8.清零样式修改scss修改
};

module.exports = Fn;
