let fs = require('fs');
let tools = require('./tools');

//应用方法集合
function Applications() {
}
//创建文件
Applications.prototype.createFile = function () {
    class CreateFile {
        constructor(json) {
            this.opts = tools.extend({
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
            let data = this.opts.data;
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
            let self = this;
            let data = this.opts.data;
            let file = data.path + data.fileName + data.extendName;
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
            let self = this;
            let data = this.opts.data;
            let file = data.path + data.fileName + data.extendName;
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
    return CreateFile;
};

module.exports = new Applications();