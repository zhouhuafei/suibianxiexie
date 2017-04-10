//底层方法
var base = require('../base/base.js');

//超类型(子类型继承的对象)
var Super = require('../modules/m-super-type.js');

//子类型
class Sub extends Super {
    constructor(json) {
        super(json);

        this.opt = base.extend({
            default: this.opt,
            inherit: json
        });
        this.opt = base.extend({
            default: {
                data: '6789'
            },
            inherit: this.opt
        });
        //console.log(this.opt, 888);
    }
}

module.exports = Sub;
