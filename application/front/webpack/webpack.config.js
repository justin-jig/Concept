
const path = require("path");
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

// webpack 5는 Node.js 버전 10.13.0
module.exports = {

    mode : "development", // "production | "development" | "none" //  환경별 최적화를 활성화

    entry : "./src/index.js", // string | object | array  => endpoint
        // ./src 를 기본으로 함
        // 애플리케이션이 여기에서 실행되며
        // webpack이 번들링을 시작

    output: { // webpack이 결과를 내보내는 방법과 관련된 옵션
  
        path : path.resolve(__dirname, "dist"), // string (기본값)
        // 모든 출력 파일의 대상 디렉터리는
        // 반드시 절대 경로 여야함 (node.js의 path는 모듈을 사용)

        filename : "index.js", // string (기본값)
        // the filename template for entry chunks

        publickPath: "/assets/", // string
        // HTML에 페이지에 상대적으로 해석된 출력 디렉터리 url
        library: { //
            type: "umd", 
            name : "myLibrary"
        },
        uniqueName: "my-application",
        // 동일한 HTML의 다른 빌드와 충돌하지 않도록 이 빌드에 부여할 고유한 이름
        name : "my-config"
        // 출력에 표시되는 설정 이름
    },

    module: { // 모듈 관련 설정 로더 
                // 1. 변한이 필요한 파일을 식별하는 test 속성, 
                // 2. 변환을 수행하는데 사용되는 로더 가르키는 use 속성
        rules: [
          // 모듈에 대한 규칙 (로더 설정, 파서 옵션 등)
          {
            // 조건:
            test: /\.jsx?$/,
            include: [
              path.resolve(__dirname, "app")
            ],
            exclude: [
              path.resolve(__dirname, "app/demo-files")
            ],
            // 각각의 정규식 또는 문자열을 허용하는 일치 조건
            // test 및 include 동작은 동일하며 둘 다 일치해야함
            // exclude는 일치하지 않아야함 (test 및 include 보다 우선함)
            // 좋은 활용 사례:
            // - test에서 파일 이름을 찾을때만 RegExp 사용
            // - 전체 경로와 일치하도록 include 및 exclude에서 절대 경로 배열을 사용
            // - exclude 보다는 include를 사용
            // 각 조건은 조건 배열인
            // "and", "or" 또는 "not" 속성이 있는 객체도 받을 수 있음
            issuer: /\.css$/,
            // issuer: path.resolve(__dirname, "app"),
            // issuer: { and: [ /\.css$/, path.resolve(__dirname, "app") ] },
            // issuer: { or: [ /\.css$/, path.resolve(__dirname, "app") ] },
            // issuer: { not: [ /\.css$/ ] },
            // issuer: [ /\.css$/, path.resolve(__dirname, "app") ], // like "or"
            // issuer 조건 (import의 출처)

            // 동작:
            loader: "babel-loader",
            // 적용되어야하는 로더이며 컨텍스트에 상대적으로 해석됨
            options: {
              presets: ["es2015"]
            },
            // 로더에 대한 옵션
            use: [
              // 복수의 로더와 옵션을 적용
              "htmllint-loader",
              {
                loader: "html-loader",
                options: {
                  // ...
                }
              }
            ],
            type: "javascript/auto",
            // 모듈 유형을 지정
            /* 고급 동작 (클릭하여 보기) */
          },
          {
            oneOf: [
              // ... (rules)
            ]
            // 중첩 규칙 중 하나만 사용
          },
          {
            // ... (conditions)
            rules: [
              // ... (rules)
            ]
            // 중첩 규칙을 모두 사용 (유용한 조건과 결합)
          },
        ],
    
    },

    resolve : { // 빌드 해결 (별칭)


    },

    performance : { // 빌드 performance


    },

    devServer: { // dev 서버 설정

        contentBase: __dirname + "/dist/",
        inline: true,
        hot: true,
        host: '0.0.0.0',
        port: 3000,
        historyApiFallback: true,
        disableHostCheck: true,
        transportMode: 'ws',
    },

    experiments : {

    },

    plugins : { // 플러그인 :  번들을 최적화하거나, 에셋을 관리하고, 또 환경 변수 주입등 광범위 작업

    }, 

    optimization : { // 추가 플로그인 목록

    }

}