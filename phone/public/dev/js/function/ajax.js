var extend = require('../function/extend');//对象的扩展
var Dialog = require('../modules/m-dialog');//弹窗
var Loading = require('../function/extend');//加载中

//ajax封装
function Ajax(json) {
    this.opt = extend({
        defaults: {
            url: '',//url
            type: 'post',//请求类型
            data: {},//请求数据
            dataType: 'json',//数据类型
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
                },
                //取消
                about: function () {
                }
            },
            //配置
            config: {
                //ajax的配置
                ajax: {
                    isShowLoading: true,//是否显示loading
                    isShowDialog: true//是否显示弹窗
                },
                //loading的配置
                loading: {
                    config: {
                        moduleDomStatus: 'loading',
                        moduleDomPosition: 'fixed'
                    }
                },
                //dialog的配置
                dialog: {
                    config: {}
                }
            }
        },
        inherits: json
    });
    this.loading = new Loading(this.opt.config.loading);
    this.dialog = new Dialog(this.opt.config.dialog);
    this.xhr = new XMLHttpRequest();
    this.init();
}
Ajax.prototype.init = function () {
    this.open();
    this.send();
    this.events();
};
Ajax.prototype.open = function () {
    var opt = this.opt;
    this.xhr.open(opt.type, opt.url);
};
Ajax.prototype.send = function () {
    var opt = this.opt;
    var data = opt.data;
    if (opt.type.toLowerCase() == 'get') {
        //get
        this.xhr.send(null);
    } else {
        //post
        var formData = new FormData();
        if (data) {
            for (var attr in data) {
                if (data.hasOwnProperty(attr)) {
                    formData.append(attr, data[attr]);
                }
            }
        }
        this.xhr.send(formData);
    }
};
Ajax.prototype.events = function () {

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