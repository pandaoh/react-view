/*
 * @Author: HxB
 * @Date: 2022-04-21 14:06:45
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-07-19 20:03:28
 * @Description: electron-builder 打包配置项介绍
 * @FilePath: \react-view\electron_build_desc.ts
 */

// electron-builder 使用简介：https://blooddot.cool/posts/1867545/
// electron-builder 打包：https://github.com/QDMarkMan/CodeBlog/blob/master/Electron/electron-builder%E6%89%93%E5%8C%85%E8%AF%A6%E8%A7%A3.md
// electron-builder 通用配置翻译：https://blog.csdn.net/qq_38830593/article/details/89843722

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const builder: any = {
  build: {
    electronDownload: {
      mirror: 'https://npm.taobao.org/mirrors/electron/', // 解决下载资源超级慢的问题 https://registry.npmmirror.com/-/binary/electron/v
    },
    productName: 'React-View', // 项目名 这也是生成的 exe 文件的前缀名
    appId: 'com.react.view', // 包名
    asar: true, // 是否打包成 asar 文件 默认 false true 加密但 exe 文件很大
    copyright: 'Leo He © 2022', // 版权信息
    files: ['dist/**/*'], // 需要打包的文件
    directories: {
      output: 'build_exe', // 输出文件夹
    },
    win: {
      target: ['nsis', 'zip'], // 可直接解压执行的 zip 包
      // arch: ['x64', 'ia32'], // ia32: 低版本 32 位，x64: 高版本 64 位 这个意思是打出来 32+64 的包，但是要注意：这样打包出来的安装包体积比较大，所以建议直接打 32 的安装包。
      icon: 'dist/res/electron/icons/icon.ico',
    },
    nsis: {
      language: 2052, // 语言
      artifactName: 'react_view.exe', // 安装包名称
      allowElevation: true, // 允许请求提升 如果为 false，则用户必须使用提升的权限重新启动安装程序。
      installerHeader: 'dist/res/electron/icons/icon.ico', // 安装包头部图标
      installerHeaderIcon: 'dist/res/electron/icons/icon.ico', // 安装包头部图标
      uninstallerIcon: 'dist/res/electron/icons/icon.ico', // 卸载图标
      createDesktopShortcut: true, // 创建桌面图标
      createStartMenuShortcut: true, // 创建开始菜单图标
      allowToChangeInstallationDirectory: true, // 允许改变安装目录
      oneClick: false, // 一键安装
      shortcutName: 'xxx', // 图标名称
      include: 'dist/res/electron/build_config/installer.nsh', // 包含的自定义 nsis 脚本
    },
    publish: [
      {
        provider: 'generic', // 服务器提供商 也可以是 GitHub 等等
        url: 'http://xxx.com/', // 服务器地址
      },
    ],
    mac: {
      target: 'dmg',
      icon: 'dist/res/electron/icons/icon.ico',
    },
    dmg: {
      contents: [
        {
          x: 410,
          y: 150,
          type: 'link',
          path: '/Applications',
        },
        {
          x: 130,
          y: 150,
          type: 'file',
        },
      ],
      backgroundColor: '#fff',
    },
    linux: {
      icon: 'dist/res/electron/icons/icon.ico',
    },
  },
};
// 打包报错请提出安全防护软件
// 解压 nsis-resources-3.4.1.zip 到 C:\Users\Administrator\AppData\Local\electron-builder\Cache\nsis\nsis-resources-3.4.1
// 图标必须 .ico 文件 且像素大于 256*256 否则会报错 文件大小过大 生产环境窗口可能不显示（建议使用 electron-builder-icon 处理）

/* -------------------------------------------------- */

// 使用原生 js 开发 electron 应用，我们可以添加 preload.js 提供一些 api 供原生使用。
// window.addEventListener('DOMContentLoaded', () => {
//   console.log('My HTML DOMContentLoaded.');
// });
// // Preload (Isolated World)
// // 在 main 与 html 之间通信
// const { contextBridge, ipcRenderer } = require('electron');
// contextBridge.exposeInMainWorld('myIpc', {
//   // From render to main.
//   send: (channel, args) => {
//     return ipcRenderer.sendSync(channel, args);
//   },
//   // From main to render.
//   // listener 为自定义的消息处理函数，原型在 renderer.js(custom) 中。
//   receive: (channel, listener) => {
//     ipcRenderer.on(channel, (event, args) => listener(args));
//   },
//   // From render to main and back again.
//   invoke: (channel, args) => {
//     return ipcRenderer.invoke(channel, args);
//   },
//   exit: () => {
//     console.log('destroy');
//     ipcRenderer.send('destroy'); // main.js ---> ipcMain.on('destroy', () => app.exit());
//   },
//   getVersion: () => require('./package.json')['version'],
// });
