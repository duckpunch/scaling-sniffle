// Invoked by running `webpack` where this file is

const path = require('path');

// The only required bit of a webpack configuration
module.exports = {

    // Entry point for building the app
    entry: [
        './src/index'
    ],

    // Exit point
    output: {
        filename: 'app.js',
        path: path.join(__dirname, './dist'),
        publicPath: '/assets/'
    }
};
