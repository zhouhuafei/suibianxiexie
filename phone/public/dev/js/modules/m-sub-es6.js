//底层方法
var base = require('../base/base.js');

//超类型(子类型继承的对象)
var SuperType = require('../modules/m-super-es6.js');

//子类型
class SubType extends SuperType {
    constructor(json) {
        //继承超类型的属性和方法
        super(json);
        //console.log('我在代码里靠近上方', 1);//先打印下面的2
        //制定内部的默认值
        this.opt = base.extend({
            default: this.opt,
            inherit: {
                callback: {
                    moduleDomClick(){
                        //内部模块的点击回调待续...
                    }
                },
                config: {
                    moduleDomStyle: 'color:#f00;'
                },
                data: {
                    default: 'default'
                }
            }
        });
        //接收外部的参数
        this.opt = base.extend({
            default: this.opt,
            inherit: json
        });
        /*
         * 因为es6的继承是:子类型继承超类之后,才拥有this属性的原因,我要先移除一次,再重新生成
         * 否则的话,上面的默认值不会生效
         * */
        this.moduleDomRemove();
        this.init();
    }

    //内部模块的创建(覆盖超类型)
    moduleDomCreate() {
        //console.log('我在代码里靠近下方', 2);//后打印上面的1
        this.moduleDom = base.createElement({
            style: this.opt.config.moduleDomStyle,
            custom: this.opt.config.moduleDomCustomAttr,
            attribute: {
                className: `m-test-es6`,
                innerHTML: `
                    <div class="m-test-es6-txt">周华飞爱侯丽杰2,侯丽杰爱周华飞2</div>
                `
            }
        });
    }

    //功能重写(覆盖超类型)
    power() {
        var self = this;
        this.moduleDom.addEventListener('click', function () {
            self.opt.callback.moduleDomClick(this);
        })
    }
}

module.exports = SubType;
