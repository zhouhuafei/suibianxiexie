<template>
    <div id="app">
        <!--组件集合区域-->
        <div class="components-collection">
            <div class="components-wrap">
                <div class="components">切图</div>
                <div class="components">轮播</div>
                <div class="components">间隔</div>
                <div class="components">商品</div>
                <div class="components">橱窗</div>
                <div class="components">导航</div>
            </div>
        </div>
        <!--模拟器区域-->
        <div class="components-simulator">
            <div class="simulator-wrap">
                <div class="simulator">
                    <draggable>
                        <div class="simulator-item"
                             v-for="(v, i) in components"
                             :class="v.isHighlight ? ['simulator-item_active'] : ''"
                        >
                            <div class="simulator-item-hint">请编辑组件内容{{i}}</div>
                            <div class="simulator-item-edit">编辑</div>
                            <div class="simulator-item-mask"></div>
                        </div>
                    </draggable>
                </div>
            </div>
        </div>
        <!--编辑区域-->
        <div class="components-editor">
            <div class="editor-wrap">
                <div class="editor"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import draggable from 'vuedraggable';

    export default {
        name: 'decorate-edit',
        data() {
            return {
                components: [
                    {
                        isHighlight: true,
                    },
                    {
                        isHighlight: false,
                    },
                    {
                        isHighlight: false,
                    },
                    {
                        isHighlight: false,
                    },
                ],
            };
        },
        components: {
            draggable,
        },
    };
</script>

<style scoped lang="scss">
    @import "../../../scss/pages/decorate-edit";
</style>
