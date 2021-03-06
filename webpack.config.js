var config = {
    mode: 'development',
    entry: __dirname + '/src/index.js',
    output:{
        path: __dirname + '/dist',
        publicPath: '/',
        filename:'bundle.js',
    },
    module:{
      rules:[
          {
            test:/\.(js|jsx)$/,
            exclude:/node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
                plugins: [
                [
                  'transform-runtime',
                  {
                    polyfill: false,
                    regenerator: true,
                  },
                ],
                ],
              }
            }
          },
          {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
          },
          {
            test: /\.(png|jpg|gif)$/,
            use: [
              {
                loader: 'file-loader',
                options: {}  
              }
            ]
          }
      ]
    },
    devServer:{
        //inline:true,//实时刷新
        port:7777,
        historyApiFallback: true,
        contentBase: './'
    }
}

module.exports = config;