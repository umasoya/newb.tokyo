import "@babel/polyfill";

const path = require('path');

module.exports = {
    mode: 'production',
    watch: false,
    entry: path.resolve(__dirname, "assets/js/app.js"),
    resolve: {
        modules: [
            'node_modules',
            path.resolve(__dirname, 'assets/js')
        ],
        extensions: ['.js'],
    },
    output: {
        path: path.resolve(__dirname, "docs/js"),
        filename: 'app.js'
    },
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'eslint-loader'
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
};
