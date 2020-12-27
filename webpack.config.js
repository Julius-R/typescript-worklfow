const BabiliPlugin = require("babili-webpack-plugin");
let webpack = require("webpack");
let path = require("path");
module.exports = {
	entry: path.resolve(__dirname, "src") + "/js/app.ts",
	output: {
		path: __dirname + "/public/js",
		publicPath: "/public/js/",
		filename: "app.js"
	},
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{ test: /\.tsx?$/, loader: "ts-loader" }
		]
	},
	plugins: [new BabiliPlugin()],
	mode: "production"
};