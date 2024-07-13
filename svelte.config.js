import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [vitePreprocess({})],
  kit: {
    adapter: adapter({
      pages: "./build", // Directory for built pages
      assets: "./build", // Directory for built assets
      fallback: null,
      precompress: false,
    }),
  },
};

export default config;
