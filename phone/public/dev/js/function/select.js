//全选,不选,反选
var extend = require('../function/extend');
var getDomArray = require('../function/get-dom-array');

function Select(json) {
    this.opt = extend({
        default: {
            items: null,//所有的被选项
            callback: {
                click: function () {
                }
            }
        },
        inherit: json
    });
    this.itemsDom = getDomArray({element: this.opt.items});
    this.init();
}

//初始化
Select.prototype.init = function () {
    this.power();
};

//不选
Select.prototype.selectNothing = function () {
    this.itemsDom.forEach(function (v) {
        v.checked = false;
    });
};

//全选
Select.prototype.selectAll = function () {
    this.itemsDom.forEach(function (v) {
        v.checked = true;
    });
};

//反选
Select.prototype.selectReverse = function () {
    this.itemsDom.forEach(function (v) {
        v.checked = !v.checked;
    });
};

//当某一项被选中时,是否全部选项都被选中了
Select.prototype.power = function () {
    var self = this;
    this.itemsDom.forEach(function (v1) {
        v1.addEventListener('click', function () {
            var isCheckedAll = true;//是否全部的选项都被选中了(假设全部选中)
            self.itemsDom.forEach(function (v2) {
                if (v2.checked == false) {
                    isCheckedAll = false;
                }
            });
            self.opt.callback.click({element: this, isCheckedAll: isCheckedAll});
        });
    });
};

module.exports = Select;