// http://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module',
    },
    extends: 'standard',
    env: {
        commonjs: true,
        node: true,
        browser: true,
    },
    globals: {
        pageInfo: true,
    },
    plugins: [
        'html',
    ],
    /*
    * 0或者"off":关闭规则
    * 1或者"warn":打开规则,并且作为一个警告(不影响exit code)
    * 2或者"error":打开规则,并且作为一个错误(exit code将会是1)
    * */
    'rules': {
        'comma-dangle': ['error', 'always-multiline'],// 多行时总是使用拖尾逗号
        'no-unused-vars': 0,// 未使用过的变量
        'no-new': 0,// 是否允许在使用new构造一个实例后不赋值
        'semi': ['error', 'always'],// 总是带分号
        'indent': ['error', 4, {'SwitchCase': 1}],// 缩进四个空格,switch下的case也要缩进四个空格
    }
};
