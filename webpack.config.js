// eslint-disable-next-line global-require
const path = (dir) => require("path").resolve(__dirname, dir);
const HTML = require("html-webpack-plugin");
const CSS = require("mini-css-extract-plugin");
const autoprefixer = require("autoprefixer");
const webpack = require("webpack");
const postcssFF = require("postcss-flexbugs-fixes");

const DEV_MODE = process.env.NODE_ENV === "production";
const SRC_DIR = path("src");
const DIST = path("public");

const entries = [
  {
    title: "React",
    name: "client",
    bodyClass: "client-body__init",
  },
];

const base = {
  entry: {
    app: `${SRC_DIR}/index.js`,
  },
  output: {
    path: DIST,
    filename: DEV_MODE ? "js/[name].[contenthash].js" : "js/[name].js",
    chunkFilename: "js/[name].js",
    publicPath: "",
  },
  devServer: {
    compress: true,
    port: 3003,
  },
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
      minSize: 20000,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
            return `npm.${packageName.replace("@", "")}`;
          },
        },
      },
    },
  },
  resolve: {
    alias: {
      //
    },
    extensions: [".js"],
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        use: [
          "babel-loader",
        ],
      },
      {
        test: /\.(css|scss|sass)$/i,
        use: [
          {
            loader: CSS.loader,
            options: {
              hmr: !DEV_MODE,
              reloadAll: true,
            },
          },
          {
            loader: require.resolve("css-loader"),
          },
          {
            loader: require.resolve("postcss-loader"),
            options: {
              ident: "postcss",
              plugins: () => [
                postcssFF,
                autoprefixer({
                  overrideBrowserslist: [
                    ">0.2%",
                    "not dead",
                    "not ie < 11",
                    "not op_mini all",
                  ],
                  flexbox: "no-2009",
                }),
              ],
            },
          },
          {
            loader: require.resolve("sass-loader"),
          },
        ],
      },
      {
        test: /\.(bmp|gif|jpe?g|png|svg)$/i,
        loader: require.resolve("file-loader"),
        options: {
          limit: 10000,
          name: "assets/images/[name].[contenthash:8].[ext]",
        },
      },
      {
        test: /\.mp4$/i,
        loader: require.resolve("file-loader"),
        options: {
          limit: 10000,
          name: "assets/videos/[name].[contenthash:8].[ext]",
        },
      },
      {
        test: /\.(woff|woff2|otf|ttf|eot)$/i,
        loader: require.resolve("file-loader"),
        options: {
          limit: 10000,
          name: "assets/fonts/[name].[contenthash:8].[ext]",
        },
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({}),
    new webpack.LoaderOptionsPlugin({debug: false}),
    ...entries.map((ent) => new HTML({
      title: ent.title,
      bodyClass: ent.bodyClass,
      template: `${SRC_DIR}/template.html`,
      file: `${DIST}/index.html`,
      minify: false,
      cache: true,
    })),
    new CSS({
      filename: "css/[name].css",
      chunkFilename: "[name].css",
    }),
  ],
};

module.exports = base;
