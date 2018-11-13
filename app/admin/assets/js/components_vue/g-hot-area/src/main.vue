<template>
    <div class="g-hot-area" ref="g-hot-area">
        <slot></slot>
        <div class="g-hot-area-item"
             v-for="(item, index) in items"
             :key="index"
             :class="{'g-hot-area-item_active':item.isSelected}"
             :style="{left:`${item.l}px`,top:`${item.t}px`}"
             @mousedown="mouseDown(item, index, items, $event)"
        >
            <div class="g-hot-area-item-zoom"></div>
        </div>
    </div>
</template>

<script>
    import offset from 'zhf.offset';

    let downL = 0;
    let downT = 0;
    let disL = 0;
    let disT = 0;

    export default {
        name: 'g-hot-area',
        props: {
            data: {
                type: Array,
                default: function () {
                    return [];
                },
            },
        },
        data() {
            return {
                items: [
                    {
                        isSelected: false,
                        l: 0,
                        t: 0,
                        w: 100,
                        h: 100,
                    },
                    {
                        isSelected: false,
                        l: 0,
                        t: 0,
                        w: 100,
                        h: 100,
                    },
                ],
            };
        },
        methods: {
            mouseDown(v, i, a, ev) {
                const vm = this;
                a.forEach(function (v) {
                    v.isSelected = false;
                });
                v.isSelected = true;
                downL = ev.clientX;
                downT = ev.clientY;
                v.initL = v.l;
                v.initT = v.t;
                document.addEventListener('mousemove', mouseMove);
                document.addEventListener('mouseup', mouseUp);

                function mouseMove(ev) {
                    disL = ev.clientX - downL;
                    disT = ev.clientY - downT;
                    v.l = v.initL + disL;
                    v.t = v.initT + disT;
                    console.log(disL, disT);
                }

                function mouseUp() {
                    v.initL = v.l;
                    v.initT = v.t;
                    document.removeEventListener('mousemove', mouseMove);
                    document.removeEventListener('mouseup', mouseUp);
                }
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
        cursor: move;
        user-select: none;
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
