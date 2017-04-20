define(function (require, exports, module) {
    var jq = jQuery;

    function Render(json) {
        this.opt = jq.extend(
            true,
            {
                //容器
                wrap: '.page-wrap',
                //回调
                callback: {
                    change: function () {
                    },
                    blur: function () {
                    },
                    prev: function () {
                    },
                    next: function () {
                    }
                },
                //配置
                config: {},
                //数据
                data: {
                    dataNowNum: 10,//当前页的数据条数
                    dataAllNum: 100,//所有数据的总条数
                    pageNowNum: 1,//当前页码
                    pageAllNum: null//总页码
                }
            },
            json
        );
        var data = this.opt.data;
        data.pageAllNum = Math.ceil(data.dataAllNum / data.dataNowNum);
        this.init();
    }

    Render.prototype.init = function () {
        this.render();
        this.power();
    };

    Render.prototype.render = function () {
        var data = this.opt.data;
        this.wrapDom = jq(this.opt.wrap)[0];
        this.wrapDom.innerHTML = `
            <div class="m-pagination">
                <div class="m-pagination-txt">每页</div>
                <div class="m-pagination-num">
                    <label class="m-pagination-num-label">
                        <input value="${data.dataNowNum}" class="m-pagination-num-input" type="text">
                    </label>
                </div>
                <div class="m-pagination-txt">条</div>
                <div class="m-pagination-txt">第</div>
                <div class="m-pagination-num">
                    <label class="m-pagination-num-label">
                        <select class="m-pagination-num-select" name="">
                            ${this.renderOption()}
                        </select>
                    </label>
                </div>
                <div class="m-pagination-txt">页</div>
                <div class="m-pagination-txt">共</div>
                <div class="m-pagination-txt m-pagination-all-page-num">${data.pageAllNum}</div>
                <div class="m-pagination-txt">页</div>
                <a href="javascript:;" class="m-pagination-btn m-pagination-btn-inactive">上一页</a>
                <a href="javascript:;" class="m-pagination-btn">下一页</a>
            </div>
        `;
    };

    Render.prototype.renderOption = function () {
        var html = ``;
        for (var i = 0; i < this.opt.data.pageAllNum; i++) {
            html += `<option value="${i + 1}">${i + 1}</option>`;
        }
        return html;
    };

    Render.prototype.power = function () {
        var self = this;
        var aBtn = self.wrapDom.querySelectorAll('.m-pagination-btn');

        aBtn[0].onclick = function () {
            if (!this.classList.contains('m-pagination-btn-inactive')) {
                self.prev();
            }
        };

        aBtn[1].onclick = function () {
            if (!this.classList.contains('m-pagination-btn-inactive')) {
                self.next();
            }
        };

        var oBlur = self.wrapDom.querySelector('.m-pagination-num-input');
        var oldV = oBlur.value;
        oBlur.onblur = function () {
            if (this.value != oldV) {
                oldV = this.value;
                self.blur(this);
            }
        };

        self.wrapDom.querySelector('.m-pagination-num-select').onchange = function () {
            self.change(this);
        }
    };

    //上一页
    Render.prototype.prev = function () {
        var data = this.opt.data;
        if (data.pageNowNum > 1) {
            data.pageNowNum = data.pageNowNum - 1;
        }
        this.nextAble();
        if (data.pageNowNum <= 1) {
            this.prevDisable();
        }
        this.opt.callback.prev(this);
        var nowChecked = this.wrapDom.querySelector('.m-pagination-num-select option:checked');
        if (nowChecked.previousElementSibling) {
            nowChecked.selected = false;
            nowChecked.previousElementSibling.selected = true;
        }
    };

    //下一页
    Render.prototype.next = function () {
        var data = this.opt.data;
        if (data.pageNowNum < data.pageAllNum) {
            data.pageNowNum = data.pageNowNum + 1;
        }
        this.prevAble();
        if (data.pageNowNum >= data.pageAllNum) {
            this.nextDisable();
        }
        this.opt.callback.next(this);
        var nowChecked = this.wrapDom.querySelector('.m-pagination-num-select option:checked');
        if (nowChecked.nextElementSibling) {
            nowChecked.selected = false;
            nowChecked.nextElementSibling.selected = true;
        }
    };

    //每页多少条
    Render.prototype.blur = function (obj) {
        var data = this.opt.data;
        data.dataNowNum = obj.value;
        data.pageAllNum = Math.ceil(data.dataAllNum / data.dataNowNum);
        this.opt.callback.blur(this);
        this.wrapDom.querySelector('.m-pagination-num-select').innerHTML = this.renderOption();
        this.wrapDom.querySelector('.m-pagination-all-page-num').innerHTML = data.pageAllNum;
    };

    //选择第几页
    Render.prototype.change = function (obj) {
        var data = this.opt.data;
        data.pageNowNum = obj.value;
        this.opt.callback.change(this);
        this.prevAble();
        this.nextAble();
        if (data.pageNowNum <= 1) {
            this.prevDisable();
        }
        if (data.pageNowNum >= data.pageAllNum) {
            this.nextDisable();
        }
    };

    //启用上一页
    Render.prototype.prevAble = function () {
        this.wrapDom.querySelectorAll('.m-pagination-btn')[0].classList.remove('m-pagination-btn-inactive');
    };
    //禁用上一页
    Render.prototype.prevDisable = function () {
        this.wrapDom.querySelectorAll('.m-pagination-btn')[0].classList.add('m-pagination-btn-inactive');
    };

    //启用下一页
    Render.prototype.nextAble = function () {
        this.wrapDom.querySelectorAll('.m-pagination-btn')[1].classList.remove('m-pagination-btn-inactive');
    };

    //禁用下一页
    Render.prototype.nextDisable = function () {
        this.wrapDom.querySelectorAll('.m-pagination-btn')[1].classList.add('m-pagination-btn-inactive');
    };

    module.exports = Render;
});