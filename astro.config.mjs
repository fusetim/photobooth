// @ts-check
import { defineConfig } from 'astro/config';
import solidJs from '@astrojs/solid-js';
import Icons from 'unplugin-icons/vite'

// https://astro.build/config
export default defineConfig({
  site: 'https://fusetim.github.io',
  base: '/photobooth',
  output: 'static',
  integrations: [solidJs()],
  scopedStyleStrategy: 'class',
  vite: {
    plugins: [
      Icons({
        compiler: 'astro',
      }),
    ],
  },
});