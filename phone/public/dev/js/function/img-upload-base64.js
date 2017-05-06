//图片上传
function Fn(json) {
    this.opts = json || {};
    //如果没有选择文件的input,则不继续往下执行
    if (!this.opts.input) {
        console.log('no find input');
        return;
    }
    //一次上传限制几张图片
    this.opts.limitNum = this.opts.limitNum || '5';
    //选择图片的回调
    this.opts.changeCallback = this.opts.changeCallback || function () {
            console.log('no find changeCallback');
        };
    //把图片读取成base64编码的回调
    this.opts.base64Callback = this.opts.base64Callback || function () {
            console.log('no find base64Callback');
        };
    //初始化
    this.init();
}
Fn.prototype.init = function () {
    //渲染结构
    this.render();
    //渲染功能
    this.power();
};
Fn.prototype.render = function () {

};
Fn.prototype.power = function () {
    //事件相关
    this.events();
};
Fn.prototype.events = function () {
    this.eventsInputChange();
};
Fn.prototype.eventsInputChange = function () {
    var self = this;
    var limitNum = this.opts.limitNum;
    this.opts.input.addEventListener('change', function () {
        var imagesNum = 0;
        //图片的相关信息
        self.imgData = [];
        var files = this.files;
        var len = files.length;
        for (var i = 0; i < len; i++) {
            var f = files[i];
            var isImages = /image/ig.test(f.type);
            //不是图片
            if (!isImages) {
                continue;
            }
            //是图片
            if (isImages) {
                if (imagesNum < limitNum) {//小于限制几张图片的数量
                    self.imgData.push(f);
                    imagesNum++;
                } else {//大于限制几张图片的数量

                }
            }
        }
        self.opts.changeCallback({imgData: self.imgData});
        //把图片读成base64编码
        self.fileReadAsDataURL();
    });
};
Fn.prototype.fileReadAsDataURL = function () {
    var self = this;
    this.imgData.forEach(function (v, i) {
        var fileRender = new FileReader();
        fileRender.readAsDataURL(v);
        fileRender.addEventListener('load', function () {
            self.opts.base64Callback({base64: this.result, index: i});
        });
    });
};