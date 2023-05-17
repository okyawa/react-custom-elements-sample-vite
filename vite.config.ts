import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import glob from 'fast-glob';

const entries = glob.sync('src/entries/*.ts');

// `src/entries/` 内のファイルをエントリーポイントとして登録する
const input = entries.reduce((acc, entry) => {
  const key = entry.replace('src/entries/', '').replace('.ts', '');
  acc[key] = entry;
  return acc;
}, {});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input,
      output: {
        entryFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name][extname]'
      }
    }
  }
})
