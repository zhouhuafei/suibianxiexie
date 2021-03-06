/**
 * @description 对象的扩展
 * @param {*} defaults - 默认对象
 * @param {*} inherits - 继承对像
 * @param {Boolean} isDeep - 是否进行深拷贝(默认进行深拷贝)
 * */
function extend(defaults = {}, inherits = {}, isDeep = true) {
    const defaultsType = Object.prototype.toString.call(defaults).slice(8, -1).toLowerCase();
    const inheritsType = Object.prototype.toString.call(inherits).slice(8, -1).toLowerCase();
    if (defaultsType === inheritsType && isDeep) {
        if (defaultsType === 'object' || defaultsType === 'array') { // 当为对象或者为数组
            Object.keys(inherits).forEach(function (attr) {
                const attrDefaultsType = Object.prototype.toString.call(defaults[attr]).slice(8, -1).toLowerCase();
                const attrInheritsType = Object.prototype.toString.call(inherits[attr]).slice(8, -1).toLowerCase();
                if (attrDefaultsType === attrInheritsType && isDeep) { // 类型相同
                    if (attrDefaultsType === 'object' || attrDefaultsType === 'array') { // 当为对象或者为数组
                        extend(defaults[attr], inherits[attr]);
                    } else {
                        if (inherits[attr] !== undefined) { // 过滤掉undefined
                            defaults[attr] = inherits[attr];
                        }
                    }
                } else { // 类型不同,直接后面的覆盖前面的
                    if (inherits[attr] !== undefined) { // 过滤掉undefined
                        defaults[attr] = inherits[attr];
                    }
                }
            });
        } else {
            defaults = inherits;
        }
    } else {
        defaults = inherits;
    }
    return defaults;
}

// ajax封装
function Ajax(json) {
    this.opts = extend({
        // 回调
        callback: {
            // 上传期间持续不断地触发
            uploadProgress: function () {
            },
            // 上传完成时触发
            uploadLoad: function () {
            },
            // 在接收到响应数据的第一个字节时触发
            loadStart: function () {
            },
            // 在接收响应期间持续不断地触发
            progress: function () {
            },
            // 在请求发生错误时触发，响应状态不为200，则为error
            error: function () {
            },
            // 在因为调用abort()方法而终止请求时触发
            abort: function () {
            },
            // 在接收到完整的响应数据时触发
            load: function () {
            },
            // 在通信完成或者触发error、abort或load事件后触发
            loadEnd: function () {
            },
            // 等同于loadEnd
            complete: function () {
            },
            // 请求超时
            timeout: function () {
            },
        },
        // 配置
        config: {
            // ajax的配置
            type: 'GET', // 请求类型(默认GET)
            url: '', // url
            dataType: 'json', // 数据类型(默认json)
            async: true, // 默认异步
            timeout: 30000, // 超时时间(默认30秒)
            mark: '?', // 当请求类型为GET时,url后面的数据用什么符号开头url:'index.php',1.?ctl=seller&act=setting,2.#ctl=seller&act=setting
        },
        // 数据
        data: {},
    }, json);
    this.xhr = new XMLHttpRequest();// xhr
    this.xhr.timeout = this.opts.config.timeout;// 超时设置
    this.init();
}

