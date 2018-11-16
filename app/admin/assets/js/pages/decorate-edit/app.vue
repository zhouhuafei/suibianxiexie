<template>
    <div id="app">
        <!--组件集合区域-->
        <div class="components-collection">
            <div class="components-wrap">
                <div class="components">
                    <div class="components-item"
                         v-for="(item, index) in components"
                         :class="[item.isHighlight ? 'components-item_highlight' : '']"
                    >
                        {{item.text}}
                    </div>
                </div>
            </div>
        </div>
        <!--模拟器区域-->
        <div class="components-simulator">
            <div class="simulator-wrap">
                <SortableList
                    lockAxis="y"
                    v-model="pageSelectedComponents"
                >
                    <SortableItem
                        v-for="(item, index) in pageSelectedComponents"
                        :index="index"
                        :key="index"
                        :item="item"
                    />
                </SortableList>
            </div>
        </div>
        <!--编辑区域-->
        <div class="components-editor">
            <div class="editor-wrap">
                <div class="editor">
                    <div class="editor-item"
                         :class="[item.isHighlight ? 'editor-item_active' : '']"
                         v-for="(item, index) in pageSelectedComponents"
                    >
                        <div>{{item.text}}编辑区域</div>
                        <div style="margin: 20px;width: 500px;height: 500px;background: #eeeeee;position: relative;">
                            <vue-draggable-resizable
                                class="vue-draggable-resizable"
                                :w="100"
                                :h="100"
                                :parent="true"
                                v-on:dragging="onDrag"
                                v-on:resizing="onResize"
                            >
                                <div>X: {{ x }}</div>
                                <div>Y: {{ y }}</div>
                                <div>Width: {{ width }}</div>
                                <div>Height: {{ height }}</div>
                            </vue-draggable-resizable>
                        </div>
                        <!--
                        <div style="margin: 20px;">
                            <g-hot-area style="width: 500px;height: 500px;background: #eeeeee;"></g-hot-area>
                        </div>
                        -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import dragula from 'dragula';
    import {ContainerMixin, ElementMixin} from 'vue-slicksort';
    import gHotArea from '../../components_vue/g-hot-area/index';

    const SortableList = {
        mixins: [ContainerMixin],
        template: `<div class="simulator">
            <slot></slot>
        </div>`,
    };

    const SortableItem = {
        mixins: [ElementMixin],
        props: ['item'],
        template: `<div class="simulator-item"
            :class="[item.isHighlight ? 'simulator-item_active' : '', item.isSelected ? 'simulator-item_selected' : '']"
        >
            <div class="simulator-item-hint">请编辑{{item.text}}组件内容</div>
            <div class="simulator-item-edit">编辑</div>
            <div class="simulator-item-mask"></div>
        </div>`,
    };

    export default {
        name: 'decorate-edit',
        data() {
            return {
                width: 0,
                height: 0,
                x: 0,
                y: 0,
                // 所有的组件集合
                components: {
                    swiper: {
                        isHighlight: false,
                        isSelected: false,
                        name: 'swiper',
                        text: '轮播',
                    },
                    cut: {
                        isHighlight: false,
                        isSelected: false,
                        name: 'cut',
                        text: '切图',
                    },
                    gap: {
                        isHighlight: false,
                        isSelected: true,
                        name: 'gap',
                        text: '间隔',
                    },
                    goods: {
                        isHighlight: false,
                        isSelected: false,
                        name: 'goods',
                        text: '商品',
                    },
                    nav: {
                        isHighlight: false,
                        isSelected: false,
                        name: 'nav',
                        text: '导航',
                    },
                },
                // 页面中选择了哪些组件
                pageSelectedComponents: [
                    {
                        isHighlight: true,
                        name: 'gap',
                        text: '间隔',
                    },
                    {
                        isHighlight: false,
                        name: 'nav',
                        text: '导航',
                    },
                    {
                        isHighlight: false,
                        name: 'nav',
                        text: '导航',
                    },
                    {
                        isHighlight: false,
                        name: 'nav',
                        text: '导航',
                    },
                    {
                        isHighlight: false,
                        name: 'nav',
                        text: '导航',
                    },
                    {
                        isHighlight: false,
                        name: 'nav',
                        text: '导航',
                    },
                    {
                        isHighlight: false,
                        name: 'nav',
                        text: '导航',
                    },
                    {
                        isHighlight: false,
                        name: 'nav',
                        text: '导航',
                    },
                    {
                        isHighlight: false,
                        name: 'nav',
                        text: '导航',
                    },
                    {
                        isHighlight: false,
                        name: 'nav',
                        text: '导航',
                    },
                ],
                // 当前选中的是哪一个组件
                nowSelectedComponents: {},
            };
        },
        components: {
            gHotArea,
            SortableList,
            SortableItem,
        },
        methods: {
            onResize: function (x, y, width, height) {
                this.x = x;
                this.y = y;
                this.width = width;
                this.height = height;
            },
            onDrag: function (x, y) {
                this.x = x;
                this.y = y;
            },
        },
        mounted() {
            const components = document.querySelector('.components');
            const simulator = document.querySelector('.simulator');
            const drake = dragula([components, simulator], {
                copy: function (el, source) { // 只允许components容器中的每一项可复制
                    return source === components;
                },
                moves: function (el, source) { // 只允许components容器中的每一项可移动
                    return source === components;
                },
            });
            drake.on('drag', function (el, source) { // 这里的el是指components里的块
                console.log('drag');
                el.style.background = '#0f0';
            });
            drake.on('shadow', function (el, container, source) { // 这里的el是指simulator内的块
                console.log('shadow');
                el.scrollIntoViewIfNeeded(); // 处理滚动条
                el.style.background = '#f00';
            });
            drake.on('drop', function (el, target, source, sibling) { // 这里的el是指simulator内的块
                console.log('drop');
                el.style.background = '#00f';
                // 业务逻辑待续...
                // simulator.removeChild(el);
            });
        },
    };
</script>

<style scoped lang="scss">
    @import "../../../scss/pages/decorate-edit";

    .vue-draggable-resizable {
        cursor: move;
        background: rgba(36, 186, 171, 0.4);
        /*border: 1px solid #24baab;*/
        &.active {
            background: rgba(255, 0, 0, 0.4);
            border-color: #e75c45;
        }
    }

    .vue-draggable-resizable /deep/ .handle {
        /*border-radius: 50%;*/
        border-color: #e75c45;
    }
</style>
