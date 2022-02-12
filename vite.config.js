import {defineConfig} from 'vite';
import viteVue from '@vitejs/plugin-vue'

const dev = process.env.NODE_ENV !== 'production'

export const logLevel = dev ? 'error' : 'info'

export default defineConfig({
  build: {
      assetsDir: 'assets',
      minify: !dev,
      outDir: 'dist',
      reportCompressedSize: false
  },
  plugins: [
    viteVue(),
  ]
});
