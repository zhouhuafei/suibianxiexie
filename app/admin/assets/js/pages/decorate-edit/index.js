require('../../../scss/pages/decorate-edit.scss');
import Super from '../../pages-super/super';
import Vue from 'vue';
import app from './app.vue';

new Vue({
    el: '#app',
    components: {app},
    template: '<app></app>',
});

class Sub extends Super {
}

new Sub();
