const Super = require('../pages-super/super'); // 超类型

class Sub extends Super {
    handleData() {
        const self = this;
        const opts = self.opts;
        const req = opts.req;
        const data = req.data;
        const dataInfo = self.dataInfo;
        if (data.type === 'custom') {
            dataInfo.title = '自定义页面装修';
        } else if (data.type === 'h5Home') {
            dataInfo.title = 'h5首页装修';
        } else if (data.type === 'wxHome') {
            dataInfo.title = '微信小程序首页装修';
        } else if (data.type === 'bdHome') {
            dataInfo.title = '百度小程序首页装修';
        }
        self.render(); // 渲染视图(渲染数据)
    }
}

module.exports = Sub;
