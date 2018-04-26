const Super = require('../api-super/super'); // 超类型
const Canvas = require('canvas');
const fnVerifyCodeCanvas = require('../../../../utils/verify-code-canvas'); // 验证码,图文随机

class Sub extends Super {
    // (查)(盖)查找数据(覆盖超类型)
    getData() {
        const self = this;
        const opts = self.opts;
        const req = opts.req;
        const session = req.session;
        const verifyCodeCanvas = fnVerifyCodeCanvas();
        session.adminVerifyCodeCanvas = verifyCodeCanvas.text;
        delete verifyCodeCanvas.text;
        this.render({
            status: 'success',
            message: '成功',
            result: {
                data: [verifyCodeCanvas],
            },
        });
    }
}

module.exports = Sub;
