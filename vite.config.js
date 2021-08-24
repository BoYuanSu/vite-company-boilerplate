import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import EnvironmentPlugin from 'vite-plugin-environment'
import gitVersion from 'git-tag-version'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    WindiCSS(),
    EnvironmentPlugin('all', {prefix: 'VITE_'}),
  ],
  devServer: {
    disableHostCheck: true
  },
  define: {
    'git_version': JSON.stringify(gitVersion()),
  },
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, 'src') }
    ]
  },
})
