//是否显示版权

class pageCopyright {
    constructor(json) {
        this.opts = json || {};
        this.isShowCopyright = true;
    }
}

module.exports = pageCopyright;