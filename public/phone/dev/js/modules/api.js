/**
 * Created by zhouhuafei on 2017/1/9.
 */

define(function (require, exports, module){
    module.exports = {
        cart:{//购物车的接口
            url:'index.php?ctl=carts&act=add',
            data:{
                name:'product_id',
                num:'num',
            }
        }
    };
});