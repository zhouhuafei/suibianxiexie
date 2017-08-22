import Vue from 'vue';

Vue.component('g-picture-list', {
    template: `<div class="g-picture-list">
        <img class="g-lazy-load" data-src="${require('../../images/home/p-waiting.jpg')}" alt="">
        <img class="g-lazy-load" data-src="${require('../../images/home/p-waiting.png')}" alt="">
    </div>`,
});
