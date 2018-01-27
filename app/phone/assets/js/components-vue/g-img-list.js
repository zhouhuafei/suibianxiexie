module.exports = function (Vue) {
    Vue.component('g-img-list', {
        template: `<div class="g-img-list">
            <div style="min-height: 120px;">
                <img style="width:5.013333333333334rem;height: 2.1333333333333333rem;" class="g-lazy-load" data-src="${require('../../images/home/p-waiting.jpg')}" alt="">
            </div>
            <div style="min-height: 120px;">
                <img style="width:1.92rem;height:1.96rem;" class="g-lazy-load" data-src="${require('../../images/home/p-waiting.png')}" alt="">
            </div>
        </div>`,
        mounted() {
            this.$lazyload.render();
        },
    });
};
