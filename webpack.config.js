/**
 * Created by linfeiyang on 16-7-29.
 */
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

module.exports = config;