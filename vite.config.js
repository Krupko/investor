import { defineConfig } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import react from '@vitejs/plugin-react';
import svgSpritePlugin from '@pivanov/vite-plugin-svg-sprite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgSpritePlugin({
      // Укажите одну или несколько папок с иконками
      iconDirs: [path.resolve(__dirname, 'src/assets/icons')],
      // Задайте шаблон для `id` каждого символа
      symbolId: '[name]',
      // Настройте, куда инлайнить спрайт в HTML
      inject: 'body-last',
      // fileName: 'sprite.svg', // Хеш для инвалидации кеша
      // publicPath: 'assets/sprite.svg',
      // Конфигурация SVGO для оптимизации
      svgoConfig: {
        plugins: [
          {
            name: 'preset-default',
            // params: {
            overrides: {
              // Важно: не удалять viewBox
              removeViewBox: false,
            },
            // },
          },
          // Превращает цвета в currentColor для гибкого управления через CSS
          { name: 'convertColors', params: { currentColor: true } },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, './src'),
      // '@dist': path.resolve(__dirname, './dist'),
      // '@public': path.resolve(__dirname, './public'),
      // '@assets': path.resolve(__dirname, '../../../../../assets')
    },
  },
});
