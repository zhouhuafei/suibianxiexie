const tools = require('zhf.tools'); // 工具方法集合
const DialogTooltip = require('../components-dom/g-dialog-tooltip'); // 工具提示框(文本提示框)

// 工具提示框(文本提示框)的应用
function Sub(opts) {
    this.opts = tools.extend({
        element: '.js-g-tooltip',
        eventType: 'click',
        positionLocation: 'top-left', // 弹窗的定位位置('top-left'，'top-center'，'top-right')。
    }, opts);
    this.init();
}

Sub.prototype.init = function () {
    const self = this;
    const opts = self.opts;
    const positionLocation = opts.positionLocation;
    if (opts.eventType === 'mouseover' || opts.eventType === 'mouseenter') {
        $(document).on('mouseenter', opts.element, function (ev) {
            ev.preventDefault();
            this.gDialogTooltipMouseenter = new DialogTooltip({
                config: {
                    positionLocation: opts.positionLocation,
                    content: this.dataset.title,
                    elementDom: this,
                },
            });
            setCss(this.gDialogTooltipMouseenter.moduleDom, this);
        });
        $(document).on('mouseleave', opts.element, function (ev) {
            ev.preventDefault();
            this.gDialogTooltipMouseenter.moduleDomHide();
        });
    }
    if (opts.eventType === 'click') {
        $(document).on('click', opts.element, function (ev) {
            ev.preventDefault();
            if (!this.gDialogTooltipClick) {
                this.gDialogTooltipClick = new DialogTooltip({
                    config: {
                        positionLocation: opts.positionLocation,
                        content: this.dataset.title,
                        elementDom: this,
                    },
                });
                setCss(this.gDialogTooltipClick.moduleDom, this);
            } else {
                if (this.gDialogTooltipClick.moduleDom.offsetWidth === 0) {
                    this.gDialogTooltipClick.moduleDomShow();
                } else {
                    this.gDialogTooltipClick.moduleDomHide();
                }
            }
        });
    }

    function setCss(moduleDom, eventDom) {
        if (positionLocation === 'top-left') {
            $(moduleDom).css({
                left: $(eventDom).offset().left,
                top: $(eventDom).offset().top - moduleDom.offsetHeight,
            });
        }
        if (positionLocation === 'top-center') {
            $(moduleDom).css({
                left: $(eventDom).offset().left - (moduleDom.offsetWidth - eventDom.offsetWidth) / 2,
                top: $(eventDom).offset().top - moduleDom.offsetHeight,
            });
        }
        if (positionLocation === 'top-right') {
            $(moduleDom).css({
                left: $(eventDom).offset().left - (moduleDom.offsetWidth - eventDom.offsetWidth),
                top: $(eventDom).offset().top - moduleDom.offsetHeight,
            });
        }
    }
};

module.exports = Sub;
