<template>
    <div class="g-view">
        <div>首页</div>
        <div class="js-dialog">弹窗</div>
        <g-img-test></g-img-test>
        <g-img-test></g-img-test>
        <g-img-test></g-img-test>
        <g-img-test></g-img-test>
        <g-img-test></g-img-test>
        <g-img-test></g-img-test>
        <g-img-test></g-img-test>
        <g-img-test></g-img-test>
        <g-img-test></g-img-test>
        <g-img-test></g-img-test>
    </div>
</template>

<script>
    const {
        Message,
        Confirm,
        Validate,
        GoTop,
        TooltipApp,
        Copyright,
        LazyLoad,
    } = require('zhf.g-ui/src/js/commons_dom/g-common.js');
    export default {
        name: 'home',
        data() {
            return {};
        },
        methods: {},
        components: {
            'g-img-test': function (resolve) {
                require.ensure([], function () {
                    resolve(require('../components_vue/g-img-test.vue'));
                }, 'g-img-test');
            },
        },
        created() {
            /*
            // 接口跨域测试
            this.$axios({
                url: '/h5/api/verify-code-random_register/', // 代理进行了跨域
                data: {
                    username: '1123486116@qq.com',
                },
            });
            */
        },
        mounted() {
            document.querySelector('.js-dialog').addEventListener('click', function () {
                new Confirm({
                    callback: {
                        confirm: function () {
                            new Message({config: {icon: 'icon-success', content: '已确认'}});
                        },
                        cancel: function () {
                            new Message({config: {icon: 'icon-success', content: '已取消'}});
                        },
                        close: function () {
                            new Message({config: {icon: 'icon-success', content: '已关闭'}});
                        },
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
