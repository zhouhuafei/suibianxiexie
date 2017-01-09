//我的记录里的商品
function Fn(json){
    this.opt=json||{};
    this.info=this.opt.info||['没有','数据'];
    var arr=[];
    this.info.forEach(function(){
        arr.push('javascript:;');
    });
    this.link=this.opt.link||arr;
    this.index=this.opt.index||'0';
    this.render();
}
Fn.prototype.renderParent=function(){
    this.parentDom=document.createElement('div');
    this.parentDom.classList.add('m-tab-hd');
    this.parentDom.innerHTML=`
            ${this.renderData()}
        `;
};
Fn.prototype.renderData=function(){
    var self=this;
    var str=``;
    self.info.forEach(function(v,i){
        var className=``;
        var link=self.link[i];
        if(i==self.index){
            className=`m-tab-hd-btn-on`;
        }
        str+=`<div class="m-tab-hd-btn ${className}"><a href="${link}">${v}</a></div>`;
    });
    return str;
};
Fn.prototype.render=function(){
    this.renderParent();
};
module.exports=Fn;