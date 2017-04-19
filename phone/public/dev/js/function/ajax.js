var extend = require('../function/extend.js');//对象的扩展
var Dialog = require('../modules/m-dialog.js');//弹窗
var Loadind = require('../function/extend.js');//加载中

//ajax封装
function Ajax(json) {
    this.opt = extend({
        default: {
            type: 'post',//请求类型
            data: {},//请求数据
            //回调
            callback: {
                //完成
                complete: function () {
                },
                //成功
                success: function () {
                },
                //失败
                fail: function () {
                },
                //超时
                timeout: function () {
                }
            },
            //配置
            config: {
                //ajax的配置
                ajax: {
                    isShowLoading: true//是否显示loading
                },
                //loading的配置
                loading: {
                    config: {
                        moduleDomStatus: 'loading',
                        moduleDomPosition: 'fixed'
                    }
                }
            }
        },
        inherit: json
    });
    this.loading = new Loadind(this.opt.config.loading);
}
Ajax.prototype.open = function () {

};
Ajax.prototype.send = function () {

};
Ajax.prototype.success = function () {

};
Ajax.prototype.fail = function () {

};
Ajax.prototype.timeout = function () {

};
Ajax.prototype.fail = function () {

};


module.exports = Ajax;