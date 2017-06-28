module.exports = function (Vue) {
    Vue.component('my-component', {
        props: ['parentMessage'],
        template: `
            <div>
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