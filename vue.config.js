const mockData = require('./src/data.json')
const seller = mockData.seller
const goods = mockData.goods
const ratings = mockData.ratings

const path = require('path')

function resolve(dir) {
  /*
  * 利用nodejs提供的path函数，拼接地址
  * __dirname 当前文件的目录
  * */
  return path.join(__dirname, dir)
}

module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        import: []
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: false,
      theme: false
    }
  },
  devServer: {
    before(app) {
      app.get('/api/seller', function (req, res) {
        res.json({
          errno: 0,
          data: seller
        })
      })
      app.get('/api/ratings', function (req, res) {
        res.json({
          errno: 0,
          data: ratings
        })
      })
      app.get('/api/goods', function (req, res) {
        res.json({
          errno: 0,
          data: goods
        })
      })
    }
  },
  chainWebpack(config) {
    config.resolve.alias
      .set('components', resolve('src/components'))
      .set('common', resolve('src/common'))
      .end()
    config.resolve.extensions
      .merge(['.js', '.styl', '.vue', '.json'])
      .end()
  }
}
