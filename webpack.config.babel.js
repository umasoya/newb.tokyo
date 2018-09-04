const path = require('path');

module.exports = {
    mode: 'production',
    watch: true,
    entry: './assets/js/app.js',
    output: {
        filename: 'app.js',
        path: path.join(__dirname, 'docs/js')
    }
};
