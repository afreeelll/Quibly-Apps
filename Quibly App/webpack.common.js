import path from 'path';
import { fileURLToPath } from 'url'; // Ini diperlukan untuk mendapatkan __dirname di ES Modules
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

// Mendefinisikan __filename dan __dirname untuk ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Gunakan export default untuk mengekspor konfigurasi ini
export default {
  entry: {
    app: path.resolve(__dirname, '/index.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // Direkomendasikan untuk membersihkan folder dist sebelum build
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset/resource',
      },
      // Anda mungkin ingin menempatkan aturan JS (babel-loader) di common jika digunakan di kedua mode (dev & prod)
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
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      filename: 'index.html', // Opsional: pastikan nama output HTML
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/'),
          noErrorOnMissing: true, // Mencegah error jika folder public kosong
        },
      ],
    }),
  ],
};