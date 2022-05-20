const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = () => {
   
   let configObj = {
        mode: 'development',
        // devtool: 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, "public"), 
            inline: true,
            hot: true, // HRM(새로 고침 안해도 변경된 모듈 자동으로 적용)
            host: 'localhost', // 사용될 호스트 지정
            port: 3004,
            historyApiFallback: true,
            disableHostCheck: true,
            transportMode: 'ws',
            open : true
        }
   } 
    return merge(common,configObj);
}