import { defineConfig } from 'vite'
import { VitePluginAirx } from 'vite-plugin-airx'

// https://vitejs.dev/config/
export default defineConfig({
  build: { outDir: 'output' },
  plugins: [VitePluginAirx()],
})
