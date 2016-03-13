const path = require('path');

module.exports = {
    entry: [
        './src/index'
    ],

    output: {
        filename: 'app.js',
        path: path.join(__dirname, './dist'),
        publicPath: '/assets/'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    }
};
