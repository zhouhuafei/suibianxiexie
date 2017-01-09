/**
 * Created by zhouhuafei on 16/12/17.
 */
//加载更多的底部加载中
function Fn(){
    this.render();
}
Fn.prototype.render=function(){
    this.parentDOM=document.createElement('div');
    this.parentDOM.classList.add('m-loading-bottom');
    document.body.appendChild(this.parentDOM);
};
Fn.prototype.show=function(){
    this.parentDOM.innerHTML='';
    this.parentDOM.innerHTML=`
        <div class="m-loading-bottom-show">加载中</div>
    `;
    this.parentDOM.classList.add('show');
};
Fn.prototype.hide=function(){
    this.parentDOM.classList.remove('show');
};
Fn.prototype.over=function(){
    this.parentDOM.innerHTML='';
    this.parentDOM.innerHTML=`
        <div class="m-loading-bottom-over">没有更多数据</div>
    `;
    this.parentDOM.classList.add('show');
};
module.exports=Fn;