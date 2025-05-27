import { merge } from 'webpack-merge';
import common from './webpack.common.js';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin'; // <--- PASTIKAN BARIS INI ADA DAN BENAR

export default merge(common, {
  mode: 'production',
  devtool: 'source-map', // Rekomendasi untuk produksi jika Anda butuh source map

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
    }),
    // new CssMinimizerPlugin(), // Pindahkan atau hapus ini dari sini, karena sudah di `optimization.minimizer`
  ],
  optimization: {
    minimizer: [
        new CssMinimizerPlugin(), // <--- PENGGUNAAN UTAMA CssMinimizerPlugin di sini
        '...', // Mengaktifkan TerserPlugin untuk JavaScript
    ],
  },
});