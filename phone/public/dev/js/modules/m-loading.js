var createElement = require('../function/create-element');//创建元素节点
var constructorInherit = require('../function/constructor-inherit');//构造函数的继承(拷贝继承)
var SuperType = require('../modules/m-super-type');//超类型(子类型继承的对象)
//var Mask = require('../modules/m-mask');//遮罩

//子类型
var SubType = constructorInherit({
    superType: SuperType,
    //默认参数(继承超类型)
    parameter: {
        //回调
        callback: {
            moduleDomRenderBefore: function (self) {
                // if (self.opts.config.isShowMask) {
                //     new Mask({
                //         wrap: self.moduleDom.querySelector('.m-loading-wrap'),
                //         config: {
                //             moduleDomIsShow: true,
                //             moduleDomRenderMethod: {method: 'insertBefore'}
                //         }
                //     });
                // }
                if (self.wrapDom && getComputedStyle(self.wrapDom).position == 'static') {
                    self.wrapDom.style.position = 'relative';
                }
            }
        },
        //配置
        config: {
            //isShowMask: false,  //是否显示遮罩(默认不显示)
            status: 'loading',  //加载状态 loading(加载中) over(加载完毕)
            positionMethod: '',   //模块的定位方式 'fixed'(相对于整个文档) 'absolute'(相对于外部容器)
            positionLocation: 'center',//模块的定位位置
            moduleDomIsShow: false  //内部模块是否显示(默认不显示)
        },
        //数据
        data: {}
    }
});

//内部模块的创建(覆盖超类型)
SubType.prototype.moduleDomCreate = function () {
    var config = this.opts.config;
    var moduleDomHtml = ``;
    var moduleDomClass = ``;
    var status = config.status;
    var positionMethod = config.positionMethod;
    var positionLocation = config.positionLocation;
    //加载中
    if (status == 'loading') {
        moduleDomClass = `m-loading-loading `;
        //相对文档居中
        if (positionMethod == 'fixed') {
            moduleDomClass += `m-loading-fixed m-loading-${positionLocation}`;
        }
        //相对容器居中
        if (positionMethod == 'absolute') {
            moduleDomClass += `m-loading-absolute m-loading-${positionLocation}`;
        }
        moduleDomHtml = `
            <div class="m-loading-wrap">
                <div class="m-loading-loading-icon iconfont icon-jiazaizhong"></div>
            </div>
        `;
    }
    //加载完毕
    if (status == 'over') {
        moduleDomClass = `m-loading-over `;
        //相对文档居中
        if (positionMethod == 'fixed') {
            moduleDomClass += `m-loading-fixed m-loading-${positionLocation}`;
        }
        //相对容器居中
        if (positionMethod == 'absolute') {
            moduleDomClass += `m-loading-absolute m-loading-${positionLocation}`;
        }
        moduleDomHtml = `
            <div class="m-loading-wrap">
                <div class="m-loading-over-icon iconfont icon-meiyoushuju"></div>
                <div class="m-loading-over-txt">没有数据了</div>
            </div>
        `;
    }
    //模块创建
    this.moduleDom = createElement({
        style: this.opts.config.moduleDomStyle,
        custom: this.opts.config.moduleDomCustomAttr,
        attribute: {
            className: `m-loading ${moduleDomClass}`,
            innerHTML: moduleDomHtml
        }
    });
};

//功能(覆盖超类型)
SubType.prototype.power = function () {
    //功能重写待续...
};

module.exports = SubType;