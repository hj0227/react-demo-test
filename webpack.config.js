var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');
var pxtorem = require('postcss-pxtorem');

// process.traceDeprecation = true;//这将为您提供使用parseQuery的堆栈跟踪，因此您可以识别实际使用它的加载程序并升级该加载程序。
module.exports = {
  entry: {
    app: './src/js/index.js'
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: "js/[name].js",
  },
  externals: {

  },
  resolve: {
    alias: {
    },
    extensions: ['.web.js', '.js', '.css', '.jsx']
  },
  module: {
    rules: [
      {
        oneOf: [
          {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            loader: require.resolve('url-loader'),
            options: {
              limit: 10000,
              name: 'static/media/[name].[hash:8].[ext]',
            },
          },
          {
            test: /\.(js|jsx|mjs)$/,
            //include: paths.appSrc,
            exclude: /node_modules/,
            loader: require.resolve('babel-loader'),
            options: {
              presets: ['react', 'stage-2', 'es2015'],
              plugins: [
                ["import", [{ style: 'css', libraryName: 'antd-mobile' }]], 'transform-class-properties', 'add-module-exports', 'transform-runtime'
              ],
              cacheDirectory: true,
            },
          },

          {
            test: /\.css$/,
            use: [
              require.resolve('style-loader'),
              {
                loader: require.resolve('css-loader'),
                options: {
                  importLoaders: 1,
                },
              },
              {
                loader: require.resolve('postcss-loader'),
                options: {
                  // Necessary for external CSS imports to work
                  // https://github.com/facebookincubator/create-react-app/issues/2677
                  ident: 'postcss',
                  plugins: () => [
                    require('postcss-flexbugs-fixes'),
                    autoprefixer({
                      browsers: [
                        '>1%',
                        'last 4 versions',
                        'Firefox ESR',
                        'not ie < 9', // React doesn't support IE8 anyway
                      ],
                      flexbox: 'no-2009',
                      remove: false
                    }),
                    // pxtorem({
                    //   rootValue: 100,
                    //   propWhiteList: [],
                    //   selectorBlackList: ['border', 'border-left', 'border-top', 'border-right', 'border-bottom', '^\.weui.'],
                    //   minPixelValue: 2
                    // }),
                  ],
                },
              },
            ],
          },

          {

            exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/],
            loader: require.resolve('file-loader'),
            options: {
              name: 'static/media/[name].[hash:8].[ext]',
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new webpack.ProvidePlugin({
      Promise: 'imports?this=>global!exports?global.Promise!es6-promise',
      //fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    }),
    // new webpack.optimize.CommonsChunkPlugin('vendors','js/vendors.js'),
    new ExtractTextPlugin("css/style.css"),
    new HtmlWebpackPlugin({                       //根据模板插入css/js等生成最终HTML
      //favicon:'./src/img/favicon.ico', //favicon路径
      filename: 'index.html',    //生成的html存放路径，相对于 path
      template: './src/index.html',    //html模板路径
      inject: true,    //允许插件修改哪些内容，包括head与body
      hash: true,    //为静态资源生成hash值
      minify: {    //压缩HTML文件
        removeComments: true,    //移除HTML中的注释
        collapseWhitespace: false    //删除空白符与换行符
      }
    }),
  ]
};