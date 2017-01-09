define(function (require, exports, module){
    //数据处理
    var Product=require('../modules/m-product');
    function productListDomData(opt){
        if(!opt){return false;}
        var data=opt.data;//必须是数组格式
        var parent=opt.parent;//承载dom的容器
        var callback=opt.callback;//每次循环的回调
        data.forEach(function(json){
            var v=json||{};
            var configData=opt.configData||{};//配置信息
            configData.isShowGoodsName=configData.isShowGoodsName==false?configData.isShowGoodsName:true;
            configData.isShowPrice=configData.isShowPrice==false?configData.isShowPrice:true;
            configData.isShowLikeNum=configData.isShowLikeNum==false?configData.isShowLikeNum:true;
            var ajaxDataD={
                goodsName:v.name,
                gid:v.goods_id,
                marketPrice:v.gprice,
                nowPrice:v.price,
                seckillPrice:v.secKill&&v.secKill.price,
                likeNum:v.statistics&&v.statistics.pv,
                imgSrc:v.thumbnail_pic,
                aHref:v.url,
                seckillActId:v.secKill&&v.secKill.act_id,
                seckillWillBeginTime:v.secKill&&v.secKill.begin_time*1000,
                seckillWillEndTime:v.secKill&&v.secKill.countDown
            };
            //如果是普通商品
            //如果是会员商品
            //如果是秒杀商品-秒杀尚未开始
            //如果是秒杀商品-秒杀正在进行
            //如果是秒杀商品-秒杀结束
            if(v.goodsType=='secKill'){//秒杀商品
                configData.isShowSeckillMark=true;
                configData.isShowSeckillLogo=true;
                if(v.secKill.act_status == 'running'){//秒杀正在进行中
                    configData.isShowSeckillWillEndTime=true;
                    configData.isShowSeckillNowGetBtn=true;
                }else if(v.secKill.act_status=='preheat'){//秒杀还剩多久开始
                    configData.isShowSeckillWillBeginTime=true;
                    if(v.secKill.need_remind == '1'){//商家开通了短信提醒
                        if (v.secKill.is_remind == 1) {//已经点了提醒我
                            configData.isShowSeckillHintBtnSetOk=true;
                        }else{//没有点击提醒我
                            configData.isShowSeckillHintBtn=true;
                        }
                    }else{///商家没有开通短信提醒
                        configData.isShowCart=true;
                    }
                }else{//秒杀即将开始
                    configData.isShowSeckillWillBeginTime=true;
                    configData.isShowSeckillWillBeginBtn=true;
                }
            }else{//普通商品
                configData.isShowCart=true;
            }
            var fn=new Product({configData:configData,ajaxData:ajaxDataD});
            fn.render(function(dom){
                parent.appendChild(dom);
            });
            callback&&callback({configData:configData,ajaxData:ajaxDataD});
        });
    }
    module.exports = productListDomData;
});