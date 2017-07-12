module.exports = function (Vue) {
    Vue.component('g-test-nest', {
        template: `<div>组件嵌套</div>`
    });
    Vue.component('g-test', {
        props: ['parentMessage'],
        template: `
            <div>
                <g-test-nest></g-test-nest>
                <div v-text="parentMessage"></div>
                <div v-text="myMessage"></div>
                <div v-text="1313+1"></div>
            </div>
        `,
        data: function () {
            return {
                myMessage: '1+1'
            }
        }
    });
};