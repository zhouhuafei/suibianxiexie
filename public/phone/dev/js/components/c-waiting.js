Vue.component('my-component', {
    props: {
        opts: {
            type: Object,
            default: function () {
                return {
                    message: 'hello'
                }
            }
        }
    },
    template: `
        <div v-html="message"></div>
    `
});