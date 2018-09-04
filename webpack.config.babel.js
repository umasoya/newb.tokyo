import "@babel/polyfill";

const path = require('path');

module.exports = {
    mode: 'production',
    watch: false,
    entry: path.resolve(__dirname, "assets/js/app.js"),
    resolve: {
        modules: [path.resolve(__dirname, 'node_modules'), path.resolve(__dirname, 'assets/js')],
        extensions: ['js'],
    },
    output: {
        path: path.resolve(__dirname, "docs/js"),
        filename: 'app.js'
    }
};
