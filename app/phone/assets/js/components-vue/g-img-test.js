module.exports = function (Vue) {
    Vue.component('g-img-test', {
        template: `<div class="g-img-test">
            <div class="g-img-test-big">
                <img class="g-lazy-load" data-src="${require('../../images/home/p-waiting.jpg')}" alt="">
            </div>
            <div class="g-img-test-small">
                <img class="g-lazy-load" data-src="${require('../../images/home/p-waiting.png')}" alt="">
            </div>
        </div>`,
        mounted() {
            this.$lazyload.render();
        },
    });
};
