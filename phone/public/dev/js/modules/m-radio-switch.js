function Fn(json) {
    this.opt = json || {};
    this.opt.checkTxt = this.opt.checkTxt || {on: '已开启', off: '已关闭'};
    this.opt.status = this.opt.status || 'off';
    this.opt.isHand = this.opt.isHand ? true : false;
    this.opt.clickCallback = this.opt.clickCallback || function () {console.log('点击的回调');};
    this.onClass = 'm-radio-switch-active';//打开时对应状态的class
    this.init();
}
Fn.prototype.init = function () {
    this.render();
    this.events();
};
Fn.prototype.render = function () {
    var className = ``;
    var status = this.opt.status;
    if (status == 'on') {
        className = this.onClass;
    }
    this.parentDom = document.createElement('div');
    this.parentDom.classList.add(`m-radio-switch`);
    if(className){
        this.parentDom.classList.add(className);
    }
    this.parentDom.innerHTML = `            
        <div class="m-radio-switch-box">
            <div class="m-radio-switch-run"></div>
        </div>
        <div class="m-radio-switch-txt">${this.opt.checkTxt[status]}</div>            
    `;
};
Fn.prototype.on = function () {//开
    this.parentDom.classList.add(this.onClass);
    this.opt.status = 'on';
    this.changeTxt();
};
Fn.prototype.off = function () {//关
    this.parentDom.classList.remove(this.onClass);
    this.opt.status = 'off';
    this.changeTxt();
};
Fn.prototype.changeTxt = function () {
    this.parentDom.querySelector('.m-radio-switch-txt').innerHTML = this.opt.checkTxt[this.opt.status];
};
Fn.prototype.clickFn = function () {
    var self = this;
    if (!self.opt.isHand) {
        if (self.opt.status == 'off') {
            self.on();
        } else {
            self.off();
        }
    }
    self.opt.clickCallback({
        parentDom: this.parentDom,
        status: self.opt.status
    });
};
Fn.prototype.events = function () {
    var self = this;
    this.parentDom.addEventListener('click', function () {
        self.clickFn();
    })
};
Fn.prototype.remove = function () {
    this.parentDom.parentNode.removeChild(this.parentDom);
};
module.exports = Fn;