<template>
    <div class="g-img-test">
        <div style="min-height: 120px;">
            <img class="g-lazy-load" data-src="../images/home/p-waiting.jpg" alt="" src="">
        </div>
        <div style="min-height: 120px;">
            <img class="g-lazy-load" data-src="../images/home/p-waiting.png" alt="" src="">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'g-img-test',
        props: {},
        data() {
            return {};
        },
        methods: {},
        mounted() {
            this.$lazyload.render();
        },
    };
</script>
