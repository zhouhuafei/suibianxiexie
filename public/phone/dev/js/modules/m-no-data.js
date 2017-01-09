//我的记录里的商品
define(function (require, exports, module){
    function Fn(json){
        this.opt=json||{};
        this.logoHref=this.opt.logoHref||'javascript:;';
        this.logoSrc=this.opt.logoSrc;
        this.logoInfo=this.opt.logoInfo||'没有数据';
        this.btnHref=this.opt.btnHref||'javascript:;';
        this.btnInfo=this.opt.btnInfo||'进店逛逛';
    }
    Fn.prototype.renderParent=function(){
        this.parentDom=document.createElement('div');
        this.parentDom.classList.add('m-no-data');
        this.parentDom.innerHTML=`
            <div class="m-no-data-img">
                <a href="${this.logoHref}"><img src="${this.logoSrc}" alt=""></a>
            </div>
            <div class="m-no-data-txt">${this.logoInfo}</div>
            <div class="m-no-data-btn"><a href="${this.btnHref}">${this.btnInfo}</a></div>
        `;
    };
    Fn.prototype.render=function(fn){
        this.renderParent();
        fn&&fn(this.parentDom);
    };
    module.exports = Fn;
});