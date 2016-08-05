/**
 * Created by linfeiyang on 16-7-29.
 */

var WebpackDevServer = require('webpack-dev-server');
var webpack = require('webpack');
var config = {
    entry: __dirname + '/assets/js/main.js',
    output: {
        path: __dirname + '/assets',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader!jsx-loader?harmony'
        }]
    }

};
var compiler = webpack(config);

var server = new WebpackDevServer(compiler, {
    contentBase: "assets/",
    hot: true,
    filename: "bundle.js",
    compress: true,
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    },
    publicPath: "/assets/",
    headers: { "X-Custom-Header": "yes" },
    stats: { colors: true }
});
server.listen(8000);

module.exports = config;