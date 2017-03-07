function Fn(json) {
    this.opt = json || {};
    this.opt.header=this.opt.header||[];
    this.opt.body=this.opt.body||[];
    this.opt.footer=this.opt.footer||``;
    this.opt.parentSelector=this.opt.parentSelector||``;
    this.init();
}
Fn.prototype.init = function () {
    this.render();
};
Fn.prototype.render = function () {
    this.parentDom=document.createElement('div');
    this.parentDom.classList.add('m-table');
    this.parentDom.innerHTML=`
        <div class="m-table-header">
            <div class="m-table-row">
                ${this.renderHeader()}
            </div>
        </div>
        <div class="m-table-body">
            ${this.renderBody()}
        </div>
        <div class="m-table-footer">
            ${this.renderFooter()}
        </div>
    `;
    if(this.opt.parentSelector){
        this.parentSelectorDom=document.querySelector(this.opt.parentSelector);
    }
    if(this.parentSelectorDom){
        this.parentSelectorDom.appendChild(this.parentDom);
    }
};
Fn.prototype.removeRender = function () {
    this.parentDom.parentNode.removeChild(this.parentDom);
};
Fn.prototype.renderHeader=function(){
    var html=``;
    this.opt.header.forEach(function(v){
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
Fn.prototype.renderBody=function(){
    var html=``;
    this.opt.body.forEach(function(v0){
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
Fn.prototype.renderFooter=function(){
    return this.opt.footer;
};
module.exports = Fn;
