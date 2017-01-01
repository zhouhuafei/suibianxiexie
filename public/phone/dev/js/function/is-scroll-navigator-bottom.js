/**
 * Created by zhouhuafei on 17/1/1.
 */
//是否滚动到了浏览器的底部(需要你自己在外部加事件)
isScrollNavigatorBottom.isBottom=true;//假设到达了底部
function isScrollNavigatorBottom(callback){
    var fn=callback||function(){console.log('no find callback')};
    var doc=document;
    var re=function(){
        var allH=doc.body.offsetHeight;
        var scrollTop=doc.documentElement.scrollTop||doc.body.scrollTop;
        var clientHeight=doc.documentElement.clientHeight;
        if(scrollTop+clientHeight>=allH-100&&isScrollNavigatorBottom.isBottom){
            isScrollNavigatorBottom.isBottom=false;
            fn();
            //假设1000毫秒之后数据加载完毕
            setTimeout(function(){
                isScrollNavigatorBottom.isBottom=true;
            },1000)
        }
    };
    re();
}
module.exports=isScrollNavigatorBottom;