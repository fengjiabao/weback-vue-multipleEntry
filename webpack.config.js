var path = require('path');
var fs = require('fs');
var entryJs = 'main.js';
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var VueLoaderPlugin = require('vue-loader/lib/plugin');
var env = process.env.NODE_ENV;
var pluginParams = [];


function getEntry(src){
    var entry = {},srcDir = fs.readdirSync(src);
 
    console.log('srcDir',srcDir)
    console.log('env',env)
    for(var i = 0,len = srcDir.length; i < len;i++){
        if(!fs.existsSync(path.join(src,srcDir[i],entryJs))) continue;
        var key = env === 'dev' ? path.join(srcDir[i],entryJs) : path.join(srcDir[i],srcDir[i] + '_' + entryJs) 
        entry[key] = path.join(src,srcDir[i],entryJs);

        //get plugin params
        var filename = srcDir[i] + '/index.html',template = './src/' + srcDir[i] + '/index.html'
        pluginParams.push({filename: filename,template : template,chunks: [key]})
    }
    console.log('entry',entry)
    return entry;
}

function getPlugin(){ //todo: add plugin
    var pluginArr = [];
    for(var i = 0,len = pluginParams.length;i < len;i++){
        pluginArr.push(new HtmlWebpackPlugin(pluginParams[i]))
    }
    pluginArr.push(new VueLoaderPlugin());
    return pluginArr;
    // console.log('pluginArr',pluginArr)
}

var config = {
    mode: 'none', //display default behavior
    entry: getEntry(__dirname + '/src'),
    output: {
        filename: '[name]',
        path: __dirname + '/dist'
    },
    module: {
        rules: [
            {test: /\.vue$/, use: 'vue-loader'},
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: path.resolve('src')
            }
        ]
    },
    plugins: getPlugin(),
    resolve: {
        extensions: ['.js', '.vue', '.json']
    }
    // [
    //     new HtmlWebpackPlugin({
    //         filename: 'a/index.html', 
    //         template: './src/a/index.html',
    //         inject: 'true',
    //         chunks: ['a\\a_main.js']
    //     })
    // ]
};

module.exports = config;