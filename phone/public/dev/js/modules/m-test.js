//底层方法
var base = require('../base/base');

//构造函数
function Fn(json) {
    //外部传进来的参数
    this.opt = base.extend({
        defaults: {
            parent: ``,//这个仅支持传入选择器和原生dom节点
            dataConfig:{
                isClearTimer:true//默认清除所有定时器
            },
            dataAjax:{
                info:`周华飞测试`
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
    this.moduleDom.className = `m-test`;
    this.moduleDom.innerHTML = `
        <div class="m-test-timer">0</div>
        <div class="m-test-info">${this.opt.dataAjax.info}</div>
    `;
};

//外部的容器
Fn.prototype.renderParentDom = function () {
    this.parentDom=base.getOneDom({dom:this.opt.parent});
    //先清空
    this.clearParentDom();
    //再填充
    if (this.parentDom) {
        this.parentDom.appendChild(this.moduleDom);
    }
};
    
//清空外部的容器
Fn.prototype.clearParentDom = function () {
    if(this.parentDom){
        this.parentDom.innerHTML=``;
    }
    //继续清除一些其他东西,例如定时器(假设有定时器需要被清除)
    if(this.opt.dataConfig.isClearTimer){
        for(var attr in this.timer){
            if(this.timer.hasOwnProperty(attr)){
                clearInterval(this.timer[attr]);
                clearTimeout(this.timer[attr]);
            }
        }
    }
};

//移除外部的容器
Fn.prototype.removeParentDom = function () {
    //先清空外部的容器
    this.clearParentDom();
    //再移除外部的容器
    if (this.parentDom) {
        this.parentDom.parentNode.removeChild(this.parentDom);
    }
};

//功能
Fn.prototype.power=function(){
    var interval=this.moduleDom.querySelector('.m-test-timer');
    this.timer.timer1=setInterval(function(){
        interval.innerHTML=interval.innerHTML*1+1;
    },1000);
};

module.exports = Fn;