const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const mode = process.env.NODE_ENV || "development";
const devMode = mode === "development";
const target = devMode ? "web" : "browserslist";
const devtool = devMode ? "source-map" : undefined;

module.exports = {
  mode: mode,
  target: target,
  devtool: devtool,
  devServer: {
    historyApiFallback: true,
    port: 3000,
    open: true,
    hot: true,
  },
  resolve: {
    extensions: ['.jsx', '.js']
},
  entry: ["@babel/polyfill", path.resolve(__dirname, "./src/index.jsx")],
  output: {
    path: path.resolve(__dirname, "dist"),
    clean: true,
    filename: "[name].[contenthash].js",
    assetModuleFilename: "assets/[hash][ext]",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/index.html"),
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
  ],
  externals: ["react-helmet"],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(c|sc|sa)ss$/i,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [require("postcss-preset-env")],
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.(woff|woff2|ttf)$/i,
        type: "asset/resource",
      },
      { 
        test: /\.(png|jpeg|jpg|svg)$/i,
        exclude: /node_modules/,
        use: ["image-webpack-loader"],
        type: "asset/resource",
      },
      {
        test: /\.(jsx|js)$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["@babel/plugin-syntax-jsx"],
          },
        },
      },
    ],
  },
};
