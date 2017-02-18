//加载更多的底部加载中
function Fn(json){
    //opt对象上请绑定外部可以传进来的那些数据的键值作为属性
    this.opt=json||{};
    //不是外部传进来的值可以直接绑定到this上

    //初始化
    this.init();
}
Fn.prototype.init=function(){
    //渲染结构
    this.render();
    //渲染功能
    this.power();
};
Fn.prototype.render=function(){
    this.parentDOM=document.createElement('div');
    this.parentDOM.classList.add('m-loading-bottom');
    document.body.appendChild(this.parentDOM);
};
Fn.prototype.power=function(){
    //事件相关
    this.events();
};
Fn.prototype.events=function(){

};
//其他功能写在下面吧,尽量保持格式统一
Fn.prototype.show=function(){
    this.parentDOM.innerHTML=`<div class="m-loading-bottom-show">加载中</div>`;
    this.parentDOM.classList.add('show');
};
Fn.prototype.hide=function(){
    this.parentDOM.classList.remove('show');
};
Fn.prototype.over=function(){
    this.parentDOM.innerHTML=`<div class="m-loading-bottom-over">没有更多数据</div>`;
    this.parentDOM.classList.add('show');
};
module.exports=Fn;