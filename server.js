/**
 * Created by linfeiyang on 16-8-9.
 */
var WebpackDevServer = require('webpack-dev-server');
var webpack = require('webpack');
var config = require("./webpack.config");
var compiler = webpack(config);

var server = new WebpackDevServer(compiler, {
    contentBase: "assets/",
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    },
    colors: true,
    progress: true
});
server.listen(8000, 'localhost', function() {
    console.log('listen on 8000 ok');
});