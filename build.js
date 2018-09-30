var jsconfig = require('./webpack.config');
var path = require('path');
var webpack = require('webpack');
var WebpackDevServer = require("webpack-dev-server");
var webpack = webpack(jsconfig);
var env = process.env.NODE_ENV;

if (env == 'dev') {
    var options = {        
        hot: true,        
        compress: true,
        publicPath: "",
        open: true,
        stats: {
            colors: true,
            chunks: false
        },
        contentBase: [path.join(__dirname, "src")] 
    };
    var server = new WebpackDevServer(webpack, options);
    server.listen(80, "test.m.iqiyi.com", function () {
        console.log('server start: http://test.m.iqiyi.com:80');
    });
}else{
    webpack.run(function(err, stats) {
        console.log(stats.toString({
            chunks: false,
            colors: true
        }));
    });
}
