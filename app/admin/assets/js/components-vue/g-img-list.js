module.exports = function (Vue) {
    Vue.component('g-img-list', {
        template: `<div class="g-img-list">
            <div class="g-img-list-big">
                <img class="g-lazy-load" data-src="${require('../../images/home/p-waiting.jpg')}" alt="">
            </div>
            <div class="g-img-list-small">
                <img class="g-lazy-load" data-src="${require('../../images/home/p-waiting.png')}" alt="">
            </div>
        </div>`,
        mounted() {
            this.$lazyload.render();
        },
    });
};
