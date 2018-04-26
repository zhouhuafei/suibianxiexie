<template>
    <div class="g-view">
        <div>首页</div>
        <div class="js-dialog">弹窗</div>
        <g-img-list></g-img-list>
        <g-img-list></g-img-list>
        <g-img-list></g-img-list>
        <g-img-list></g-img-list>
        <g-img-list></g-img-list>
        <g-img-list></g-img-list>
        <g-img-list></g-img-list>
        <g-img-list></g-img-list>
        <g-img-list></g-img-list>
        <g-img-list></g-img-list>
    </div>
</template>

<script>
    export default {
        name: 'home',
        data() {
            return {};
        },
        methods: {},
        components: {
            'g-img-list': function (resolve) {
                require.ensure([], function () {
                    resolve(require('../components-vue/g-img-list.vue'));
                }, 'g-img-list');
            },
        },
        created() {
            /*
            // 接口跨域测试
            this.$axios({
                url: '/phone/api/verify-code-random/', // 代理进行了跨域
                data: {
                    username: '1123486116@qq.com',
                },
            });
            */
        },
        mounted() {
            const Dialog = require('../components-dom/g-dialog');
            document.querySelector('.js-dialog').addEventListener('click', function () {
                new Dialog({
                    callback: {
                        confirm: function () {
                            new Dialog({config: {alert: {icon: 'icon-success', content: '已确认'}}});
                        },
                        cancel: function () {
                            new Dialog({config: {alert: {icon: 'icon-success', content: '已取消'}}});
                        },
                        close: function () {
                            new Dialog({config: {alert: {icon: 'icon-success', content: '已关闭'}}});
                        },
                    },
                    config: {
                        type: 'confirm',
                    },
                });
            });
            console.log('this\n', this);
        },
    };
</script>

<style scoped lang="scss">
    @import "../scss/config/config";
</style>
