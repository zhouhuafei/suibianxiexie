function Fn(json) {
    this.opt = json || {};
    this.init();
}
Fn.prototype.init = function () {
    this.render();
};
Fn.prototype.render = function () {
    this.parentDom=document.createElement('div');
    this.parentDom.classList.add('m-table');
    this.parentDom.innerHTML=`
        <div class="m-table-row m-table-header">
            <div class="m-table-col">
                <div class="m-table-col-wrap">0</div>
            </div>
            <div class="m-table-col">
                <div class="m-table-col-wrap">1</div>
            </div>
            <div class="m-table-col">
                <div class="m-table-col-wrap">2</div>
            </div>
        </div>
        <div class="m-table-row">
            <div class="m-table-col">
                <div class="m-table-col-wrap">0</div>
            </div>
            <div class="m-table-col">
                <div class="m-table-col-wrap">1</div>
            </div>
            <div class="m-table-col">
                <div class="m-table-col-wrap">2</div>
            </div>
        </div>
    `;
};
//待续...
module.exports = Fn;
