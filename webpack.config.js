var path = require('path');

module.exports = {
    mode: 'development',
    entry: './brickbreak/example.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }
};