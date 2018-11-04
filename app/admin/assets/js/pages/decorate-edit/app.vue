<template>
    <div id="app">
        <!--组件集合区域-->
        <div class="components-collection">
            <div class="components-wrap">
                <div class="components" id="left">
                    <!--<div class="components-item"
                         v-for="(item, index) in components"
                         :class="[item.isHighlight ? 'components-item_highlight' : '']"
                    >
                        <div>
                            {{item.text}}
                        </div>
                    </div>-->
                    <SortableListA
                        lockAxis="y"
                        v-model="components"
                    >
                        <SortableItemA
                            v-for="(item, index) in components"
                            :index="index"
                            :key="index"
                            :item="item"
                        />
                    </SortableListA>
                </div>
            </div>
        </div>
        <!--模拟器区域-->
        <div class="components-simulator">
            <div class="simulator-wrap">
                <!--<div class="simulator" id="right">
                    <div class="simulator-item"
                         v-for="(item, index) in pageSelectedComponents"
                         :class="[item.isHighlight ? 'simulator-item_active' : '', item.isSelected ? 'simulator-item_selected' : '']"
                    >
                        <div class="simulator-item-hint">请编辑{{item.text}}组件内容</div>
                        <div class="simulator-item-edit">编辑</div>
                        <div class="simulator-item-mask"></div>
                    </div>
                </div>-->
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
            :class="[item.isHighlight ? 'simulator-item_active' : '', item.isSelected ? 'simulator-item_selected' : '']"
        >
            <div class="simulator-item-hint">请编辑{{item.text}}组件内容</div>
            <div class="simulator-item-edit">编辑</div>
            <div class="simulator-item-mask"></div>
        </div>`,
    };

    const SortableListA = {
        mixins: [ContainerMixin],
        template: `<div class="components-item">
            <slot></slot>
        </div>`,
    };

    const SortableItemA = {
        mixins: [ElementMixin],
        props: ['item'],
        template: `<div class="components-item-drag">{{item.text}}</div>`,
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
                ],
                // 当前选中的是哪一个组件
                nowSelectedComponents: {},
            };
        },
        components: {
            draggable,
            SortableList,
            SortableItem,
            SortableListA,
            SortableItemA,
        },
        mounted() {
            Vue.vueDragula.options('my-bag', {
                direction: 'vertical',
            });
            // dragula([document.getElementById('left'), document.getElementById('right')], {
            //     copy: function (el, source) {
            //         return source === document.getElementById('left');
            //     },
            //     accepts: function (el, target) {
            //         return target !== document.getElementById('left');
            //     },
            // });
        },
    };
</script>

<style scoped lang="scss">
    @import "../../../scss/pages/decorate-edit";
</style>
