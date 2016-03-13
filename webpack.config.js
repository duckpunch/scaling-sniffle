const path = require('path');

module.exports = {
    entry: [
        './src/index'
    ],

    output: {
        filename: 'app.js',
        path: path.join(__dirname, './dist'),
        publicPath: '/assets/'
    }
};
