var extend = require('../tools/extend');//对象的扩展
var Dialog = require('../modules/m-dialog');//弹窗
var Loading = require('../modules/m-loading');//加载中

//ajax封装
function Ajax(json) {
    this.opts = extend({
        defaults: {
            //回调
            callback: {
                //上传期间持续不断地触发
                uploadProgress: function () {
                },
                //上传完成时触发
                uploadLoad: function () {
                },
                //在接收到响应数据的第一个字节时触发
                loadStart: function () {
                },
                //在接收响应期间持续不断地触发
                progress: function () {
                },
                //在请求发生错误时触发
                error: function () {
                },
                //在因为调用abort()方法而终止请求时触发
                abort: function () {
                },
                //在接收到完整的响应数据时触发
                load: function () {
                },
                //接收到完整的响应且响应状态为200
                success: function () {
                },
                //接收到完整的响应且响应状态不为200
                fail: function () {
                },
                //在通信完成或者触发error、abort或load事件后触发
                loadEnd: function () {
                },
                //等同于loadEnd
                complete: function () {
                },
                //请求超时
                timeout: function () {
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
                mark: '?',//当请求类型为get时,url后面的数据用什么符号开头url:'index.php',1.?ctl=seller&act=setting,2.#ctl=seller&act=setting
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
    this.xhr = new XMLHttpRequest();//xhr
    this.xhr.timeout = this.opts.config.timeout;//超时设置
    this.init();
}
Ajax.prototype.init = function () {
    this.events();
    this.open();
    this.send();
};
Ajax.prototype.open = function () {
    var opts = this.opts;
    if (opts.config.type.toLowerCase() == 'get') {
        //get
        var search = ``;
        var num = 0;
        var data = opts.data;
        if (data) {
            for (var attr in data) {
                if (data.hasOwnProperty(attr)) {
                    if (num == 0) {
                        search += `${attr}=${data[attr]}`;
                    } else {
                        search += `&${attr}=${data[attr]}`;
                    }
                    num++;
                }
            }
        }
        var url = opts.config.url + opts.config.mark + search;
        this.xhr.open(opts.config.type, url);
    } else if (opts.config.type.toLowerCase() == 'post') {
        //post
        this.xhr.open(opts.config.type, opts.config.url);
    } else {
        console.log('仅支持get和post请求');
        return false;
    }
};
Ajax.prototype.send = function () {
    var opts = this.opts;
    var data = opts.data;
    if (opts.config.type.toLowerCase() == 'get') {
        //get
        this.xhr.send(null);
    } else if (opts.config.type.toLowerCase() == 'post') {
        //post
        if (data) {
            if (Object.prototype.toString.call(data).slice(8, -1).toLocaleLowerCase() == 'formdata') {
                this.xhr.send(data);
            } else {
                var formData = new FormData();
                for (var attr in data) {
                    if (data.hasOwnProperty(attr)) {
                        formData.append(attr, data[attr]);
                    }
                }
                this.xhr.send(formData);
            }
        } else {
            this.xhr.send(null);
        }
    } else {
        console.log('仅支持get和post请求');
        return false;
    }
};
Ajax.prototype.events = function () {
    var self = this;
    //上传期间持续不断地触发
    this.xhr.upload.addEventListener('progress', function (ProgressEvent) {
        self.uploadProgress();
        console.log(ProgressEvent, 'uploadProgress');
    });
    //上传完成时触发
    this.xhr.upload.addEventListener('load', function (ProgressEvent) {
        self.uploadLoad();
        console.log(ProgressEvent, 'uploadLoad');
    });
    //在接收到响应数据的第一个字节时触发
    this.xhr.addEventListener('loadstart', function (ProgressEvent) {
        self.loadStart();
        console.log(ProgressEvent, 'loadStart');
    });
    //在接收响应期间持续不断地触发
    this.xhr.addEventListener('progress', function (ProgressEvent) {
        self.progress();
        console.log(ProgressEvent, 'progress');
    });
    //在请求发生错误时触发
    this.xhr.addEventListener('error', function (ProgressEvent) {
        self.error();
        console.log(ProgressEvent, 'error');
    });
    //在因为调用abort()方法而终止请求时触发
    this.xhr.addEventListener('abort', function (ProgressEvent) {
        self.abort();
        console.log(ProgressEvent, 'abort');
    });
    //在接收到完整的响应数据时触发
    this.xhr.addEventListener('load', function (ProgressEvent) {
        self.load(ProgressEvent);
        console.log(ProgressEvent, 'load', 999);
    });
    //在通信完成或者触发error、abort或load事件后触发
    this.xhr.addEventListener('loadend', function (ProgressEvent) {
        self.loadEnd();
        console.log(ProgressEvent, 'loadend');
    });
    //请求超时
    this.xhr.addEventListener('timeout', function (ProgressEvent) {
        self.timeout();
        console.log(ProgressEvent, 'timeout');
    });
};
//上传期间持续不断地触发
Ajax.prototype.uploadProgress = function () {
    this.opts.callback.uploadProgress();
};
//上传完成时触发
Ajax.prototype.uploadLoad = function () {
    this.opts.callback.uploadLoad();
};
//在接收到响应数据的第一个字节时触发
Ajax.prototype.loadStart = function () {
    this.opts.callback.loadStart();
};
//在接收响应期间持续不断地触发
Ajax.prototype.progress = function () {
    this.opts.callback.progress();
};
//在请求发生错误时触发
Ajax.prototype.error = function () {
    this.opts.callback.error();
};
//在因为调用abort()方法而终止请求时触发
Ajax.prototype.abort = function () {
    this.opts.callback.abort();
};
//在接收到完整的响应数据时触发
Ajax.prototype.load = function () {
    this.opts.callback.load();
};
//接收到完整的响应且响应状态为200
Ajax.prototype.success = function () {
    this.opts.callback.success();
};
//接收到完整的响应且响应状态不为200
Ajax.prototype.fail = function () {
    this.opts.callback.fail();
};
//在通信完成或者触发error、abort或load事件后触发
Ajax.prototype.loadEnd = function () {
    this.opts.callback.loadEnd();
    this.complete();
};
//等同于loadEnd
Ajax.prototype.complete = function () {
    this.opts.callback.complete();
};
//请求超时
Ajax.prototype.timeout = function () {
    this.opts.callback.timeout();
};
//手动触发取消请求
Ajax.prototype.triggerAbort = function () {
    if (this.xhr.abort) {
        this.xhr.abort();
    } else {
        console.log('浏览器不支持xhr2的abort');
    }
};

module.exports = Ajax;