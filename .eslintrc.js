// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: 'standard',
  env: {
    // commonjs: true,
    // node: true,
    browser: true
  },
  globals: {
    // pageInfo: true
  },
  plugins: [
    'html'
  ],
  /*
  * 0或者"off":关闭规则
  * 1或者"warn":打开规则,并且作为一个警告(不影响exit code)
  * 2或者"error":打开规则,并且作为一个错误(exit code将会是1)
  * */
  'rules': {
    'arrow-parens': 0,//箭头函数是否用小括号括起来
    'generator-star-spacing': 0,//生成器函数*的前后空格
    'no-new': 0,//是否允许在使用new构造一个实例后不赋值
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
