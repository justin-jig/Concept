const path = require('path');
const jsxtsxRegex = /\.(js|ts|jsx|tsx)$/; // js, jsx ts, tsx regex
const cssRegex =  /\.css$/; // css regex
const sassRegex =  /\.(scss|sass)$/; // sass, scss, module regex
var isProduction = process.argv.indexOf('-p') >= 0 || process.env.NODE_ENV === 'production';


module.exports =  {

    resolve: {

        extensions: ['*', '.ts','.tsx','.js', '.jsx','json'],
        alias: {
            '@library': path.resolve(__dirname, './library'),
            '@controller': path.resolve(__dirname, './src/controller'),
            '@dataService': path.resolve(__dirname, './src/dataService'),
            '@style': path.resolve(__dirname, './src/style'),
            '@ranking.commonView': path.resolve(__dirname, './src/project/rankingballweb/commonView'),
            '@ranking.view': path.resolve(__dirname, './src/project/rankingballweb/view'),
            '@ranking.hooks': path.resolve(__dirname, './src/project/rankingballweb/stores/hooks'),
            '@ranking.store': path.resolve(__dirname, './src/project/rankingballweb/stores'),
            '@b2b.view': path.resolve(__dirname, './src/project/b2b/view'),
            '@b2b.pages': path.resolve(__dirname, './src/project/b2b/view/pages'),
            '@b2b.style': path.resolve(__dirname, './src/project/b2b/view/style'),
            '@b2b.hooks': path.resolve(__dirname, './src/project/b2b/hooks'),
            '@b2b.store': path.resolve(__dirname, './src/project/b2b/store'),
            '@b2b.components': path.resolve(__dirname, './src/project/b2b/view/components'),
            '@b2b.define': path.resolve(__dirname, './src/project/b2b/define'),
        }
        
    },
    
    module: {
        rules: [
            
            {
                test: jsxtsxRegex,
                include: [path.resolve(__dirname, './src'), path.resolve(__dirname, './library')],
                use: [
                  !isProduction && {
                    loader: 'babel-loader',
                  },
                  'ts-loader'
                ].filter(Boolean)
            },

            {
                test: cssRegex,
                use: ['style-loader', 'css-loader' ]        
            },
            {
                test: sassRegex,
                use: [
                    'style-loader', // creates style nodes from JS strings

                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            modules: true, // 클래스네임 모듈화
                        },
                    },  // translates CSS into CommonJS
      
                    'sass-loader', // compiles Sass to CSS, using Node Sass by default
                ],
                exclude: /node_modules/,
            },
            {
                test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    }
                }]
            },
        ],
    },

    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },
    
}