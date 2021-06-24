module.exports = {
  plugins: {
    'postcss-pxtorem': {
      // 1rem的大小   公式：标准屏宽度 / 10
      rootValue: 37.5,
      propList: ['*']
    }
  }
}
