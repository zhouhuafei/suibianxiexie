//底层方法
var base = require('../base/base.js');

//超类型(子类型继承的对象)
var SuperType = require('../modules/m-super-es6.js');

//子类型
class SubType extends SuperType {
    constructor(json) {
        /*
         * 继承超类型的属性和方法
         * 就算使用Super.call继承属性,也会先执行内部的init函数,这个和es6的比较
         * 我封装的es5继承函数constructor-inherit是先处理的参数this.opt,再进行的继承
         * 这里的es6继承,是先进行的继承,再处理的参数,因为继承之前,子类无this属性
         * 不管是es5的继承,还是es6的继承,都会执行函数内部的一切,例如
         * 我封装的constructor-inherit继承属性时Super.call(this,this.opt),函数内部的init方法被执行了
         * 执行前我处理了参数this.opt,所有一切还算稳定,我喜欢这个写法
         * es6继承属性和方法用super(json),继承时函数内部的init方法也被执行了,执行后才处理的参数this.opt
         * 后处理参数的话,即使我更新了默认的参数配置,覆盖了超类的方法,也获取不到最新参数上的数据,导致默认参数无效
         * 因为函数执行super(json)的时候,init已经被调用了,数据是后更新的,所以不能获取到,因此
         * 我需要清除内部模块,并进行重新调用,这点我很不喜欢,所以我现在的场景还是更适合es5的面向对象
         * 注:init方法是我封装的超类型里的初始化方法,this.opt是超类型里的参数,参数我喜欢用对象的形式
         * */
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
