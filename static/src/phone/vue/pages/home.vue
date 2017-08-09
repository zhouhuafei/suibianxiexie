<template>
    <div>
        <div>vue和多页面混合使用,想用就用,不强制使用</div>
        <g-test></g-test>
        <label class="g-input">
            <span class="g-input-text">双向数据绑定:</span>
            <input class="g-input-input g-validate-form"
                   v-model="myMessage"
                   data-validate="no-space no-zero yes-integer"
                   data-hint="本项必填 本项不可为零 请输入整数"
                   name="username" id="username" value="" placeholder="请输入邮箱">
        </label>
        <div v-text="myMessage"></div>
        <div v-text="1313+1"></div>
        <img class="g-lazy-load" data-src="../../images/pages/p-waiting.jpg" alt="">
    </div>
</template>

<script>
    import gTest from '../components/g-test.vue';

    export default {
        data() {
            return {
                myMessage: '1+1'
            }
        },
        components: {
            gTest
        }
    }
</script>

<style scoped lang="scss"></style>