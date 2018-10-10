var path = require('path');

module.exports = {
    mode: 'development',
    entry: './space_invaders/example.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }
};