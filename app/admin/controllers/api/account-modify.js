const Super = require('../api-super/super'); // 超类型
const tools = require('zhf.tools');
const multipleCalls = tools.multipleCalls;

class Sub extends Super {
    // (增)(覆)增加数据(覆盖超类型)
    postData() {
        const self = this;
        const tools = self.tools; // 工具方法集合
        const opts = self.opts;
        const req = opts.req;
        const session = req.session;
        const data = req.data;
        const oldUsername = (data['old-username'] || '').trim(); // 旧用户名
        const newUsername = (data['new-username'] || '').trim(); // 新用户名
        const verifyCodeCanvas = (data['verify-code-canvas'] || '').trim(); // 验证码,图文随机
        const sessionVerifyCodeCanvasAdmin = session.verifyCodeCanvasAdmin; // 先保存一份验证码，留着下面做验证。
        delete session.verifyCodeCanvasAdmin; // 请求一次之后就清掉验证码，无论成功失败，都要让验证码无效。
        const checkStr = tools.checkStr;
        if (checkStr.isEmpty(oldUsername)) {
            self.render({
                message: '旧用户名不能为空',
                result: {'old-username': oldUsername},
            });
        } else if (checkStr.isEmpty(newUsername)) {
            self.render({
                message: '新用户名不能为空',
                result: {'old-username': oldUsername},
            });
        } else if (newUsername === oldUsername) {
            self.render({
                message: '新用户名不能和旧用户名重复',
                result: {'old-username': oldUsername},
            });
        } else if (checkStr.isEmpty(verifyCodeCanvas)) {
            self.render({
                message: '验证码不能为空',
                result: {'verify-code-canvas': verifyCodeCanvas},
            });
        } else if (verifyCodeCanvas !== sessionVerifyCodeCanvasAdmin) {
            self.render({
                message: '验证码错误',
                result: {'verify-code-canvas': verifyCodeCanvas},
            });
        } else {
            const Admins = require('../../models/mongoose/admins');
            // 先检测新用户名是否已经被注册。
            Admins.findOne({username: newUsername}, function (error, result) {
                if (error) {
                    self.render({message: '数据库查询出现错误'});
                }
                if (result) {
                    self.render({message: '新账号已被他人使用'});
                } else {
                    // 更新数据库
                    const $set = {
                        username: newUsername,
                        loginStamp: `${Math.random()}`.split('.')[1], // 让所有用户掉线
                    };
                    const adminInfo = session.adminInfo;
                    Admins.update({_id: adminInfo._id}, {$set: $set}, function (error) {
                        // 数据库更新出现错误
                        if (error) {
                            self.render({
                                message: '账号更新出现错误',
                                failureInfo: error,
                            });
                            return;
                        }
                        delete session.adminInfo; // 让当前用户掉线
                        self.render({
                            status: 'success',
                            message: '已成功修改账号',
                        });
                    });
                }
            });
        }
    }
}

module.exports = Sub;
