const Super = require('../api-super/super'); // 超类型
const Canvas = require('canvas');

class Sub extends Super {
    // (查)(盖)查找数据(覆盖超类型)
    getData() {
        const self = this;
        const opts = self.opts;
        const req = opts.req;
        const session = req.session;

        const width = 200; // 160
        const height = 200; // 160
        const Image = Canvas.Image;
        const canvas = new Canvas(width, height);
        const ctx = canvas.getContext('2d');
        ctx.font = '30px Impact';
        ctx.rotate(0.1);
        ctx.fillText('Awesome!', 50, 100);
        const te = ctx.measureText('Awesome!');
        ctx.strokeStyle = 'rgba(0,0,0,0.5)';
        ctx.beginPath();
        ctx.lineTo(50, 102);
        ctx.lineTo(50 + te.width, 102);
        ctx.stroke();

        session.adminVerifyCodeCanvas = '';
        const base64 = canvas.toDataURL();
        this.render({
            status: 'success',
            message: '成功',
            result: {
                data: [{
                    base64: base64,
                    width: width,
                    height: height,
                    widthHeightScale: width / height,
                }],
            },
        });
    }
}

module.exports = Sub;
