import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
    // 我的页面
    {
        path: '/mine/',
        name: 'mine',
        meta: {
            title: '我的',
            isValidateLogin: false,
        },
        component: function (resolve) {
            require.ensure([], function () {
                resolve(require('../views/mine.vue'));
            }, 'mine');
        },
    },
    // 首页
    {
        path: '/',
        name: 'home',
        meta: {
            title: '首页',
            isValidateLogin: false,
        },
        component: function (resolve) {
            require.ensure([], function () {
                resolve(require('../views/home.vue'));
            }, 'home');
        },
    },
];

export default new Router({
    routes: routes,
});
