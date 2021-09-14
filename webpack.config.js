
module.exports = {
    mode: 'production',
    entry: {
        main: ['./src/app.js'],
    },

    output: {
        filename: './dist/[name].js',
    },


};
