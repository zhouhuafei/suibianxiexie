var createElement = require('../function/create-element');//创建元素节点
var constructorInherit = require('../tools/constructor-inherit');//构造函数的继承(拷贝继承)
var SuperType = require('../modules/m-super-type');//超类型(子类型继承的对象)

//子类型
var SubType = constructorInherit({
    superType: SuperType,
    //默认参数(继承超类型)
    parameter: {
        //回调
        callback: {},
        //配置
        config: {},
        //数据
        data: {
            header: [{content: 'undefined-header0'}, {content: 'undefined-header1'}, {content: 'undefined-header2'}],
            body: [[{content: 'undefined-body0-0'}, {content: 'undefined-body0-1'}, {content: 'undefined-body0-2'}]],
            footer: ''
        }
    }
});

//内部模块的创建(覆盖超类型)
SubType.prototype.moduleDomCreate = function () {
    this.moduleDom = createElement({
        style: this.opts.config.moduleDomStyle,
        custom: this.opts.config.moduleDomCustomAttr,
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

SubType.prototype.moduleDomCreateHeader = function () {
    var html = ``;
    this.opts.data.header.forEach(function (v) {
        html += `
            <div class="m-table-col">
                <div class="m-table-col-wrap">
                    ${v.content}
                </div>
            </div>
        `;
    });
    return html;
};

SubType.prototype.moduleDomCreateBody = function () {
    var html = ``;
    this.opts.data.body.forEach(function (v0) {
        var row = ``;
        v0.forEach(function (v1) {
            row += `
                <div class="m-table-col">
                    <div class="m-table-col-wrap">
                        ${v1.content}
                    </div>
                </div>
            `;
        });
        html += `<div class="m-table-row">${row}</div>`;
    });
    return html;
};

SubType.prototype.moduleDomCreateFooter = function () {
    return this.opts.data.footer;
};

//功能(覆盖超类型)
SubType.prototype.power = function () {
    //功能重写待续...
};

module.exports = SubType;