/// <binding BeforeBuild='Run - Development' />
//https://ourtechroom.com/tech/integrating-vuejs-in-aspnetcore-application/

const VueLoaderPlugin = require('vue-loader/lib/plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        // This index.js is main file which should include all other modules 
        //app: ['./scripts/index.js']
        app: ['./scripts/app.js']
    },
    output: {
        // this says : Compiled file goes to [name].js ie. app.js in my case
        path: __dirname + "/wwwroot/dist/",
        filename: 'js/[name].js',
        devtoolModuleFilenameTemplate: '[resource-path]'
    },
    devtool: /*'eval-source-map',*/'source-map',
    mode: /*'production'*/'development',

    resolve: {
        alias: {
            vue: 'vue/dist/vue.js',
            components: __dirname + "/scripts/components"
        }
    },

    module: {
        // modules contains Special compilation rules 
        rules: [
            {   // Ask webpack to check: If this file ends with .js, then apply some transforms
                test: /\.js$/,
                // don't transform node_modules folder  this folder need not to be compiled and not needed at production mode
                exclude: /node_modules/,
                // load this .js file using babel loader so as to make it compactible with any browser
                //loader: 'babel-loader'
                use: [
                    'babel-loader',
                    'style-loader'
                ]
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                use: [
                    //{
                    //    loader: 'url-loader?limit=false'
                    //},
                    {
                        loader: 'file-loader',                        
                        options: {
                            outputPath: "images",
                            publicPath: '/dist/images',
                            name: '[name].[ext]'
                        }
                    }
                ]
            },
            {
                // Ask webpack to check: If this file ends with .css, then apply some transforms 
                test: /\.(s)css$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader'
                            //options: {
                            //    // включаем CSS модули
                            //    modules: true
                            //    // настраиваем генерируемое имя класса
                            //    //localIdentName: '[local]_[hash:base64:8]'
                            //}
                        },
                        'sass-loader'
                    ],
                    fallback: "style-loader"
                })
            },
            //for vuetify
            //{
            //    test: /\.s(c|a)ss$/,
            //    use: [
            //        'vue-style-loader',
            //        'css-loader',                  
            //        {
            //            loader: 'sass-loader',
            //            // Requires sass-loader@^7.0.0
            //            options: {
            //                implementation: require('sass'),
            //                fiber: require('fibers'),
            //                indentedSyntax: true // optional
            //            }
            //        }
            //    ]
            //},
            {
                test: /\.vue$/,
                use: [
                    'vue-loader'
                ]
            },
            //for use decorators in a ".ts" files there
            {
                test: /\.ts$/,
                loader: "ts-loader",
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                    transpileOnly: true
                }
            }
        ]

    },
    //devServer: {
    //    hot: true,
    //    contentBase: './dist/js',
    //    proxy: {
    //        '': 'http://localhost:64236'
    //    }
    //},
    //watch: true,
    plugins: [
        new VueLoaderPlugin(),
        new ExtractTextPlugin({ filename: "css/[name].css" })
    ]
};