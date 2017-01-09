//手机极简星级评论
function Fn(json){
    this.opt=json||{};
    this.opt.allStar=this.opt.allStar||'5';//总共几颗星(默认五颗星)
    this.opt.nowStar=this.opt.nowStar||'5';//现在几颗星(默认五颗星)
    this.opt.isEvent=this.opt.isEvent==false?this.opt.isEvent:true;//是否具备事件(默认具备)
    this.opt.eventCallback=this.opt.eventCallback||function(){console.log('no find callback');};//事件回调
    this.render();
}
Fn.prototype.init=function(){
    this.event();
};
Fn.prototype.event=function(){
    this.starClick();
};
Fn.prototype.starClick=function(){
    var self=this;
    if(this.opt.isEvent){
        this.parentDom.addEventListener('click',function(ev){
            var target=ev.target;
            if(target.classList.contains('m-star')){
                var index=target.dataset.index;
                for(var j=0;j<self.opt.allStar;j++){
                    if(j<=index){
                        self.opt.star[j].classList.add('m-star-active');
                    }else{
                        self.opt.star[j].classList.remove('m-star-active');
                    }
                }
                self.opt.eventCallback({index:index})
            }
        })
    }
};
Fn.prototype.renderParent=function(){
    this.parentDom=document.createElement('div');
    this.parentDom.classList.add('m-star-main');
    this.renderStar();
};
Fn.prototype.renderStar=function(){
    var html=``;
    for(var i=0;i<this.opt.allStar;i++){
        var className='';
        if(i<this.opt.nowStar){
            className='m-star-active';
        }
        html+=`<div data-index="${i}" class="iconfont icon-pingxing m-star ${className}"></div>`;
    }
    this.parentDom.innerHTML=html;
    this.opt.star=this.parentDom.children;
};
Fn.prototype.render=function(){
    this.renderParent();
    this.init();
};
module.exports=Fn;