require('../../../scss/pages/decorate-edit.scss');
import Super from '../../pages-super/super';
import Vue from 'vue';
import app from './app.vue';
import VueDragula from 'vue-dragula';

Vue.use(VueDragula);

class Sub extends Super {
    power() {
        new Vue({
            el: '#app',
            components: {app},
            template: '<app></app>',
        });
    }
}

new Sub();
