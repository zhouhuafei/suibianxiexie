//我的记录里的商品
function Fn(json){
    this.opt=json||{};
    this.opt.logoHref=this.opt.logoHref||'javascript:;';
    this.opt.logoSrc=this.opt.logoSrc||'';
    this.opt.logoInfo=this.opt.logoInfo||'没有数据';
    this.opt.btnHref=this.opt.btnHref||'javascript:;';
    this.opt.btnInfo=this.opt.btnInfo||'进店逛逛';
    this.render();
}
Fn.prototype.renderParent=function(){
    this.parentDom=document.createElement('div');
    this.parentDom.classList.add('m-no-data');
    this.parentDom.innerHTML=`
        <div class="m-no-data-img">
            <a href="${this.opt.logoHref}"><img src="${this.opt.logoSrc}" alt=""></a>
        </div>
        <div class="m-no-data-txt">${this.opt.logoInfo}</div>
        <div class="m-no-data-btn"><a href="${this.opt.btnHref}">${this.opt.btnInfo}</a></div>
    `;
};
Fn.prototype.render=function(){
    this.renderParent();
};
module.exports=Fn;