/**
 * Created by zhouhuafei on 16/12/17.
 */
function ProductList(opt){
    this.opt=opt||{};
    this.configData=this.opt.configData||{};//配置信息
    this.ajaxData=this.opt.ajaxData||{};//商品信息
    this.configData={
        showType:this.configData.showType||'m-product-window',//默认的展现形式(默认为列表式:'m-product-list',橱窗式:'m-product-window',海报式:'m-product-placard')
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
    this.parentDOM=div;
    this.parentDOM.innerHTML=`            
        ${this.renderImg()}        
        ${this.renderTxt()}
    `;
    this.imgParentDOM=this.parentDOM.querySelector('.m-product-img a');
    this.txtParentDOM=this.parentDOM.querySelector('.m-product-txt');
};
ProductList.prototype.renderImg=function(){//渲染图片区域
    return `
        <div class="m-product-img">
            <a href="${this.ajaxData.aHref}">
                <img src="${this.ajaxData.imgSrc}" alt="">
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
ProductList.prototype.renderCart=function(){//渲染购物车
    if(this.configData.isShowCart){
        return `<div class="m-product-cart"><span class="iconfont icon-gouwuche"></span></div>`;
    }else{
        return ``;
    }
};
ProductList.prototype.renderSeckillMark=function(){//渲染秒杀标识
    if(this.configData.isShowSeckillMark){
        this.parentDOM.classList.add('m-product-seckill');
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
ProductList.prototype.renderSeckillHintBtn=function(){//渲染秒杀提醒按钮
    if(this.configData.isShowSeckillHintBtn){
        return `<div class="m-product-seckill-hint-btn">提醒我</div>`;
    }else{
        return ``;
    }
};
ProductList.prototype.renderSeckillNowGetBtn=function(){//渲染秒杀马上抢按钮
    if(this.configData.isShowSeckillNowGetBtn){
        return `<div class="m-product-seckill-now-get-btn">马上抢</div>`;
    }else{
        return ``;
    }
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
ProductList.prototype.render=function(callback){//渲染整个结构
    this.requireBase();
    this.renderParent();
    this.init();
    callback&&callback(this.parentDOM);
};
//以下是渲染功能
ProductList.prototype.init=function(){//初始化




    this.seckillWillBeginTime();
    this.seckillWillEndTime();
};
ProductList.prototype.requireBase=function(){//需要用到的小功能函数
    this.base=require("../base/base.js");//base小功能
    this.timeCountDown=this.base.timeCountDown;//倒计时
    this.htmlToDom=this.base.htmlToDom;//html转成DOM
    this.secondsToTime=this.base.secondsToTime;//秒转时间
};
ProductList.prototype.seckillWillBeginTime=function(){//秒杀即将开始的倒计时功能
    if(this.configData.isShowSeckillWillBeginTime){
        var self=this;
        var aSpan=[].slice.call(self.parentDOM.querySelectorAll('.m-product-seckill-will-begin-time-num'));
        var ajaxData=self.ajaxData;
        var seconds=ajaxData.seckillWillBeginTime;
        var parent=self.parentDOM;
        var txtParent=self.txtParentDOM;
        var hintTime=ajaxData.seckillWillBeginBtnShowTime;
        self.configData.isShowSeckillWillBeginBtn=true;
        var seckillWillBeginBtn=self.htmlToDom({html:self.renderSeckillWillBeginBtn()});
        self.timeCountDown({
            seconds:seconds,
            runCallback:function(obj){
                aSpan[0].innerHTML=obj.d;
                aSpan[1].innerHTML=obj.h;
                aSpan[2].innerHTML=obj.m;
                aSpan[3].innerHTML=obj.s;
                if(hintTime>=obj.a){
                    if(!parent.querySelector('.m-product-seckill-will-begin-btn')){
                        txtParent.appendChild(seckillWillBeginBtn);
                        var hintBtn=parent.querySelector('.m-product-seckill-hint-btn');
                        txtParent.removeChild(hintBtn);
                    }
                }
            },
            overCallback:function(){
                var seckillWillBeginTime=parent.querySelector('.m-product-seckill-will-begin-time');
                txtParent.removeChild(seckillWillBeginTime);
                self.configData.isShowSeckillWillEndTime=true;
                var seckillWillEndTime=self.htmlToDom({html:self.renderSeckillWillEndTime()});
                txtParent.appendChild(seckillWillEndTime);
                txtParent.removeChild(seckillWillBeginBtn);
                self.configData.isShowSeckillNowGetBtn=true;
                var nowGetBtn=self.htmlToDom({html:self.renderSeckillNowGetBtn()});
                txtParent.appendChild(nowGetBtn);
                self.seckillWillEndTime();
            }
        })
    }
};
ProductList.prototype.seckillWillEndTime=function(){//秒杀即将结束的倒计时功能
    if(this.configData.isShowSeckillWillEndTime){
        var self=this;
        var aSpan=[].slice.call(self.parentDOM.querySelectorAll('.m-product-seckill-will-end-time-num'));
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
                var parent=self.parentDOM;
                parent.classList.remove('m-product-seckill');
                var imgParent=self.imgParentDOM;
                var txtParent=self.txtParentDOM;
                var seckillLogo=imgParent.querySelector('.m-product-seckill-logo');
                imgParent.removeChild(seckillLogo);
                var seckillWillEndTime=txtParent.querySelector('.m-product-seckill-will-end-time');
                var seckillMark=txtParent.querySelector('.m-product-seckill-mark');
                var seckillNowGet=txtParent.querySelector('.m-product-seckill-now-get-btn');
                self.configData.isShowCart=true;
                var cart=self.htmlToDom({html:self.renderCart()});
                txtParent.removeChild(seckillWillEndTime);
                txtParent.removeChild(seckillMark);
                txtParent.removeChild(seckillNowGet);
                txtParent.appendChild(cart);
            }
        })
    }
};
module.exports=ProductList;