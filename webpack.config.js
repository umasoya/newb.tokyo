const path = require('path');

module.exports = {
    mode: 'development',
    watch: false,
    entry: path.resolve(__dirname, "assets/js/app.js"),
    resolve: {
        modules: [
            'node_modules',
            path.resolve(__dirname, 'assets/js')
        ],
        extensions: ['.ts', '.js'],
    },
    output: {
        path: path.resolve(__dirname, "doc/js"),
        filename: 'app.js'
    },
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.(js|ts)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'eslint-loader',
                    options: {
                        fix: true
                    }
                },
            },
            {
                test: /\.ts$/,
                loader: 'ts-loader',
            }
        ]
    }
};
