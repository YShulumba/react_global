const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const htmlWebpackPlugin = new HtmlWebPackPlugin({
	template: "./src/index.html",
	filename: "./index.html"
});

const uglifyJsPlugin = new UglifyJsPlugin({
	test: /\.js($|\?)/i,
	cache: "dist/cache",
	parallel: 4,
	sourceMap: true
});

module.exports = function(env) {
	const isProduction = env.NODE_ENV == "production";
	let config = {
		entry: "./src/js/index.js",
		devtool: isProduction ? "source-map" : "eval",
		output: {
			filename: 'bundle.js',
			path: path.resolve(__dirname, 'dist')
		},
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /node_modules/,
					use: {
						loader: "babel-loader"
					}
				},
				{
					test: /\.s?css$/,
					exclude: /node_modules/,
					use: [
						'style-loader',
						{ loader: 'css-loader', options: { importLoaders: 1 } },
						'postcss-loader'
					]
				}
			]
		},
		plugins: [htmlWebpackPlugin],
		optimization: {
			minimize: isProduction,
			minimizer: isProduction ? [uglifyJsPlugin] : []
		}
	};
	return config;
};

