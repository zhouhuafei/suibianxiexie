let tools = require('../utils/tools');// 工具方法集合
let applications = require('../utils/applications');// 应用方法集合
let SuperType = require('../components/g-super-type');// 超类型(子类型继承的对象)

// 默认数据
var defaultData = {
    nowCount: 10, // 当前页的数据条数
    allCount: 100, // 数据总条数
    nowPage: 1, // 当前页
    allPage: null, // 总页数
};
defaultData.allPage = Math.ceil(defaultData.allCount / defaultData.nowCount);

// 子类型
var SubType = tools.constructorInherit({
    superType: SuperType,
    // 默认参数(继承超类型)
    parameter: {
        // 回调
        callback: {
            // 上一页的回调
            prevPage: function () {
            },
            // 下一页的回调
            nextPage: function () {
            },
            // 选择某一页的回调
            selectPage: function () {
            },
        },
        // 配置
        config: {},
        // 数据
        data: defaultData,
    },
});

// 内部模块的创建(覆盖超类型)
SubType.prototype.moduleDomCreate = function () {
    this.moduleDom = applications.createElement({
        style: this.opts.config.moduleDomStyle,
        customAttribute: this.opts.config.moduleDomCustomAttribute,
        attribute: {
            className: `g-pagination`,
            innerHTML: `
                <div class="g-pagination-text">第</div>
                <div class="g-pagination-now-page">
                    <label class="g-select">
                        <span class="g-select-wrap">
                            <select class="g-select-select">
                                ${this.renderOption()}
                            </select>
                            <span class="g-select-mark iconfont icon-select"></span>
                        </span>
                    </label>
                </div>
                <div class="g-pagination-text">页</div>
                <a href="javascript:;" class="g-pagination-btn g-pagination-btn-inactive iconfont icon-shangyiye"></a>
                <a href="javascript:;" class="g-pagination-btn iconfont icon-xiayiye"></a>
            `,
        },
    });
    this.prevDom = this.moduleDom.querySelectorAll('.g-pagination-btn')[0];// 上一页的按钮
    this.nextDom = this.moduleDom.querySelectorAll('.g-pagination-btn')[1];// 下一页的按钮
    this.btnInactiveClass = 'g-pagination-btn-inactive';// 上一页和下一页的禁用状态
    this.selectDom = this.moduleDom.querySelector('.g-pagination-now-page .g-select-select');// 选择某一页的按钮
};

// 渲染第几页里面的页码
SubType.prototype.renderOption = function () {
    var html = ``;
    for (var i = 0; i < this.opts.data.allPage; i++) {
        html += `<option value="${i + 1}">${i + 1}</option>`;
    }
    return html;
};

// 功能(覆盖超类型)
SubType.prototype.power = function () {
    var self = this;
    var data = this.opts.data;
    if (data.nowPage === 1) {
        this.prevPageDisable();
    }
    if (data.nowPage === data.allPage) {
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
    });
};

// 上一页
SubType.prototype.prevPage = function () {
    var data = this.opts.data;
    if (data.nowPage > 1) {
        data.nowPage--;
        var oldChecked = this.selectDom.querySelector('option:checked');
        if (oldChecked.previousElementSibling) {
            oldChecked.selected = false;
            oldChecked.previousElementSibling.selected = true;
        }
        this.nextPageEnable();
        this.opts.callback.prevPage(this);
    }
    if (data.nowPage === 1) {
        this.prevPageDisable();
    }
    console.log(data);
};

// 下一页
SubType.prototype.nextPage = function () {
    var data = this.opts.data;
    if (data.nowPage < data.allPage) {
        data.nowPage++;
        var oldChecked = this.selectDom.querySelector('option:checked');
        if (oldChecked.nextElementSibling) {
            oldChecked.selected = false;
            oldChecked.nextElementSibling.selected = true;
        }
        this.prevPageEnable();
        this.opts.callback.nextPage(this);
    }
    if (data.nowPage === data.allPage) {
        this.nextPageDisable();
    }
    console.log(data);
};

// 选择第几页
SubType.prototype.selectPage = function () {
    var data = this.opts.data;
    data.nowPage = this.selectDom.value;
    this.nextPageEnable();
    this.prevPageEnable();
    if (data.nowPage === 1) {
        this.prevPageDisable();
    }
    if (data.nowPage === data.allPage) {
        this.nextPageDisable();
    }
    this.opts.callback.selectPage(this);
    console.log(data);
};

// 上一页禁用
SubType.prototype.prevPageDisable = function () {
    this.prevDom.classList.add(this.btnInactiveClass);
};

// 上一页启用
SubType.prototype.prevPageEnable = function () {
    this.prevDom.classList.remove(this.btnInactiveClass);
};

// 下一页禁用
SubType.prototype.nextPageDisable = function () {
    this.nextDom.classList.add(this.btnInactiveClass);
};

// 下一页启用
SubType.prototype.nextPageEnable = function () {
    this.nextDom.classList.remove(this.btnInactiveClass);
};

module.exports = SubType;
