// http://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module',
    },
    extends: 'airbnb-base',
    env: {
        commonjs: true,
        node: true,
        browser: true,
    },
    globals: {
        dataInfo: true,
    },
    plugins: ['html'],
    /*
    * 0或者"off":关闭规则
    * 1或者"warn":打开规则,并且作为一个警告(不影响exit code)
    * 2或者"error":打开规则,并且作为一个错误(exit code将会是1)
    * */
    rules: {
        'no-script-url': 0, // 禁止使用 javascript: url
        'max-len': [0, 100], // 强制行的最大长度
        'class-methods-use-this': 0, // 强制使用类方法this
        'object-curly-spacing': [2, 'never'], // 强制在花括号中使用一致的空格
        'radix': 0, // 要求必须有基数
        'global-require': 0, // 强制在模块顶部调用 require()
        'no-console': 0, // 禁用 console
        'no-shadow': 0, // 禁止变量声明覆盖外层作用域的变量
        'no-param-reassign': 0, // 禁止对函数参数再赋值
        'no-plusplus': 0, // 禁止使用一元操作符 ++ 和 --
        'no-mixed-operators': 0, // 禁止混合使用不同的操作符
        'object-shorthand': 0, // 要求对象字面量简写语法
        'func-names': 0, // 要求或禁止命名的 function 表达式
        'prefer-arrow-callback': 0, // 推荐使用箭头函数作为回调
        'linebreak-style': 0, // 强制使用一致的换行符风格
        'import/newline-after-import': 0, // 导入语句后强制执行换行符
        'import/no-dynamic-require': 0, // 禁止require()使用表达式
        'import/no-extraneous-dependencies': 0, // 禁止使用无关的包
        'no-unused-vars': 0, // 禁止未使用过的变量
        'no-new': 0, // 禁止new一个实例后不赋值
        'indent': [2, 4, {SwitchCase: 1}], // 强制使用一致的缩进
    },
};
