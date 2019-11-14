// const Super = require('../pages-super/super'); // 超类型
const Super = require('./register'); // 超类型
// 注意事项：因继承的是register，所以handleData在下面就不能用了。如果使用了会导致register中handleData里设置好的dataInfo数据丢失，以至于页面报错。
// 因继承时子类型里的handleData方法会覆盖超类型里的handleData方法。

class Sub extends Super {
}

module.exports = Sub;
