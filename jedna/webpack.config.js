const path = require('path');

module.exports = {
    entry: './src/index.ts',
    mode: 'development',
    devtool: false,
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        library: 'jedna',
        libraryTarget: 'umd',
        filename: 'jedna.umd.js',
    }
};
