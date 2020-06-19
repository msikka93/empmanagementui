module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-flow'],
    plugins: [
      '@babel/plugin-transform-runtime', // https://babeljs.io/docs/en/babel-plugin-transform-runtime.html
      require('@babel/plugin-proposal-class-properties'),
      '@babel/plugin-syntax-dynamic-import']
  }
}
