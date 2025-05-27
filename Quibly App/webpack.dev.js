import path from 'path';
import { fileURLToPath } from 'url'; // Diperlukan untuk __dirname di ES Modules
import { merge } from 'webpack-merge'; // Import merge
import common from './webpack.common.js'; // Import common config (pastikan common.js sudah ES Module)

// Mendefinisikan __filename dan __dirname untuk ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default merge(common, { // Gunakan export default dan merge
  mode: 'development',
  devtool: 'eval-source-map', // Source map yang cepat untuk development
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      // Aturan JavaScript (babel-loader) biasanya ada di common.js
      // dan akan di-merge dari sana.
    ],
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'), // Pastikan ini mengarah ke folder output common
    port: 8080, // Port yang Anda inginkan
    client: {
      overlay: {
        errors: true,
        warnings: true,
      },
    },
    open: true, // Otomatis membuka browser saat server berjalan
    hot: true, // Mengaktifkan Hot Module Replacement (HMR)
  },
});