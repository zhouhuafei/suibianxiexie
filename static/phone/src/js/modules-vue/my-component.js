module.exports = function (Vue) {
    Vue.component('my-test', {
        template: `<div>组件嵌套</div>`
    });
    Vue.component('my-component', {
        props: ['parentMessage'],
        template: `
            <div>
                <my-test></my-test>
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