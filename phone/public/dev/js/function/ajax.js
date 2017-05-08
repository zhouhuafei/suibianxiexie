var extend = require('../function/extend');//对象的扩展
var Dialog = require('../modules/m-dialog');//弹窗
var Loading = require('../function/extend');//加载中

//ajax封装
function Ajax(json) {
    this.opts = extend({
        defaults: {
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
                type: 'post',//请求类型(默认post)
                url: '',//url
                dataType: 'json',//数据类型(默认json)
                async: true,//默认异步
                timeout: 5000,//超时时间(默认3秒)
                isShowLoading: true,//是否显示loading
                isShowDialog: true,//是否显示弹窗
                //loading的配置
                loading: {
                    moduleDomStatus: 'loading',
                    moduleDomPosition: 'fixed'
                },
                //dialog的配置
                dialog: {}
            },
            //数据
            data: {}
        },
        inherits: json
    });
    this.loading = new Loading(this.opts.config.loading);
    this.dialog = new Dialog(this.opts.config.dialog);
    this.xhr = new XMLHttpRequest();
    this.init();
}
Ajax.prototype.init = function () {
    this.open();
    this.send();
    this.events();
};
Ajax.prototype.open = function () {
    var opts = this.opts;
    this.xhr.open(opts.config.type, opts.config.url);
};
Ajax.prototype.send = function () {
    var opts = this.opts;
    var data = opts.data;
    if (opts.config.type.toLowerCase() == 'get') {
        //get
        this.xhr.send(null);
    } else if (opts.config.type.toLowerCase() == 'post') {
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
    } else {
        console.log('仅支持get和post请求');
        return false;
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