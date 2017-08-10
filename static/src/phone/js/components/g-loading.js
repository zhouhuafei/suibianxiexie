let tools = require('../base/tools');//工具方法集合
let applications = require('../base/applications');//应用方法集合
let SuperType = require('../components/g-super-type');//超类型(子类型继承的对象)

//子类型
var SubType = tools.constructorInherit({
    superType: SuperType,
    //默认参数(继承超类型)
    parameter: {
        //回调
        callback: {},
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
        moduleDomClass = `g-loading-loading `;
        //相对文档居中
        if (positionMethod == 'fixed') {
            moduleDomClass += `g-loading-fixed g-loading-${positionLocation}`;
        }
        //相对容器居中
        if (positionMethod == 'absolute') {
            moduleDomClass += `g-loading-absolute g-loading-${positionLocation}`;
        }
        moduleDomHtml = `
            <div class="g-loading-wrap">
                <div class="g-loading-loading-icon iconfont icon-jiazaizhong"></div>
            </div>
        `;
    }
    //加载完毕
    if (status == 'over') {
        moduleDomClass = `g-loading-over `;
        //相对文档居中
        if (positionMethod == 'fixed') {
            moduleDomClass += `g-loading-fixed g-loading-${positionLocation}`;
        }
        //相对容器居中
        if (positionMethod == 'absolute') {
            moduleDomClass += `g-loading-absolute g-loading-${positionLocation}`;
        }
        moduleDomHtml = `
            <div class="g-loading-wrap">
                <div class="g-loading-over-icon iconfont icon-meiyoushuju"></div>
                <div class="g-loading-over-text">没有数据了</div>
            </div>
        `;
    }
    //模块创建
    this.moduleDom = applications.createElement({
        style: this.opts.config.moduleDomStyle,
        customAttribute: this.opts.config.moduleDomCustomAttribute,
        attribute: {
            className: `g-loading ${moduleDomClass}`,
            innerHTML: moduleDomHtml
        }
    });
};

//功能(覆盖超类型)
SubType.prototype.power = function () {
    //功能重写待续...
};

module.exports = SubType;