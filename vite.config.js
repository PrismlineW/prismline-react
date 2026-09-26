import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'spa-fallback',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          const url = req.url ? req.url.split('?')[0] : '';
          // If request is for an HTML page route, rewrite to /index.html for React SPA
          if (
            url === '/services' ||
            url === '/services.html' ||
            url === '/process' ||
            url === '/process.html' ||
            url === '/guarantee' ||
            url === '/guarantee.html' ||
            url === '/about' ||
            url === '/about.html' ||
            url === '/contact' ||
            url === '/contact.html'
          ) {
            req.url = '/index.html';
          }
          next();
        });
      },
    },
  ],
  // Proxy API calls to PHP backend (for local dev with a PHP server)
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
    },
  },
  // Ensure assets in public/ are served at root
  publicDir: 'public',
});
