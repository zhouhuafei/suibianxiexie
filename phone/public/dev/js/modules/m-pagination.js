//底层方法
var base = require('../base/base.js');

//超类型(子类型继承的对象)
var SuperType = require('../modules/m-super-type.js');

//默认数据
var defaultData = {
    dataNowNum: 10,//当前页的数据条数
    dataAllNum: 100,//所有数据的总条数
    pageNowNum: 1,//当前页码
    pageAllNum: null//总页码
};
defaultData.pageAllNum = Math.ceil(defaultData.dataAllNum / defaultData.dataNowNum);

//子类型
var SubType = base.constructorInherit({
    superType: SuperType,
    //默认参数(继承超类型)
    parameter: {
        //回调
        callback: {},
        //配置
        config: {},
        //数据
        data: defaultData
    }
});

//内部模块的创建(覆盖超类型)
SubType.prototype.moduleDomCreate = function () {
    this.moduleDom = base.createElement({
        style: this.opt.config.moduleDomStyle,
        custom: this.opt.config.moduleDomCustomAttr,
        attribute: {
            className: `m-pagination`,
            innerHTML: `
                <div class="m-pagination-txt">第</div>
                <div class="m-pagination-num">
                    <div class="g-select">
                        <label class="g-select-label">
                            <select name="" class="g-select-select">
                                ${this.renderOption()}
                            </select>
                            <span class="g-select-icon iconfont icon-select"></span>
                        </label>
                    </div>
                </div>
                <div class="m-pagination-txt">页</div>
                <a href="javascript:;" class="m-pagination-btn iconfont icon-zuojiantou"></a>
                <a href="javascript:;" class="m-pagination-btn iconfont icon-youjiantou"></a>
            `
        }
    });
};

//渲染第几页里面的页码
SubType.prototype.renderOption = function () {
    var html = ``;
    for (var i = 0; i < this.opt.data.pageAllNum; i++) {
        html += `<option value="${i + 1}">${i + 1}</option>`;
    }
    return html;
};

//功能(覆盖超类型)
SubType.prototype.power = function () {
    //功能重写待续...
};

module.exports = SubType;