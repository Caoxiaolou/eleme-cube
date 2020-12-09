module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'indent': "off",
    "semi": 0, // 结尾是否强制添加分号， 0 => 忽略， 1 => 警告， 2 => 报错
    "space-before-function-paren": 0, // 方法名后去掉空格， 规则同上
    "no-debugger": 0 // 是否允许使用debugger调试， 规则同上

  }
}