Ajax.prototype.init = function () {
    this.events();
    this.open();
    this.send();
};
Ajax.prototype.open = function () {
    const opts = this.opts;
    if (opts.config.type.toUpperCase() === 'GET') {
        // GET
        let search = '';
        let num = 0;
        const data = opts.data;
        if (data) {
            Object.keys(data).forEach(function (attr) {
                if (num === 0) {
                    search += `${attr}=${data[attr]}`;
                } else {
                    search += `&${attr}=${data[attr]}`;
                }
                num++;
            });
        }
        const url = opts.config.url + opts.config.mark + search;
        this.xhr.open(opts.config.type, url);
    } else if (opts.config.type.toUpperCase() === 'POST') {
        // POST
        this.xhr.open(opts.config.type, opts.config.url);
    } else {
        console.log('仅支持GET和POST请求');
    }
};
Ajax.prototype.send = function () {
    const opts = this.opts;
    const data = opts.data;
    if (opts.config.type.toUpperCase() === 'GET') {
        // GET
        this.xhr.send(null);
    } else if (opts.config.type.toUpperCase() === 'POST') {
        // POST
        if (data) {
            if (Object.prototype.toString.call(data).slice(8, -1).toLocaleLowerCase() === 'formdata') {
                this.xhr.send(data);
            } else {
                const formData = new FormData();
                Object.keys(data).forEach(function (attr) {
                    formData.append(attr, data[attr]);
                });
                this.xhr.send(formData);
            }
        } else {
            this.xhr.send(null);
        }
    } else {
        console.log('仅支持GET和POST请求');
    }
};
Ajax.prototype.events = function () {
    const self = this;
    // 上传期间持续不断地触发
    this.xhr.upload.addEventListener('progress', function (ProgressEvent) {
        self.uploadProgress();
        console.log(ProgressEvent, 'uploadProgress');
    });
    // 上传完成时触发
    this.xhr.upload.addEventListener('load', function (ProgressEvent) {
        self.uploadLoad();
        console.log(ProgressEvent, 'uploadLoad');
    });
    // 在接收到响应数据的第一个字节时触发
    this.xhr.addEventListener('loadstart', function (ProgressEvent) {
        self.loadStart();
        console.log(ProgressEvent, 'loadStart');
    });
    // 在接收响应期间持续不断地触发
    this.xhr.addEventListener('progress', function (ProgressEvent) {
        self.progress();
        console.log(ProgressEvent, 'progress');
    });
    // 在请求发生错误时触发
    this.xhr.addEventListener('error', function (ProgressEvent) {
        self.error();
        console.log(ProgressEvent, 'error');
    });
    // 在因为调用abort()方法而终止请求时触发
    this.xhr.addEventListener('abort', function (ProgressEvent) {
        self.abort();
        console.log(ProgressEvent, 'abort');
    });
    // 在接收到完整的响应数据时触发
    this.xhr.addEventListener('load', function (ProgressEvent) { // readyState状态为4对应xhr2中的load事件。
        self.load(ProgressEvent);
        console.log(ProgressEvent, 'load', 999);
    });
    // 在通信完成或者触发error、abort或load事件后触发
    this.xhr.addEventListener('loadend', function (ProgressEvent) {
        self.loadEnd();
        console.log(ProgressEvent, 'loadend');
    });
    // 请求超时
    this.xhr.addEventListener('timeout', function (ProgressEvent) {
        self.timeout();
        console.log(ProgressEvent, 'timeout');
    });
};
// 上传期间持续不断地触发
Ajax.prototype.uploadProgress = function () {
    this.opts.callback.uploadProgress();
};
// 上传完成时触发
Ajax.prototype.uploadLoad = function () {
    this.opts.callback.uploadLoad();
};
// 在接收到响应数据的第一个字节时触发
Ajax.prototype.loadStart = function () {
    this.opts.callback.loadStart();
};
// 在接收响应期间持续不断地触发
Ajax.prototype.progress = function () {
    this.opts.callback.progress();
};
// 在请求发生错误时触发
Ajax.prototype.error = function () {
    this.opts.callback.error();
};
// 在因为调用abort()方法而终止请求时触发
Ajax.prototype.abort = function () {
    this.opts.callback.abort();
};
// 在接收到完整的响应数据时触发
Ajax.prototype.load = function () {
    this.opts.callback.load();
};
// 在通信完成或者触发error、abort或load事件后触发
Ajax.prototype.loadEnd = function () {
    this.opts.callback.loadEnd();
    this.complete();
};
// 等同于loadEnd
Ajax.prototype.complete = function () {
    this.opts.callback.complete();
};
// 请求超时
Ajax.prototype.timeout = function () {
    this.opts.callback.timeout();
};
// 手动触发取消请求
Ajax.prototype.triggerAbort = function () {
    if (this.xhr.abort) {
        this.xhr.abort();
    } else {
        console.log('浏览器不支持xhr2的abort');
    }
};

module.exports = Ajax;
