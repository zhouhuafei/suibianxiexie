window.addEventListener('load', function () {
    setTimeout(function () {

        //验证
        (function () {
            const ValidateInput = require('../modules/m-validate-form');
            const aInput = [].slice.call(document.querySelectorAll('.m-validate-form'));
            aInput.forEach(function (v) {
                new ValidateInput({element: v});
            });
        })();

        require('../commons/common');//每个页面都要用到的js(一定要放到最底部)
    }, 0)
});