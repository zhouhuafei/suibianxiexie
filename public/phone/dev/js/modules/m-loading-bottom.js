/*加载更多的底部加载中*/
define(function (require, exports, module){
    function LoadingBottom(){
        this.render();
    }
    LoadingBottom.prototype.render=function(){
        this.parentDOM=document.createElement('div');
        this.parentDOM.classList.add('m-loading-bottom');
        document.body.appendChild(this.parentDOM);
    };
    LoadingBottom.prototype.show=function(){
        this.parentDOM.innerHTML='';
        this.parentDOM.innerHTML=`
            <div class="m-loading-bottom-show">加载中</div>
        `;
        this.parentDOM.classList.add('show');
    };
    LoadingBottom.prototype.hide=function(){
        this.parentDOM.classList.remove('show');
    };
    LoadingBottom.prototype.over=function(){
        this.parentDOM.innerHTML='';
        this.parentDOM.innerHTML=`
            <div class="m-loading-bottom-over">没有更多数据</div>
        `;
        this.parentDOM.classList.add('show');
    };
    module.exports = LoadingBottom;
});