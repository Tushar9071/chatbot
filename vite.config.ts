// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
<<<<<<< HEAD
    allowedHosts: true, // ✅ allows all hosts
=======
    port: 3000,
    open: true,
>>>>>>> bcd688fb32320406025e7899784d38fe356f87be
  },
  plugins: [react(), cssInjectedByJsPlugin()],
  build: {
    outDir: 'dist',
  },
});
