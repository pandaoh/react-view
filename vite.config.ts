/*
 * @Author: HxB
 * @Date: 2022-04-12 16:53:31
 * @LastEditors: DoubleAm
 * @LastEditTime: 2023-03-20 13:40:59
 * @Description: Vite 配置文件
 * @FilePath: \react-view\vite.config.ts
 */
import * as path from 'path';
import { defineConfig } from 'vite';
import reactPlugin from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
// cjs2esmVitePlugin 可以将 cjs 文件转换为 esm 文件
// https://github.com/WarrenJones/vite-plugin-require-transform // 支持 require 加载 还有 vite-plugin-require 也支持
// https://github.com/vitejs/awesome-vite // 好用的 vite 插件

// eslint-disable-next-line no-undef
const getPath = (_path) => path.resolve(__dirname, _path); // 若有警告可以关闭全局的 ts any 类型检查。

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  console.table({ command, mode });
  // 如果不想使用 nodemon 来实现 electron 热监听，可以使用 vite-plugin-electron 插件。
  // 通过 vite -m electron 启动 electron 应用，使用 mode 来判断是否使用 electron 插件。
  // import electronPlugin from 'vite-plugin-electron';
  // const pluginsConfig = [reactPlugin()];
  // if (mode === 'electron') {
  //   pluginsConfig.push(
  //     electronPlugin({
  //       main: {
  //         entry: 'electron/main/main.ts',
  //       },
  //       preload: {
  //         // eslint-disable-next-line no-undef
  //         input: path.join(__dirname, 'electron/preload/preload.ts'),
  //       },
  //     }),
  //   );
  // }
  return {
    // envPrefix: 'VITE_', // 以 envPrefix 开头的环境变量会通过 import.meta.env 暴露在你的客户端源码中。 default: 'VITE_'
    root: getPath('./'), // './'
    base: './', // https://vitejs.cn/config/#base 公共基础路径
    build: {
      target: 'modules', // 设置最终构建的浏览器兼容目标。默认值是一个 Vite 特有的值——'modules'，这是指 支持原生 ES 模块的浏览器。
      outDir: 'dist', // 指定输出路径
      assetsDir: 'assets', // 指定生成静态资源的存放路径
      minify: 'terser', // 混淆器，terser 构建后文件体积更小。
      terserOptions: {
        // 生产环境去除 console
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
      // rollupOptions: { // vite build --config ./vite.build.ts --emptyOutDir=false
      //   input: {
      //     'res/electron/electron_build.js': getPath('./electron_build.ts'),
      //   },
      //   output: {
      //     entryFileNames: '[name]',
      //     // assetFileNames: '[ext]/[name]-[hash].[ext]',
      //     // chunkFileNames: '[name]-[hash].[ext]',
      //   },
      // },
    },
    publicDir: getPath('public'), // 静态资源服务的文件夹
    resolve: {
      alias: {
        '@': getPath('src'),
        '@public': getPath('public'),
        '@components': getPath('src/components'),
        '@pages': getPath('src/pages'),
        '@tools': getPath('src/tools'),
        '@types': getPath('src/types'), // 好像 @types 有冲突
        '@assets': getPath('src/assets'),
        '@services': getPath('src/services'),
      },
    },
    // 本地运行配置，及反向代理配置
    server: {
      cors: true, // 默认启用并允许任何源
      open: true, // 在服务器启动时自动在浏览器中打开应用程序
      port: 1998, // 启动端口
      host: true, // network address to bind to
      hmr: true, // 启用热更新
      // 反向代理配置，注意 rewrite 写法，开始没看文档在这里踩了坑。
      proxy: {
        // https://vitejs.cn/config/#server-proxy
        '^/api': {
          target: 'http://192.168.120.88', // 代理接口
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '/api/test/'), // 替换路径 [/api/users => http://192.168.120.88/api/test/users]
        },
        '^/upload': {
          target: 'http://a.biugle.cn', // 代理接口
          changeOrigin: true, // [/upload/img => http://a.biugle.cn/upload/img]
        },
        // 正则表达式写法
        '^/test/api/.*': {
          target: 'http://192.168.120.88',
          changeOrigin: true, // [/test/api/users => http://192.168.120.88/test/api/users]
        },
        // 跨域简单写法写法
        // '/api': 'https://192.168.120.88/api' // [/api/users => https://192.168.120.22/api/users]
      },
    },
    css: {
      preprocessorOptions: {
        // scss
        less: {
          charset: false,
          javascriptEnabled: true,
          additionalData: `@import "${getPath('src/tools/css/css-utils.less')}";`, // 全局变量、热更新
          // modifyVars: {
          //   hack: `true; @import (reference) "${path.resolve('src/tools/css/css-utils.less')}";`
          // }
        },
      },
    },
    plugins: [
      eslint({
        fix: true,
      }),
      reactPlugin(),
    ],
  };
});
