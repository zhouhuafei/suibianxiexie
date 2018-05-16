const Super = require('../api-super/super'); // 超类型
const fnVerifyCodeCanvas = require('../../../../utils/verify-code-canvas'); // 验证码,图文随机

class Sub extends Super {
    // (查)(覆)查找数据(覆盖超类型)
    getData() {
        const self = this;
        const opts = self.opts;
        const res = opts.res;
        const req = opts.req;
        const session = req.session;
        const data = req.data;
        const isHtml = data.isOnlyRenderHtml;
        const verifyCodeCanvas = fnVerifyCodeCanvas();
        session.verifyCodeCanvasAdmin = verifyCodeCanvas.text;
        delete verifyCodeCanvas.text;
        if (isHtml === 'true') {
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
            res.end(`<img src="${verifyCodeCanvas.base64}" alt="" />`);
        } else {
            this.render({
                status: 'success',
                message: '成功',
                result: verifyCodeCanvas,
            });
        }
    }
}

module.exports = Sub;
