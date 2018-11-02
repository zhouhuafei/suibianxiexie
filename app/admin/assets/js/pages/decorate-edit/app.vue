<template>
    <div id="app">
        <!--组件集合区域-->
        <div class="components-collection">
            <div class="components-wrap">
                <div class="components">
                    <div class="components-item"
                         v-for="(item, index) in components"
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
    import VueDragula from 'vue-dragula';
    import draggable from 'vuedraggable';
    import {ContainerMixin, ElementMixin} from 'vue-slicksort';

    Vue.use(VueDragula);

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
            :class="[item.isHighlight ? 'simulator-item_active' : '']"
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
                components: [
                    {
                        isHighlight: true,
                        name: 'swiper',
                        text: '轮播',
                    },
                    {
                        isHighlight: false,
                        name: 'cut',
                        text: '切图',
                    },
                    {
                        isHighlight: false,
                        name: 'gap',
                        text: '间隔',
                    },
                    {
                        isHighlight: false,
                        name: 'goods',
                        text: '商品',
                    },
                    {
                        isHighlight: false,
                        name: 'nav',
                        text: '导航',
                    },
                ],
                // 页面中选择了哪些组件
                pageSelectedComponents: [],
                // 当前选中的是哪一个组件
                nowSelectedComponents: [],
            };
        },
        components: {
            draggable,
            SortableList,
            SortableItem,
        },
        mounted() {
            Vue.vueDragula.options('my-bag', {
                direction: 'vertical',
            });
        },
    };
</script>

<style scoped lang="scss">
    @import "../../../scss/pages/decorate-edit";
</style>
