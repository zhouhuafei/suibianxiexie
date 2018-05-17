const Super = require('../api-super/super'); // 超类型
const fs = require('fs');
const Galleries = require('../../models/mongoose/galleries');
const sizeOf = require('image-size');
const multipleCalls = require('zhf.multiple-calls');

class Sub extends Super {
    // (处)(覆)处理数据(覆盖超类型)
    handleData() {
        const data = this.opts.req.data;
        data._id = (data._id || '').trim();
        data.categoryId = (data.categoryId || '').trim(); // all(全部分类的) | default(默认分类的) hashId(其他分类的)
        data.nowPage = Math.abs((data.nowPage || 1).trim()); // 当前页
        data.nowCount = Math.abs((data.nowCount || 20).trim()); // 当前页的数据条数
    }

    // (增)(覆)获取数据(覆盖超类型)
    postData() {
        const self = this;
        const opts = self.opts;
        const req = opts.req;
        const data = req.data;
        const categoryId = data.categoryId || 'default';
        const files = req.files;
        const length = files.length;
        if (length === 0) {
            self.render({message: '请选择图片'});
            return;
        }
        const dbFiles = [];
        files.forEach(function (file) {
            const arr = file.originalname.split('.');
            const len = arr.length;
            const extName = arr[len - 1];
            if (len > 1) {
                const newPath = `${file.path}.${extName}`;
                fs.renameSync(file.path, newPath);
                file.path = newPath;
            }
            const {width, height} = sizeOf(file.path);
            dbFiles.push({
                mimeType: file.mimetype,
                size: file.size,
                path: file.path,
                originalName: file.originalname,
                createTime: new Date(),
                categoryId,
                width,
                height,
                url: file.path.split('static-cache-wrap')[1].replace(/\\/g, '/'),
            });
        });
        Galleries.insertMany(dbFiles, function (error, result) {
            if (error) {
                self.render({
                    message: '数据库插入出现错误',
                    failureInfo: error,
                });
            }
            if (result) {
                result.forEach(function (v) {
                    v.path = undefined;
                });
                self.render({
                    status: 'success',
                    message: '上传成功',
                    result: result,
                });
            }
        });
    }

    // (删)(覆)删除数据(覆盖超类型)
    deleteData() {
        const self = this;
        console.log(self.opts.req.data);
        self.render({
            status: 'success',
            message: '成功',
        });
    }

    // (改)(覆)修改数据(覆盖超类型)
    putData() {
        const self = this;
        console.log(self.opts.req.data);
        self.render({
            status: 'success',
            message: '成功',
        });
    }

    // (查)(覆)查找数据(覆盖超类型)
    getData() {
        const self = this;
        const opts = self.opts;
        const req = opts.req;
        const data = req.data;
        const reqNowPage = data.nowPage; // 当前页
        const reqNowCount = data.nowCount; // 当前页的数据条数
        if (isNaN(reqNowPage) || isNaN(reqNowCount) || reqNowPage <= 0 || reqNowCount <= 0) {
            self.render({message: '参数错误，只接收正整数'});
        }
        const reqNowCountMax = 200;
        if (reqNowCount > reqNowCountMax) {
            self.render({message: `参数错误，每次最多请求${reqNowCountMax}条数据`});
        }
        const categoryId = data.categoryId || 'all';
        const condition = {categoryId};
        // all 全部分类 - 数据库里找全部
        // default 默认分类 - 数据库里根据id找
        // 一堆hash值 其他分类 - 数据库里根据id找
        if (categoryId === 'all') {
            delete condition.categoryId;
        }
        const mulCalls = multipleCalls(2, function (noError, json) {
            const data = json.data;
            const result = data.result;
            const allCount = data.allCount;
            const nowCount = result.length;
            result.forEach(function (v) {
                v.path = undefined;
            });
            self.render({
                status: 'success',
                message: '上传成功',
                result: {
                    list: result,
                    allPage: Math.ceil(allCount / reqNowCount), // 总页数
                    nowPage: reqNowPage, // 当前页
                    allCount: allCount, // 数据总条数
                    nowCount: nowCount, // 当前页的数据条数
                },
            });
        });
        Galleries.count(condition, function (error, allCount) {
            if (error) {
                self.render({
                    message: '数据库查询出现错误',
                    failureInfo: error,
                });
            } else {
                mulCalls('allCount', allCount);
            }
        });
        Galleries.find(condition).sort({'_id': -1}).skip((reqNowPage - 1) * reqNowCount).limit(reqNowCount).exec(function (error, result) {
            if (error) {
                self.render({
                    message: '数据库查询失败',
                    failureInfo: error,
                });
            } else {
                mulCalls('result', result);
            }
        });
    }
}

module.exports = Sub;
