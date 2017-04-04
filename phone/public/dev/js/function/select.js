//全选和反选
var extend=require('../function/extend.js');
var getDomArray=require('../function/get-dom-array.js');

function Select(json) {
    this.opt = extend({
        default: {
            //选择器
            element: {
                all: null,//全选按钮
                reverse: null,//反选按钮
                items: null//所有被选择项的按钮
            },
            //回调
            callback: {
                //全选
                all: function () {
                },
                //反选
                reverse: function () {
                },
                //某一项被选中
                items: function () {
                }
            },
            //配置
            config:{
                allIsReverse:true//全选和反选是不是同一个开关(默认是的)
            }
        },
        inherit: json
    });
    this.allDom=getDomArray({element:this.opt.element.all})[0];
    this.reverseDom=getDomArray({element:this.opt.element.reverse})[0];
    this.itemsDom=getDomArray({element:this.opt.element.items});
    if(this.allDom){
        this.init();
    }



    // this.opt = json || {};
    // this.selectAllButton = this.opt.selectAllButton;
    // this.radioButton = this.opt.radioButton;
    // this.allSelectYesCallback = this.opt.allSelectYesCallback;//全选的回调
    // this.allSelectNoCallback = this.opt.allSelectNoCallback;//返选的回调
    // this.oneSelectCallback = this.opt.oneSelectCallback;//单选的回调
    // if (this.selectAllButton && this.radioButton) {
    //     this.init();
    // } else {
    //     console.log('did not find the correct parameters');
    // }
}

//初始化
Select.prototype.init = function () {
    this.events();
};

//全选
Select.prototype.all=function(){

};

//反选
Select.prototype.reverse=function(){

};

//某一项被选
Select.prototype.items=function(){

};


// Select.prototype.init = function () {
//     this.events();
// };
// Select.prototype.events = function () {
//     this.selectAllClick();
//     this.selectOneToAll();
// };
// Select.prototype.selectAllYes = function () {//全选
//     var dom1 = document.querySelector(this.selectAllButton);
//     var dom2 = [].slice.call(document.querySelectorAll(this.radioButton));
//     if (dom1 && dom2.length >= 1) {
//         dom1.checked = true;
//         dom2.forEach(function (v) {
//             v.checked = true;
//         })
//     }
//     this.allSelectYesCallback && this.allSelectYesCallback();
// };
// Select.prototype.selectAllNo = function () {//反选
//     var dom1 = document.querySelector(this.selectAllButton);
//     var dom2 = [].slice.call(document.querySelectorAll(this.radioButton));
//     if (dom1 && dom2.length >= 1) {
//         dom1.checked = false;
//         dom2.forEach(function (v) {
//             v.checked = false;
//         })
//     }
//     this.allSelectNoCallback && this.allSelectNoCallback();
// };
// Select.prototype.selectAllClick = function () {//全选反选事件
//     var dom1 = document.querySelector(this.selectAllButton);
//     var dom2 = [].slice.call(document.querySelectorAll(this.radioButton));
//     var self = this;
//     if (dom1 && dom2.length >= 1) {
//         dom1.onclick = function () {
//             if (this.checked == true) {
//                 self.selectAllYes();
//             } else {
//                 self.selectAllNo();
//             }
//         }
//     }
// };
// Select.prototype.selectOneToAll = function () {//单选导致全选
//     var dom1 = document.querySelector(this.selectAllButton);
//     var dom2 = [].slice.call(document.querySelectorAll(this.radioButton));
//     var self = this;
//     if (dom1 && dom2.length >= 1) {
//         dom2.forEach(function (v) {
//             v.onclick = function () {
//                 var isAll = true;//假设全部都被选中了
//                 var dom3 = [].slice.call(document.querySelectorAll(self.radioButton));
//                 dom3.forEach(function (v2) {
//                     if (v2.checked != true) {
//                         isAll = false;
//                         return false;
//                     }
//                 });
//                 dom1.checked = false;
//                 isAll && (dom1.checked = true);
//                 self.oneSelectCallback && self.oneSelectCallback();
//             }
//         })
//     }
// };
module.exports = Select;