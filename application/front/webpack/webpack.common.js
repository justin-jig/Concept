const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {

    entry: './src/index.js',
    output : {
        filename: 'test.bundle.js',
        path: path.resolve(__dirname, "dist/")
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx|ts)$/,
                exclude: "/node_modules",
                use: ['babel-loader'],
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader' ]        
            },
            {
                test: /\.(ttf|eot|woff|svg|woff2|png|ico)$/,
                loader: 'file-loader'
            },
        ]
    },

    plugins: [

        // new BannerPlugin({ // 결과물에 빌드 정보나 커밋 버전, config

        // }),

        // new DefinePlugin({ // 전역 변수를 선언하기 위해

            // APP_NAME: JSON.stringify("arenacast_pubg"),
            // VERSION: JSON.stringify("v0.1"),
        // })

        // new MiniCssExtractPlugin({ 
            // CSS를 별도의 파일로 추출하는 플러그인
            
        // })

        // new  TerserWebpackPlugin({
                // 코드 난독화하고 debugger 구문을 제거한다 ver 4에서 사용

        //})
        
        new MiniCssExtractPlugin({
            filename: 'VideoOverlay.css'
        }),

        new CleanWebpackPlugin({ 

            // 빌드 이전 결과물을 제거하는 플러그인으로 빌드 결과물은 웹팩에서 아웃풋 경로에 설장한 곳으로 
            // 폴더 및 파일들이 모이는데 빌드 했을시 이전 빌드내용이 삭제되지 않고 그대로 남아있는 경우도 있어 
            // 이것을 해결해주는 플러그인이다.

            cleanAfterEveryBuildPatterns: ['dist']
        }),

        new HtmlWebpackPlugin({ 

            // 웹팩으로 빌드한 결과물로 HTML 파일을 생성해주는 플러그인
            // 번들한 css파일과 js파일을 각각 html 파일에 link 태그, script태그로 추가 자동
            inject:true,
            template: 'public/index.html', // 적용될 html 경로
            filename: 'test.html',  // 결과 파일명
            // meta: {
            //     // meta 태그를 추가
            //     viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
            // },
            // hash: true,       // 모든 스크립트, css 파일에 고유한 컴파일 해시 추가하여 캐시를 무효화
            //showErrors: true, // 오류 정보가 html에 기록됨
        }),
      ],
};