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
                        {{item.text}}编辑区域
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import dragula from 'dragula';
    import {ContainerMixin, ElementMixin} from 'vue-slicksort';

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
            SortableList,
            SortableItem,
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
            drake.on('drag', function (el, source) {
                console.log('drag');
            });
            drake.on('shadow', function (el, container, source) {
                console.log('shadow');
                // 处理滚动条待续...
            });
            drake.on('drop', function (el, target, source, sibling) {
                console.log('drop');
                // 业务逻辑待续...
                // simulator.removeChild(el);
            });
            drake.on('dragend', function (el) {
                console.log('dragend');
            });
        },
    };
</script>

<style scoped lang="scss">
    @import "../../../scss/pages/decorate-edit";
</style>
