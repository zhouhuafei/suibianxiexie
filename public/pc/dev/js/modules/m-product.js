/**
 * Created by zhouhuafei on 16/12/17.
 */
function ProductList(opt){
    this.opt=opt||{};
    this.opt.config=this.opt.config||{};//配置信息
    this.opt.ajax=this.opt.ajax||{};//ajax请求得到的商品信息
    this.opt.config={
        isShowLong:this.opt.config.isShowLong==true?this.opt.config.isShowLong:false,//是否显示为长方形(默认不显示)
        isShowCart:this.opt.config.isShowCart==true?this.opt.config.isShowCart:false,//是否显示购物车(默认不显示)
        isShowGoodsName:this.opt.config.isShowGoodsName==true?this.opt.config.isShowGoodsName:false,//是否显示商品名称(默认不显示)
        isShowPrice:this.opt.config.isShowPrice==true?this.opt.config.isShowPrice:false,//是否显示商品价格(默认不显示)
        isShowLikeNum:this.opt.config.isShowLikeNum==true?this.opt.config.isShowLikeNum:false//是否显示多少人想买(默认不显示)
    };
}
ProductList.prototype.init=function(){

};
ProductList.prototype.render=function(callback){
    var dom='<div>render待续...</div>';


    callback&&callback(dom);
};
module.exports = ProductList;
