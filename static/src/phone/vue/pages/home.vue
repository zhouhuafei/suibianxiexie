<template>
    <div>
        <g-test></g-test>
        <img class="g-lazy-load" data-src="../../images/pages/p-waiting.jpg" alt="">
        <div v-text="myMessage"></div>
        <div v-text="1313+1"></div>
        <div>vue和多页面混合使用,想用就用,不强制使用</div>
    </div>
</template>

<script>
    import gTest from '../components/g-test.vue'

    export default {
        data: function () {
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