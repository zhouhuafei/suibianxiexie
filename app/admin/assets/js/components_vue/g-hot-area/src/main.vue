<template>
    <div class="g-hot-area">
        <slot></slot>
        <div v-for="(item, index) in items"
             :key="index"
             class="g-hot-area-item"
             :class="{'g-hot-area-item_active':item.isSelected}"
             :style="{left:item.l,top:item.t}"
             @mousedown="mousedown"
             @mouseup="mouseup"
             @mousemove="mousemove"
        >
            <div class="g-hot-area-item-zoom"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'g-hot-area',
        props: {
            items: {
                type: Array,
                default: function () {
                    return [
                        {
                            isSelected: false,
                            l: 0,
                            t: 0,
                            w: 100,
                            h: 100,
                        },
                        {
                            isSelected: true,
                            l: 150,
                            t: 150,
                            w: 100,
                            h: 100,
                        },
                    ];
                },
            },
        },
        methods: {
            mousedown() {
            },
            mousemove() {
            },
            mouseup() {
            },
        },
        mounted() {
            console.log(this.items);
        },
    };
</script>

<style scoped>
    .g-hot-area {
        position: relative;
        user-select: none;
        overflow: hidden;
    }

    .g-hot-area-item {
        position: absolute;
        box-sizing: border-box;
        width: 80px;
        height: 80px;
        left: 0;
        top: 0;
        background: rgba(36, 186, 171, 0.4);
        border: 1px solid #24baab;
        z-index: 2;
        overflow: hidden;
    }

    .g-hot-area-item.g-hot-area-item_active {
        background: rgba(255, 0, 0, 0.4);
        border-color: #E75C45;
    }

    .g-hot-area-item-zoom {
        position: absolute;
        right: -8px;
        bottom: -8px;
        z-index: 3;
        width: 0;
        height: 0;
        border: 8px solid transparent;
        border-top-color: rgba(255, 255, 255, 0.96);
        transform: rotate(-45deg);
        cursor: nwse-resize;
    }
</style>
