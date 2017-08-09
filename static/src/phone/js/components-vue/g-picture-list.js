import Vue from 'vue';


Vue.component('g-picture-list', {
    template: `
        <div>
            <img class="g-lazy-load" data-src="${require('../../images/pages/p-waiting.jpg')}" alt="">
            <img class="g-lazy-load" data-src="${require('../../images/pages/index/p-waiting.png')}" alt="">
            <img class="g-lazy-load" data-src="${require('../../images/pages/p-waiting.png')}" alt="">
            <img class="g-lazy-load" data-src="${require('../../images/pages/other/p-waiting.png')}" alt="">
        </div> 
    `
});