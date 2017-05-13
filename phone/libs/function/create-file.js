const extend = require('../tools/extend');
const fs = require('fs');

class CreateFile {
    constructor(json) {
        this.opts = extend({
            defaults: {
                callback: {
                    writeFile: function () {
                    }
                },
                config: {
                    isCover: false//是否覆盖已有文件
                },
                data: {
                    path: '',//路径
                    fileName: '',//文件名
                    extendName: '',//扩展名
                    content: ''//文件的内容
                }
            },
            inherits: json
        });
        this.init();
    }

    init() {
        this.errorHandle();
    }

    errorHandle() {
        var data = this.opts.data;
        if (!data.path) {
            console.log('路径不存在');
            return false;
        }
        if (!data.fileName) {
            console.log('文件名不存在');
            return false;
        }
        if (!data.extendName) {
            console.log('扩展名不存在');
            return false;
        }
        this.power();
    }

    writeFile() {
        var self = this;
        var data = this.opts.data;
        var file = data.path + data.fileName + data.extendName;
        fs.writeFile(file, data.content, function (error) {
            if (error) {
                console.log(`错误信息:${error}`);
            } else {
                console.log(`文件创建成功,文件路径:${file}`);
            }
            self.opts.callback.writeFile(error);
        });
    }

    power() {
        var self = this;
        var data = this.opts.data;
        var file = data.path + data.fileName + data.extendName;
        fs.readFile(file, function (error, response) {
            if (self.opts.config.isCover) {
                self.writeFile();
            } else {
                if (response) {
                    console.log(`文件已经存在,文件路径:${file}`);
                } else {
                    self.writeFile();
                }
            }
        });
    }
}

module.exports = CreateFile;