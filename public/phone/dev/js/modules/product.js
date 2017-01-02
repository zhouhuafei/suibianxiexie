/**
 * Created by zhouhuafei on 16/12/17.
 */
//商品列表
function ProductList(json){
    this.opt=json||{};
    this.configData=this.opt.configData||{};//配置信息
    this.ajaxData=this.opt.ajaxData||{};//商品信息
    this.configData={
        showType:this.configData.showType||'m-product-window',//默认的展现形式(默认为列表式:'m-product-list',橱窗式:'m-product-window',海报式:'m-product-placard')
        isShowImgSrc:this.configData.isShowImgSrc==true?this.configData.isShowImgSrc:false,//是否直接显示图片(默认不直接显示)
        isShowLong:this.configData.isShowLong==true?this.configData.isShowLong:false,//是否显示为长方形(默认不显示)
        isShowCart:this.configData.isShowCart==true?this.configData.isShowCart:false,//是否显示购物车(默认不显示)
        isShowGoodsName:this.configData.isShowGoodsName==true?this.configData.isShowGoodsName:false,//是否显示商品名称(默认不显示)
        isShowPrice:this.configData.isShowPrice==true?this.configData.isShowPrice:false,//是否显示商品价格(默认不显示)
        isVipCustom:this.configData.isVipCustom==true?this.configData.isVipCustom:false,//是否是VIP客户(默认不显示)
        isShowLikeNum:this.configData.isShowLikeNum==true?this.configData.isShowLikeNum:false,//是否显示多少人想买(默认不显示)
        isShowSeckillMark:this.configData.isShowSeckillMark==true?this.configData.isShowSeckillMark:false,//是否显示秒杀标识(默认不显示)
        isShowSeckillLogo:this.configData.isShowSeckillLogo==true?this.configData.isShowSeckillLogo:false,//是否显示秒杀logo(默认不显示)
        isShowSeckillWillBeginBtn:this.configData.isShowSeckillWillBeginBtn==true?this.configData.isShowSeckillWillBeginBtn:false,//是否显示秒杀即将开始按钮(默认不显示)
        isShowSeckillWillBeginTime:this.configData.isShowSeckillWillBeginTime==true?this.configData.isShowSeckillWillBeginTime:false,//是否显示秒杀即将开始的时间(默认不显示)
        isShowSeckillHintBtn:this.configData.isShowSeckillHintBtn==true?this.configData.isShowSeckillHintBtn:false,//是否显示秒杀提醒按钮(默认不显示)
        isShowSeckillHintBtnSetOk:this.configData.isShowSeckillHintBtnSetOk==true?this.configData.isShowSeckillHintBtnSetOk:false,//是否显示已设置秒杀提醒按钮(默认不显示)
        isShowSeckillNowGetBtn:this.configData.isShowSeckillNowGetBtn==true?this.configData.isShowSeckillNowGetBtn:false,//是否显示秒杀马上抢按钮(默认不显示)
        isShowSeckillWillEndTime:this.configData.isShowSeckillWillEndTime==true?this.configData.isShowSeckillWillEndTime:false//是否显示秒杀即将结束的倒计时(默认不显示)
    };
    this.ajaxData={
        goodsName:this.ajaxData.goodsName||'商品名称',//商品名称
        gid:this.ajaxData.gid,//商品的id
        marketPrice:this.ajaxData.marketPrice||'66666.66',//市场价格
        nowPrice:this.ajaxData.nowPrice||'6666.66',//现在的价格
        vipPrice:this.ajaxData.vipPrice||'666.66',//会员价格
        seckillPrice:this.ajaxData.seckillPrice||'66.66',//秒杀价格
        likeNum:this.ajaxData.likeNum||'66',//多少人喜欢
        imgSrc:this.ajaxData.imgSrc||'',//图片的地址
        aHref:this.ajaxData.aHref||'',//商品详情的链接
        seckillWillBeginTime:this.ajaxData.seckillWillBeginTime||'6',//秒杀即将开始的时间
        seckillWillBeginBtnShowTime:this.ajaxData.seckillWillBeginBtnShowTime||'60',//秒杀即将开始按钮出现的时间(剩余最后60秒的时候出现)
        seckillWillEndTime:this.ajaxData.seckillWillEndTime||'6'//秒杀即将结束的时间
    };
}
//以下是渲染结构
ProductList.prototype.renderParent=function(){//渲染父级容器
    var div=document.createElement('div');
    div.classList.add(`m-product`);
    div.classList.add(`${this.configData.showType}`);
    this.parentDom=div;
    this.parentDom.innerHTML=`            
        ${this.renderImg()}        
        ${this.renderTxt()}
    `;
    this.parentDomImg=this.parentDom.querySelector('.m-product-img a');
    this.parentDomTxt=this.parentDom.querySelector('.m-product-txt');
};
ProductList.prototype.renderImg=function(){//渲染图片区域
    var imgHTML=``;
    if(this.configData.isShowImgSrc){
        imgHTML=`<img src="${this.ajaxData.imgSrc}" alt="">`;
    }else{
        imgHTML=`<img class="m-lazy-load" data-src="${this.ajaxData.imgSrc}" src="" alt="">`;
    }
    return `
        <div class="m-product-img">
            <a href="${this.ajaxData.aHref}">
                ${imgHTML}
                ${this.renderSeckillLogo()}
            </a>
        </div>
    `;
};
ProductList.prototype.renderTxt=function(){//渲染文字区域
    return `
        <div class="m-product-txt">
            ${this.renderGoodsName()}
            ${this.renderPrice()}
            ${this.renderLikeNum()}
            ${this.renderCart()}
            ${this.renderSeckillMark()}
            ${this.renderSeckillWillBeginBtn()}
            ${this.renderSeckillWillBeginTime()}
            ${this.renderSeckillHintBtn()}
            ${this.renderSeckillNowGetBtn()}
            ${this.renderSeckillWillEndTime()}
            ${this.renderSeckillHintBtnSetOk()}
        </div>
    `;
};
ProductList.prototype.renderGoodsName=function(){//渲染商品名称
    if(this.configData.isShowGoodsName){
        return `<div class="m-product-goods-name">${this.ajaxData.goodsName}</div>`;
    }else{
        return ``;
    }
};
ProductList.prototype.renderGoodsNameAdd=function(opts){
    var opt=opts||{};
    this.domAdd({
        isRepeat:opt.isRepeat,
        isShowName:'isShowGoodsName',
        renderName:'renderGoodsName',
        className:'.m-product-goods-name'
    });
};
ProductList.prototype.renderGoodsNameRemove=function(){
    this.domRemove({
        className:'.m-product-goods-name'
    });
};
ProductList.prototype.renderPrice=function(){//渲染商品价格
    if(this.configData.isShowPrice){
        var isVip=this.configData.isVipCustom;
        var ajaxData=this.ajaxData;
        var nowPrice=ajaxData.nowPrice;
        if(isVip){
            nowPrice=ajaxData.vipPrice;
        }
        var nowPrice0=nowPrice.split('.')[0];
        var nowPrice1=nowPrice.split('.')[1];
        var marketPrice=ajaxData.marketPrice;
        var VipHtml=``;
        if(isVip){
            VipHtml=`<span class="m-product-price-vip-money">会员价</span>`;
        }
        return `
            <div class="m-product-price">
                ${VipHtml}
                <span class="m-product-price-now-money-symbol">￥</span>
                <span class="m-product-price-now-money-big">${nowPrice0}</span>
                <span class="m-product-price-now-money-point">.</span>
                <span class="m-product-price-now-money-small">${nowPrice1}</span>
                <span class="m-product-price-market-money-symbol">￥</span>
                <span class="m-product-price-market-money-small">${marketPrice}</span>
            </div>
        `;
    }else{
        return ``;
    }
};
ProductList.prototype.renderPriceAdd=function(opts){
    var opt=opts||{};
    this.domAdd({
        isRepeat:opt.isRepeat,
        isShowName:'isShowPrice',
        renderName:'renderPrice',
        className:'.m-product-price'
    });
};
ProductList.prototype.renderPriceRemove=function(){
    this.domRemove({
        className:'.m-product-price'
    });
};
ProductList.prototype.renderLikeNum=function(){//渲染多少人喜欢
    if(this.configData.isShowLikeNum){
        return `
            <div class="m-product-price-like-num">
                <span class="m-product-price-like-num-people">${this.ajaxData.likeNum}</span>
                <span>人想买</span>
            </div>
        `;
    }else{
        return ``;
    }
};
ProductList.prototype.renderLikeNumAdd=function(opts){
    var opt=opts||{};
    this.domAdd({
        isRepeat:opt.isRepeat,
        isShowName:'isShowLikeNum',
        renderName:'renderLikeNum',
        className:'.m-product-price-like-num'
    });
};
ProductList.prototype.renderLikeNumRemove=function(){
    this.domRemove({
        className:'.m-product-price-like-num'
    });
};
ProductList.prototype.renderCart=function(){//渲染购物车
    if(this.configData.isShowCart){
        return `<div class="m-product-cart"><span class="iconfont icon-gouwuche"></span></div>`;
    }else{
        return ``;
    }
};
ProductList.prototype.renderCartAdd=function(opts){
    var opt=opts||{};
    this.domAdd({
        isRepeat:opt.isRepeat,
        isShowName:'isShowCart',
        renderName:'renderCart',
        className:'.m-product-cart'
    });
};
ProductList.prototype.renderCartRemove=function(){
    this.domRemove({
        className:'.m-product-cart'
    });
};
ProductList.prototype.renderSeckillLogo=function(){//渲染秒杀Logo
    if(this.configData.isShowSeckillLogo){
        return `
            <div class="m-product-seckill-logo">
                <div class="m-product-seckill-img"></div>
                <div class="m-product-seckill-price">
                    <span class="m-product-seckill-price-money-symbol">￥</span>
                    <span class="m-product-seckill-price-money-big">66</span>
                    <span class="m-product-seckill-price-money-point">.</span>
                    <span class="m-product-seckill-price-money-small">66</span>
                </div>
            </div>
        `;
    }else{
        return ``;
    }
};
ProductList.prototype.renderSeckillLogoAdd=function(opts){
    var opt=opts||{};
    this.domAdd({
        isRepeat:opt.isRepeat,
        isShowName:'isShowSeckillLogo',
        renderName:'renderSeckillLogo',
        className:'.m-product-seckill-logo',
        parent:this.parentDomImg
    });
};
ProductList.prototype.renderSeckillLogoRemove=function(){
    this.domRemove({
        className:'.m-product-seckill-logo',
        parent:this.parentDomImg
    });
};
ProductList.prototype.renderSeckillMark=function(){//渲染秒杀标识
    if(this.configData.isShowSeckillMark){
        this.parentDom.classList.add('m-product-seckill');
        return `
            <div class="m-product-seckill-mark">
                <span class="iconfont icon-naozhong"></span>
                <span>秒杀</span>
            </div>
        `;
    }else{
        return ``;
    }
};
ProductList.prototype.renderSeckillMarkAdd=function(opts){
    var opt=opts||{};
    this.domAdd({
        isRepeat:opt.isRepeat,
        isShowName:'isShowSeckillMark',
        renderName:'renderSeckillMark',
        className:'.m-product-seckill-mark'
    });
};
ProductList.prototype.renderSeckillMarkRemove=function(){
    this.domRemove({
        className:'.m-product-seckill-mark'
    });
    this.parentDom.classList.remove('m-product-seckill');
};
ProductList.prototype.renderSeckillWillBeginBtn=function(){//渲染秒杀即将开始的按钮
    if(this.configData.isShowSeckillWillBeginBtn){
        return `
            <div class="m-product-seckill-will-begin-btn">
                <div>秒杀</div>
                <div>即将开始</div>
            </div>
        `;
    }else{
        return ``;
    }
};
ProductList.prototype.renderSeckillWillBeginBtnAdd=function(opts){
    var opt=opts||{};
    this.domAdd({
        isRepeat:opt.isRepeat,
        isShowName:'isShowSeckillWillBeginBtn',
        renderName:'renderSeckillWillBeginBtn',
        className:'.m-product-seckill-will-begin-btn'
    });
};
ProductList.prototype.renderSeckillWillBeginBtnRemove=function(){
    this.domRemove({
        className:'.m-product-seckill-will-begin-btn'
    });
};
ProductList.prototype.renderSeckillWillBeginTime=function(){//渲染秒杀即将开始的时间
    if(this.configData.isShowSeckillWillBeginTime){
        var seconds=this.ajaxData.seckillWillBeginTime;
        var o=this.secondsToTime({seconds:seconds});
        var d=o.d;
        var h=o.h;
        var m=o.m;
        var s=o.s;
        return `
            <div class="m-product-seckill-will-begin-time">
                <span class="m-product-seckill-will-begin-time-des">距开始</span>
                <span class="m-product-seckill-will-begin-time-num">${d}</span>
                <span class="m-product-seckill-will-begin-time-txt">天</span>
                <span class="m-product-seckill-will-begin-time-num">${h}</span>
                <span class="m-product-seckill-will-begin-time-txt">时</span>
                <span class="m-product-seckill-will-begin-time-num">${m}</span>
                <span class="m-product-seckill-will-begin-time-txt">分</span>
                <span class="m-product-seckill-will-begin-time-num">${s}</span>
                <span class="m-product-seckill-will-begin-time-txt">秒</span>
            </div>
        `;
    }else{
        return ``;
    }
};
ProductList.prototype.renderSeckillWillBeginTimeAdd=function(opts){
    var opt=opts||{};
    this.domAdd({
        isRepeat:opt.isRepeat,
        isShowName:'isShowSeckillWillBeginTime',
        renderName:'renderSeckillWillBeginTime',
        className:'.m-product-seckill-will-begin-time'
    });
};
ProductList.prototype.renderSeckillWillBeginTimeRemove=function(){
    this.domRemove({
        className:'.m-product-seckill-will-begin-time'
    });
};
ProductList.prototype.renderSeckillHintBtn=function(){//渲染秒杀提醒按钮
    if(this.configData.isShowSeckillHintBtn){
        return `<div class="m-product-seckill-hint-btn">提醒我</div>`;
    }else{
        return ``;
    }
};
ProductList.prototype.renderSeckillHintBtnAdd=function(opts){
    var opt=opts||{};
    this.domAdd({
        isRepeat:opt.isRepeat,
        isShowName:'isShowSeckillHintBtn',
        renderName:'renderSeckillHintBtn',
        className:'.m-product-seckill-hint-btn'
    });
};
ProductList.prototype.renderSeckillHintBtnRemove=function(){
    this.domRemove({
        className:'.m-product-seckill-hint-btn'
    });
};
ProductList.prototype.renderSeckillHintBtnSetOk=function(){//渲染已设置秒杀提醒按钮
    if(this.configData.isShowSeckillHintBtnSetOk){
        return `
            <div class="m-product-seckill-hint-btn-set-ok">
                <div>已设置</div>
                <div>提醒</div>
            </div>
        `;
    }else{
        return ``;
    }
};
ProductList.prototype.renderSeckillHintBtnSetOkAdd=function(opts){
    var opt=opts||{};
    this.domAdd({
        isRepeat:opt.isRepeat,
        isShowName:'isShowSeckillHintBtnSetOk',
        renderName:'renderSeckillHintBtnSetOk',
        className:'.m-product-seckill-hint-btn-set-ok'
    });
};
ProductList.prototype.renderSeckillHintBtnSetOkRemove=function(){
    this.domRemove({
        className:'.m-product-seckill-hint-btn-set-ok'
    });
};
ProductList.prototype.renderSeckillNowGetBtn=function(){//渲染秒杀马上抢按钮
    if(this.configData.isShowSeckillNowGetBtn){
        return `<div class="m-product-seckill-now-get-btn"><a href="javascript:;">马上抢</a></div>`;
    }else{
        return ``;
    }
};
ProductList.prototype.renderSeckillNowGetBtnAdd=function(opts){
    var opt=opts||{};
    this.domAdd({
        isRepeat:opt.isRepeat,
        isShowName:'isShowSeckillNowGetBtn',
        renderName:'renderSeckillNowGetBtn',
        className:'.m-product-seckill-now-get-btn'
    });
};
ProductList.prototype.renderSeckillNowGetBtnRemove=function(){
    this.domRemove({
        className:'.m-product-seckill-now-get-btn'
    });
};
ProductList.prototype.renderSeckillWillEndTime=function(){//渲染秒杀结束倒计时
    if(this.configData.isShowSeckillWillEndTime){
        var seconds=this.ajaxData.seckillWillEndTime;
        var o=this.secondsToTime({seconds:seconds});
        var d=o.d;
        var h=o.h;
        var m=o.m;
        var s=o.s;
        return `
            <div class="m-product-seckill-will-end-time">
                <span class="m-product-seckill-will-end-time-des">距结束</span>
                <span class="m-product-seckill-will-end-time-num">${d}</span>
                <span class="m-product-seckill-will-end-time-txt">天</span>
                <span class="m-product-seckill-will-end-time-num">${h}</span>
                <span class="m-product-seckill-will-end-time-txt">时</span>
                <span class="m-product-seckill-will-end-time-num">${m}</span>
                <span class="m-product-seckill-will-end-time-txt">分</span>
                <span class="m-product-seckill-will-end-time-num">${s}</span>
                <span class="m-product-seckill-will-end-time-txt">秒</span>
            </div>
        `;
    }else{
        return ``;
    }
};
ProductList.prototype.renderSeckillWillEndTimeAdd=function(opts){
    var opt=opts||{};
    this.domAdd({
        isRepeat:opt.isRepeat,
        isShowName:'isShowSeckillWillEndTime',
        renderName:'renderSeckillWillEndTime',
        className:'.m-product-seckill-will-end-time'
    });
};
ProductList.prototype.renderSeckillWillEndTimeRemove=function(){
    this.domRemove({
        className:'.m-product-seckill-will-end-time'
    });
};
ProductList.prototype.domAdd=function(opt){//添加结构
    if(!opt){
        console.log('no find param');
        return false;
    }
    var isRepeat=opt.isRepeat==true?opt.isRepeat:false;
    var parent=opt.parent||this.parentDomTxt;
    var className=opt.className;
    this.configData[opt.isShowName]=true;
    var dom=this.htmlToDom({html:this[opt.renderName]()});
    if(isRepeat){
        parent.appendChild(dom);
    }else{
        if(!parent.querySelector(className)){
            parent.appendChild(dom);
        }
    }
};
ProductList.prototype.domRemove=function(opt){//移除结构
    if(!opt){
        console.log('no find param');
        return false;
    }
    var parent=opt.parent||this.parentDomTxt;
    var dom=parent.querySelector(opt.className);
    if(dom){
        parent.removeChild(dom);
    }
};
ProductList.prototype.render=function(json){//渲染整个结构
    var opt=json||{};
    var callback=opt.callback||function(){console.log('no find callback');};
    this.requireBase();
    this.renderParent();
    this.init();
    callback(this.parentDom);
};
//以下是渲染功能
ProductList.prototype.init=function(){//初始化
    this.events();
    this.seckillWillBeginTime();
    this.seckillWillEndTime();
};
ProductList.prototype.requireBase=function(){//需要用到的小功能函数
    this.base=require("../base/base.js");//base小功能
    this.timeCountDown=this.base.secondsToTimeCountDown;//倒计时
    this.htmlToDom=this.base.htmlToDom;//html转成DOM
    this.secondsToTime=this.base.secondsToTime;//秒转时间
};
ProductList.prototype.events=function(){//事件集合
    this.cartClick();
    this.seckillHintClick();
};
ProductList.prototype.cartClick=function(){//购物车的点击
    var self=this;
    self.parentDom.addEventListener('click',function(ev){
        var target=ev.target;
        if(target.classList.contains('m-product-cart')){
            self.cartFn();
        }
    });
};
ProductList.prototype.cartFn=function(){//购物车的功能
    var self=this;
    console.log(123,self);
};
ProductList.prototype.seckillHintClick=function(){//秒杀提醒我的点击
    var self=this;
    self.parentDom.addEventListener('click',function(ev){
        var target=ev.target;
        if(target.classList.contains('m-product-seckill-hint-btn')){
            self.seckillHintFn();
        }
    });
};
ProductList.prototype.seckillHintFn=function(){//秒杀提醒我的功能
    var self=this;
    self.renderSeckillHintBtnRemove();
    self.renderSeckillHintBtnSetOkAdd();
};
ProductList.prototype.seckillWillBeginTime=function(){//秒杀即将开始的倒计时功能
    if(this.configData.isShowSeckillWillBeginTime){
        var self=this;
        var aSpan=[].slice.call(self.parentDom.querySelectorAll('.m-product-seckill-will-begin-time-num'));
        var ajaxData=self.ajaxData;
        var seconds=ajaxData.seckillWillBeginTime;
        var hintTime=ajaxData.seckillWillBeginBtnShowTime;
        self.configData.isShowSeckillWillBeginBtn=true;
        self.timeCountDown({
            seconds:seconds,
            runCallback:function(obj){
                aSpan[0].innerHTML=obj.d;
                aSpan[1].innerHTML=obj.h;
                aSpan[2].innerHTML=obj.m;
                aSpan[3].innerHTML=obj.s;
                if(hintTime>=obj.a){
                    self.renderSeckillWillBeginBtnAdd();
                    self.renderSeckillHintBtnRemove();
                }
            },
            overCallback:function(){
                self.renderSeckillWillBeginTimeRemove();
                self.renderSeckillWillEndTimeAdd();
                self.renderSeckillWillBeginBtnRemove();
                self.renderSeckillNowGetBtnAdd();
                self.renderSeckillHintBtnSetOkRemove();
                self.seckillWillEndTime();
            }
        })
    }
};
ProductList.prototype.seckillWillEndTime=function(){//秒杀即将结束的倒计时功能
    if(this.configData.isShowSeckillWillEndTime){
        var self=this;
        var aSpan=[].slice.call(self.parentDom.querySelectorAll('.m-product-seckill-will-end-time-num'));
        var seconds=self.ajaxData.seckillWillEndTime;
        self.timeCountDown({
            seconds:seconds,
            runCallback:function(obj){
                aSpan[0].innerHTML=obj.d;
                aSpan[1].innerHTML=obj.h;
                aSpan[2].innerHTML=obj.m;
                aSpan[3].innerHTML=obj.s;
            },
            overCallback:function(){                
                self.renderSeckillMarkRemove();
                self.renderSeckillWillEndTimeRemove();
                self.renderSeckillLogoRemove();
                self.renderSeckillNowGetBtnRemove();
                self.renderCartAdd();
            }
        })
    }
};
module.exports=ProductList;
