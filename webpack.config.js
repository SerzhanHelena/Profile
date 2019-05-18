const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index-bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
				test: /\.(?:sa|sc|c)ss$/,
				use: [
					require.resolve('style-loader'),
					{
						loader: require.resolve('css-loader'),
						options: {
							importLoaders: 1,
						},
					},
					{
						loader: require.resolve('sass-loader'),
						options: {
							importLoaders: 1,
						},
					},
				]
			}
		]
	},
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
};