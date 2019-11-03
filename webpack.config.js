/// <binding BeforeBuild='Run - Development' />
//https://ourtechroom.com/tech/integrating-vuejs-in-aspnetcore-application/

const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: {
        // This index.js is main file which should include all other modules 
        app: ['./scripts/index.js']
    },
    output: {
        // this says : Compiled file goes to [name].js ie. app.js in my case
        path: __dirname + "/wwwroot/js/dist/",
        filename: '[name].js'
    },
    devtool: 'source-map',
    mode: /*'production'*/'development',

    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
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
                loader: 'babel-loader'
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            },
            {
                // Ask webpack to check: If this file ends with .css, then apply some transforms 
                test: /\.css$/,
                use: [ //  use css loader to load css file
                    { loader: "css-loader" }
                ]
            },
            //for vuetify
            {
                test: /\.s(c|a)ss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        // Requires sass-loader@^7.0.0
                        options: {
                            implementation: require('sass'),
                            fiber: require('fibers'),
                            indentedSyntax: true // optional
                        }
                        // Requires sass-loader@^8.0.0
                        //options: {
                        //    implementation: require('sass'),
                        //    sassOptions: {
                        //        fiber: require('fibers'),
                        //        indentedSyntax: true // optional
                        //    },
                        //},
                    }
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }

        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
};