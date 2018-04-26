const Super = require('../pages-super/super'); // 超类型

class Sub extends Super {
    handleData() {
        const self = this;
        const tools = self.tools; // 工具方法集合
        const opts = self.opts;
        const req = opts.req;
        const session = req.session;
        const data = req.data;
        const dataInfo = self.dataInfo;
        const page = dataInfo.page;
        const fnVerifyCodeCanvas = require('../../../../utils/verify-code-canvas'); // 验证码,图文随机
        const verifyCodeCanvas = fnVerifyCodeCanvas();
        session.adminVerifyCodeCanvas = verifyCodeCanvas.text;
        delete verifyCodeCanvas.text;
        page.verifyCodeCanvas = verifyCodeCanvas;
        self.render(); // 渲染视图(渲染数据)
    }
}

module.exports = Sub;
