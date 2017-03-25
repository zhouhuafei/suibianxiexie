//底层方法
var base = require('../base/base.js');

//超类型(子类型继承的对象)
var SuperType = require('../modules/m-super-type.js');

//子类型
var SubType = base.constructorInherit({
    superType:SuperType,
    parameter:{
        data: {
            header: [{html:'undefined-header0'},{html:'undefined-header1'},{html:'undefined-header2'}],
            body:[[{html:'undefined-body0-0'},{html:'undefined-body0-1'},{html:'undefined-body0-2'}],[{html:'undefined-body1-0'},{html:'undefined-body1-1'},{html:'undefined-body1-2'}]],
            footer:''
        }
    }
});

//内部模块的创建
SubType.prototype.moduleDomCreate = function () {
    this.moduleDom = base.createElement({
        attribute: {
            className: `m-table`,
            innerHTML: `
                <div class="m-table-header">
                    <div class="m-table-row">
                        ${this.moduleDomCreateHeader()}
                    </div>
                </div>
                <div class="m-table-body">
                    ${this.moduleDomCreateBody()}
                </div>
                <div class="m-table-footer">
                    ${this.moduleDomCreateFooter()}
                </div>
            `
        }
    });
};

SubType.prototype.moduleDomCreateHeader=function(){
    var html=``;
    this.opt.data.header.forEach(function(v){
        html+=`
            <div class="m-table-col">
                <div class="m-table-col-wrap">
                    ${v.html}
                </div>
            </div>
        `;
    });
    return html;
};

SubType.prototype.moduleDomCreateBody=function(){
    var html=``;
    this.opt.data.body.forEach(function(v0){
        var row=``;
        v0.forEach(function(v1){
            row+=`
                <div class="m-table-col">
                    <div class="m-table-col-wrap">
                        ${v1.html}
                    </div>
                </div>
            `;
        });
        html+=`<div class="m-table-row">${row}</div>`;
    });
    return html;
};

SubType.prototype.moduleDomCreateFooter=function(){
    return this.opt.data.footer;
};

module.exports = SubType;