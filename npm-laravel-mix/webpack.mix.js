const mix  = require('laravel-mix');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require("path");
const glob = require('glob');

// 定義変数群
const subDir = './';
const jsPath = `${subDir}src/js/`;
const sassPath = `${subDir}src/sass/`;
const searchJs = '/js';
const searchSass = '/sass';
const publicPath = `${subDir}assets/`;

// 連結されたコンパイルパス
var compileJsPath = `${jsPath}**/*.js`;
var compileSassPath = `${sassPath}**/*.scss`;

/**
 * jsのコンパイル用パス自動マッピング
 */
glob.sync(compileJsPath,
 {ignore: `${jsPath}**/includes/**/*.js`}
).map(function(file) {
    const index   = file.indexOf(searchJs);

    //基準文字列から後の文字列を切り出して表示
    const dir         = file.slice(index + 1);
    const js_path = dir.split("/").reverse().slice(1).reverse().join("/");

    mix.js(file, publicPath + js_path).options({
        uglify: {
            parallel: 8, // Use multithreading for the processing
            uglifyOptions: {
                mangle: true,
                compress: false, // The slow bit
            }
        }
    });
});

/**
 * sassのコンパイル用パス自動マッピング
 */
glob.sync(compileSassPath,
 {ignore: `${sassPath}**/includes/**/*.scss`}
 ).map(function(file) {
    const index   = file.indexOf(searchSass);

    //基準文字列から後の文字列を切り出して表示
    const dir         = file.slice(index + 1);
    const dir_path = dir.split("/").reverse().slice(1).reverse().join("/");
    const css_path = dir_path.replace('sass', 'css');

    mix.sass(file, publicPath + css_path).options({
        uglify: {
            parallel: 8, // Use multithreading for the processing
            uglifyOptions: {
                mangle: true,
                compress: false, // The slow bit
            }
        }
    });
});


mix.webpackConfig({
    resolve: {
        alias: {
            stylesheets: path.resolve(__dirname, 'src/sass/'),
            '@': path.resolve(__dirname, 'src/js/')
        }
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                `${publicPath}/**/*.css`,
                `${publicPath}/**/*.js`,
            ]
        }),
    ],
});

mix.options({
    processCssUrls: false,
    terser: {
        extractComments: false,
    }
});
