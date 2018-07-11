require('../../scss/pages/ui.scss');
const Super = require('../pages-super/super');

class Sub extends Super {
    // (功)(覆)功能(覆盖超类型)
    power() {
        const superSelf = this;
        const dataInfo = superSelf.dataInfo;
        const routes = dataInfo.routes;

        // 验证
        (function () {
            const validateInput = superSelf.validateInput;
            validateInput.setValidate('no-999', function (value) {
                return Number(value) !== 999;
            });
            document.querySelector('.js-save').addEventListener('click', function () {
                // 测试确认框和提示框
                const DialogAlert = require('../components-dom/g-dialog-alert');
                const DialogConfirm = require('../components-dom/g-dialog-confirm');
                new DialogConfirm({
                    callback: {
                        cancel: function () {
                            new DialogAlert({
                                config: {
                                    time: 3000, // 展示的时间
                                    isShowIcon: false, // 是否显示icon
                                    isShowClose: true, // 是否显示关闭按钮
                                    icon: 'icon-success', // icon的class
                                    content: '已取消', // 内容信息
                                    positionLocation: 'center', // 弹窗的定位位置    positionMethod定位方式强制fixed
                                },
                            });
                        },
                        confirm: function () {
                            const isAllPassValidate = validateInput.isAllPassValidate();
                            new DialogAlert({
                                config: {
                                    time: 3000, // 展示的时间
                                    isShowIcon: false, // 是否显示icon
                                    isShowClose: true, // 是否显示关闭按钮
                                    icon: 'icon-success', // icon的class
                                    content: isAllPassValidate ? '验证已通过，可执行保存操作' : '验证尚未通过，不可执行保存操作', // 内容信息
                                    positionLocation: 'center', // 弹窗的定位位置    positionMethod定位方式强制fixed
                                },
                            });
                        },
                        close: function () {
                            new DialogAlert({
                                config: {
                                    time: 3000, // 展示的时间
                                    isShowIcon: false, // 是否显示icon
                                    isShowClose: true, // 是否显示关闭按钮
                                    icon: 'icon-success', // icon的class
                                    content: '已关闭', // 内容信息
                                    positionLocation: 'center', // 弹窗的定位位置    positionMethod定位方式强制fixed
                                },
                            });
                        },
                    },
                    config: {
                        positionLocation: 'center', // 弹窗的定位位置('top'，'center'，'bottom')。positionMethod定位方式强制fixed。
                        isShowClose: true, // 是否显示关闭按钮
                        closeContent: '<div class="iconfont icon-close"></div>', // 关闭按钮的内容
                        isShowHeader: true, // 是否显示头部
                        headerContent: '提示:', // 头部内容
                        isShowBody: true, // 是否显示主体
                        isShowIcon: false, // 是否显示icon
                        icon: 'icon-warning', // icon的类型
                        isCustom: false, // 是否自定义
                        content: '<div>确定要执行这个操作?</div>', // 主体内容
                        isShowFooter: true, // 是否显示尾部
                        isShowConfirm: true, // 是否显示确认按钮
                        confirmContent: '确认', // 确认按钮的内容
                        isShowCancel: true, // 是否显示取消按钮
                        cancelContent: '取消', // 取消按钮的内容
                        isShowMask: true, // 是否显示遮罩
                        isHandHide: false, // 是否手动隐藏(一般只用于点击确认时)
                    },
                });
            });
        }());

        // 测试application/x-www-form-urlencoded
        const axios = require('../api/axios');
        const ajax = require('../api/ajax');
        axios({
            url: dataInfo.api.list.route,
            method: 'post',
            data: {type: 'axios', obj: {test: true, key: 'obj', b: {a: 1}}, arr: ['a', 2, 'c', {a: 1}], arr2: []},
        }).then(function (json) {
            console.log('axios测试application/x-www-form-urlencoded测试axios:->', json);
        });
        ajax({
            url: dataInfo.api.list.route,
            method: 'post',
            data: {type: 'ajax', obj: {test: true, key: 'obj', b: {a: 1}}, arr: ['a', 2, 'c', {a: 1}], arr2: []},
        }).then(function (json) {
            console.log('ajax测试application/x-www-form-urlencoded测试ajax:->', json);
        });
        // 测试multipart/form-data
        const formData = new FormData();
        formData.append('test', 'test');
        axios({
            url: dataInfo.api.list.route,
            method: 'post',
            data: formData,
        }).then(function (json) {
            console.log('axios测试multipart/form-data测试axios:->', json);
        });
        ajax({
            url: dataInfo.api.list.route,
            method: 'post',
            data: formData,
        }).then(function (json) {
            console.log('ajax测试multipart/form-data测试ajax:->', json);
        });
    }
}

new Sub();
