var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'eval',
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './src/app'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        alias: {
            'redux-devtools/lib': path.join(__dirname, 'node_modules', 'redux-devtools', 'lib'),
            'redux-devtools': path.join(__dirname, 'node_modules', 'redux-devtools', 'src'),
            'react': path.join(__dirname, 'node_modules', 'react')
        },
        extensions: ['', '.js', '.jsx', '.css']
    },
    resolveLoader: {
        'fallback': path.join(__dirname, 'node_modules')
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['react-hot', 'babel'],
            exclude: /node_modules/,
            include:  __dirname
        }, {
            test: /\.css$/,
            loaders: ['style-loader', 'css-loader']
        }, {
            test: /\.less$/,
            loader: "style!css!less"
        }]
        // }, {
        //     // bootstrap font-awesome
        //     test : /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        //     loader : 'url',
        //     query : {
        //         limit : 10000,
        //         mimetype : 'application/font-woff',
        //         // 字体文件放置目录
        //         name : 'fonts/[name]_[hash].[ext]'
        //     }
        // }, {
        //     // bootstrap
        //     test : /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        //     loader : 'url',
        //     query : {
        //         limit : 10000,
        //         mimetype : 'application/octet-stream',
        //         // 字体文件放置目录
        //         name : 'fonts/bootstrap/[name]_[hash].[ext]'
        //     }
        // }, {
        //     // bootstrap
        //     test : /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        //     loader : 'file',
        //     query : {
        //         limit : 10000,
        //         // 字体文件放置目录
        //         name : 'fonts/bootstrap/[name]_[hash].[ext]'
        //     }
        // }, {
        //     // bootstrap
        //     test : /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        //     loader : 'url',
        //     query : {
        //         limit : 10000,
        //         mimetype : 'application/image/svg+xml',
        //         // 字体文件放置目录
        //         name : 'fonts/bootstrap/[name]_[hash].[ext]'
        //     }
        // }]
    }
};

