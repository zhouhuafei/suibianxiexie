module.exports = function (Vue) {
    Vue.component('m-test', {
        template: `<div>组件嵌套</div>`
    });
    Vue.component('m-component', {
        props: ['parentMessage'],
        template: `
            <div>
                <m-test></m-test>
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