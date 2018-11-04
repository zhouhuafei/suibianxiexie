require('../../../scss/pages/decorate-edit.scss');
require('../../../../../../node_modules/dragula/dist/dragula.css');
import Super from '../../pages-super/super';
import Vue from 'vue';
import app from './app.vue';

new Vue({
    el: '#app',
    components: {app},
    template: '<app></app>',
});

// class Sub extends Super {
//     power() {
//     }
// }
//
// new Sub();
