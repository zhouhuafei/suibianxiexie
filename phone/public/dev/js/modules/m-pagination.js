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
        callback: {
            //上一页的回调
            prevPage: function () {
            },
            //下一页的回调
            nextPage: function () {
            },
            //选择某一页的回调
            selectPage: function () {
            }
        },
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
                <div class="m-pagination-now-page">
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
                <a href="javascript:;" class="m-pagination-btn m-pagination-btn-inactive iconfont icon-zuojiantou"></a>
                <a href="javascript:;" class="m-pagination-btn iconfont icon-youjiantou"></a>
            `
        }
    });
    this.prevDom = this.moduleDom.querySelectorAll('.m-pagination-btn')[0];//上一页的按钮
    this.nextDom = this.moduleDom.querySelectorAll('.m-pagination-btn')[1];//下一页的按钮
    this.btnInactiveClass = 'm-pagination-btn-inactive';//上一页和下一页的禁用状态
    this.selectDom = this.moduleDom.querySelector('.m-pagination-now-page .g-select-select');//选择某一页的按钮
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
    var self = this;
    var data = this.opt.data;
    if (data.pageNowNum == 1) {
        this.prevPageDisable();
    }
    if (data.pageNowNum == data.pageAllNum) {
        this.nextPageDisable();
    }

    this.prevDom.addEventListener('click', function () {
        if (!this.classList.contains(self.btnInactiveClass)) {
            self.prevPage();
        }
    });

    this.nextDom.addEventListener('click', function () {
        if (!this.classList.contains(self.btnInactiveClass)) {
            self.nextPage();
        }
    });

    this.selectDom.addEventListener('change', function () {
        self.selectPage();
    })
};

//上一页
SubType.prototype.prevPage = function () {
    var data = this.opt.data;
    if (data.pageNowNum > 1) {
        data.pageNowNum--;
        var oldChecked = this.selectDom.querySelector('option:checked');
        if (oldChecked.previousElementSibling) {
            oldChecked.selected = false;
            oldChecked.previousElementSibling.selected = true;
        }
        this.nextPageEnable();
        this.opt.callback.prevPage(this);
    }
    if (data.pageNowNum == 1) {
        this.prevPageDisable();
    }
    console.log(data);
};

//下一页
SubType.prototype.nextPage = function () {
    var data = this.opt.data;
    if (data.pageNowNum < data.pageAllNum) {
        data.pageNowNum++;
        var oldChecked = this.selectDom.querySelector('option:checked');
        if (oldChecked.nextElementSibling) {
            oldChecked.selected = false;
            oldChecked.nextElementSibling.selected = true;
        }
        this.prevPageEnable();
        this.opt.callback.nextPage(this);
    }
    if (data.pageNowNum == data.pageAllNum) {
        this.nextPageDisable();
    }
    console.log(data);
};

//选择第几页
SubType.prototype.selectPage = function () {
    var data = this.opt.data;
    data.pageNowNum = this.selectDom.value;
    this.nextPageEnable();
    this.prevPageEnable();
    if (data.pageNowNum == 1) {
        this.prevPageDisable();
    }
    if (data.pageNowNum == data.pageAllNum) {
        this.nextPageDisable();
    }
    this.opt.callback.selectPage(this);
    console.log(data);
};

//上一页禁用
SubType.prototype.prevPageDisable = function () {
    this.prevDom.classList.add(this.btnInactiveClass);
};

//上一页启用
SubType.prototype.prevPageEnable = function () {
    this.prevDom.classList.remove(this.btnInactiveClass);
};

//下一页禁用
SubType.prototype.nextPageDisable = function () {
    this.nextDom.classList.add(this.btnInactiveClass);
};

//下一页启用
SubType.prototype.nextPageEnable = function () {
    this.nextDom.classList.remove(this.btnInactiveClass);
};

module.exports = SubType;