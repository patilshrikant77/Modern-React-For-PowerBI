const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
	mode: "production",
	entry: "./App/index.tsx",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "js/[name].[contenthash].js",
		publicPath: "/",
	},
	cache: {
		type: "filesystem",
	},
	resolve: {
		extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
	},
	module: {
		rules: [
			{ test: /\.(ts|tsx)$/, loader: "ts-loader" },
			{ enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, "css-loader"],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "App/index.html",
		}),
		new MiniCssExtractPlugin({
			filename: "css/[name].[contenthash].css",
		}),
	],
	optimization: {
		minimizer: [new TerserPlugin()],
	},
};
