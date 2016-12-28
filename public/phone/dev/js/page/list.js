/**
 * Created by zhouhuafei on 16/12/17.
 */
const Product=require('../modules/product');
const main=document.querySelector('.main');
for(var i=0;i<200;i++){
    const product=new Product({
        configData:{
            isShowGoodsName:true,
            isShowPrice:true,
            isVipCustom:true,
            isShowLikeNum:true,
            //isShowCart:true,
            isShowSeckillMark:true,
            isShowSeckillLogo:true,
            //isShowSeckillWillBeginBtn:true,
            //isShowSeckillWillBeginTime:true,
            //isShowSeckillHintBtn:true,
            //isShowSeckillHintBtnSetOk:true,
            isShowSeckillNowGetBtn:true,
            isShowSeckillWillEndTime:true
        },
        ajaxData:{
            goodsName:'商品名称商品名称商品名称商品名称商品名称商品名称',
            marketPrice:'200.00',
            nowPrice:'100.00',
            vipPrice:'10.00',
            seckillPrice:'1.00',
            likeNum:'300',
            imgSrc:'http://qmfx-s84664.s3.fy.shopex.cn/gpic/20160627/be7c4eafe8063a94bf2da631299bec6b.jpg?imageView2/2/w/600/h/600/interlace/1',
            aHref:'http://www.baidu.com',
            seckillWillBeginTime:'6',
            seckillWillBeginBtnShowTime:'3',
            seckillWillEndTime:'300'
        }
    });
    product.render(function(dom){
        main.appendChild(dom);
    });
}