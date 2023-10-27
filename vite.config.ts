import { defineConfig } from 'vite'
import path from 'path'
// import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
// 用于自动导入elementplus用到的组件
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"

// const pathSrc = path.resolve(__dirname, 'src')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
     // 自动导入
     AutoImport({
      imports: ["vue", "vue-router"],
      // 导入存储的文件地址
      dts: "src/auto-import.d.ts",
    }),
    // 自动导入组件
    Components({
      resolvers: [ElementPlusResolver()],
      // 导入存储的文件地址
      dts: "src/components.d.ts",
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, './src')
    }
  }
})
