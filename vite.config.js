import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { viteSingleFile } from 'vite-plugin-singlefile'

// base: './' + singlefile => un unique dist/index.html ouvrable en file:// (pièce jointe mail).
export default defineConfig({
  base: './',
  plugins: [svelte(), viteSingleFile()],
})
