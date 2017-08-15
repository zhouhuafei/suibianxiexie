let tools = require('../base/tools');// 工具方法集合
let applications = require('../base/applications');// 应用方法集合
let SuperType = require('../components/g-super-type-es6');// 超类型(子类型继承的对象)

// 子类型
class SubType extends SuperType {
    constructor (json) {
        /*
         * 继承超类型的属性和方法
         * 就算使用Super.call继承属性,也会先执行内部的init函数,这个和es6的比较
         * 我封装的es5继承函数constructor-inherit是先处理的参数this.opts,再进行的继承
         * 这里的es6继承,是先进行的继承,再处理的参数,因为继承之前,子类无this属性
         * 不管是es5的继承,还是es6的继承,都会执行函数内部的一切,例如
         * 我封装的constructor-inherit继承属性时Super.call(this,this.opts),函数内部的init方法被执行了
         * 执行前我处理了参数this.opts,所有一切还算稳定,我喜欢这个写法
         * es6继承属性和方法用super(json),继承时函数内部的init方法也被执行了,执行后才处理的参数this.opts
         * 后处理参数的话,即使我更新了默认的参数配置,覆盖了超类的方法,也获取不到最新参数上的数据,导致默认参数无效
         * 因为函数执行super(json)的时候,init已经被调用了,数据是后更新的,所以不能获取到,因此
         * 我需要清除内部模块,并进行重新调用,这点我很不喜欢,所以我现在的场景还是更适合es5的面向对象
         * 注:init方法是我封装的超类型里的初始化方法,this.opts是超类型里的参数,参数我喜欢用对象的形式
         * */
        super(json);// 这里会执行一次超类里的init
        // 制定内部的默认值
        this.opts = tools.extend({
            defaults: this.opts,
            // inherits里放默认参数(继承超类型)
            inherits: {
                // 回调
                callback: {},
                // 配置
                config: {},
                // 数据
                data: {},
            },
        });
        // 接收外部的参数
        this.opts = tools.extend({
            defaults: this.opts,
            inherits: json,
        });
        this.init();// 用es6继承的话,在子类里调初始化才有意义,因为子类的参数已经被赋予新值,建议不要在超类里初始化,在子类里初始化
    }

    // 内部模块的创建(覆盖超类型)
    moduleDomCreate () {
        this.moduleDom = applications.createElement({
            style: this.opts.config.moduleDomStyle,
            customAttribute: this.opts.config.moduleDomCustomAttribute,
            attribute: {
                className: `g-sub-type-es6`,
                innerHTML: `
                    <div class="g-sub-type-es6-text">周华飞爱侯丽杰,侯丽杰爱周华飞</div>
                `,
            },
        });
    }

    // 功能重写(覆盖超类型)
    power () {
        // 功能重写待续...
    }
}

module.exports = SubType;
