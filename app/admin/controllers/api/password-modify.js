const Super = require('../api-super/super'); // 超类型

class Sub extends Super {
    // (增)(覆)增加数据(覆盖超类型)
    postData() {
        const self = this;
        const tools = self.tools; // 工具方法集合
        const opts = self.opts;
        const req = opts.req;
        const session = req.session;
        const adminInfo = session.adminInfo;
        const data = req.data;
        const oldPassword = (data['old-password'] || '').trim(); // 旧密码 -> isEmpty方法内部去掉了首尾空格,不适用于验证密码是否为空
        const newPassword = (data['new-password'] || '').trim(); // 新密码 -> isEmpty方法内部去掉了首尾空格,不适用于验证密码是否为空
        const repeatNewPassword = (data['repeat-new-password'] || '').trim(); // 新密码二次确认 -> isEmpty方法内部去掉了首尾空格,不适用于验证密码是否为空
        const verifyCodeCanvas = (data['verify-code-canvas'] || '').trim(); // 验证码,图文随机
        const sessionVerifyCodeCanvasAdmin = session.verifyCodeCanvasAdmin; // 先保存一份验证码，留着下面做验证。
        delete session.verifyCodeCanvasAdmin; // 请求一次之后就清掉验证码，无论成功失败，都要让验证码无效。
        const checkStr = tools.checkStr;
        if (oldPassword === '') {
            self.render({message: '旧密码不能为空'});
        } else if (newPassword === '' || repeatNewPassword === '') {
            self.render({message: '新密码不能为空'});
        } else if (repeatNewPassword === '') {
            self.render({message: '重复新密码不能为空'});
        } else if (newPassword === oldPassword) {
            self.render({message: '新密码不能和旧密码一样'});
        } else if (newPassword !== repeatNewPassword) {
            self.render({message: '两次输入的新密码不一致'});
        } else if (checkStr.isEmpty(verifyCodeCanvas)) {
            self.render({message: '验证码不能为空'});
        } else if (verifyCodeCanvas !== sessionVerifyCodeCanvasAdmin) {
            self.render({message: '验证码错误'});
        } else {
            const Admins = require('../../models/mongoose/admins');
            // 如果管理员账号存在并且老密码正确则可以修改密码
            Admins.findOne({username: adminInfo.username}, function (error, result) {
                // 数据库查询出现错误
                if (error) {
                    self.render({message: '数据库查询出现错误'});
                }
                if (result) {
                    result.comparePassword(oldPassword, function (error, isMatch) {
                        if (error) {
                            self.render({
                                message: '密码对比出现错误',
                                failureInfo: error,
                            });
                        }
                        if (isMatch) {
                            // 用户名和老密码匹配了,则进行密码替换
                            const fnBcrypt = require('../../../../utils/bcrypt'); // 加密工具
                            // 密码加密
                            fnBcrypt(newPassword, function (error, hash) {
                                if (error) {
                                    self.render({
                                        message: '密码加密出现错误',
                                        failureInfo: error,
                                    });
                                } else {
                                    // 更新数据库
                                    const $set = {
                                        password: hash,
                                        loginStamp: `${Math.random()}`.split('.')[1],
                                    };
                                    Admins.update({_id: result._id}, {$set: $set}, function (error) {
                                        // 数据库更新出现错误
                                        if (error) {
                                            self.render({
                                                message: '密码更新出现错误',
                                                failureInfo: error,
                                            });
                                            return;
                                        }
                                        delete session.adminInfo; // 不加这句话，改了密码，不会掉线，加了这句话也只是当前用户掉线，其他人不掉线，集体掉线需另做处理(数据库加loginStamp字段进行一系列处理)。
                                        self.render({
                                            status: 'success',
                                            message: '已成功修改密码',
                                        });
                                    });
                                }
                            });
                        } else {
                            self.render({
                                message: '用户名和老密码不匹配',
                            });
                        }
                    });
                } else {
                    self.render({message: '账号不存在'});
                }
            });
        }
    }
}

module.exports = Sub;
