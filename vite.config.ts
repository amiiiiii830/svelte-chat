import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit()],
  // ,
  // build: {
  //   outDir: "./build", // Ensure this matches distDir in tauri.conf.json
  //   emptyOutDir: true,
  //   target: "esnext",
  // },
});