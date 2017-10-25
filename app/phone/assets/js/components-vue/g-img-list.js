import Vue from 'vue';

Vue.component('g-img-list', {
    template: `<div class="g-img-list">
        <img class="g-lazy-load" data-src="${require('../../images/home/p-waiting.jpg')}" alt="">
        <img class="g-lazy-load" data-src="${require('../../images/home/p-waiting.png')}" alt="">
    </div>`,
});
