const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	entry: "./src/index.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: "index.html",
			scriptloading: "defer",
			//title: "This is how you hard code the title of the project"
		}),
	],
	module: {
		rules: [
			//css loader
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			//css image loader

			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset/resource",
			},
			// font loader
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: "asset/resource",
			},
		],
	},
};
