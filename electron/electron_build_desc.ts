/*
 * @Author: HxB
 * @Date: 2022-04-21 14:06:45
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-11-14 15:42:12
 * @Description: electron-builder 打包配置项介绍
 * @FilePath: \react-view\electron\electron_build_desc.ts
 */

// electron-builder 使用简介：https://blooddot.cool/posts/1867545/
// electron-builder 打包：https://github.com/QDMarkMan/CodeBlog/blob/master/Electron/electron-builder%E6%89%93%E5%8C%85%E8%AF%A6%E8%A7%A3.md
// electron-builder 通用配置翻译：https://blog.csdn.net/qq_38830593/article/details/89843722

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const builder: any = {
  // https://www.electron.build/configuration/configuration
  build: {
    electronDownload: {
      mirror: 'https://npm.taobao.org/mirrors/electron/', // 解决下载资源超级慢的问题 https://registry.npmmirror.com/-/binary/electron/v
    },
    productName: 'React-View', // 项目名 这也是生成的 exe 文件的前缀名
    appId: 'com.react.view', // 包名
    asar: true, // 是否打包成 asar 文件 默认 false true 加密但 exe 文件很大
    copyright: 'Copyright © 2022 ${author}', // 版权信息
    files: ['dist/**/*'], // 需要打包的文件
    directories: {
      output: 'build_exe/${version}', // 输出文件夹
      buildResources: 'build_exe/resources', // 打包资源文件夹
    },
    win: {
      target: ['nsis', 'zip'], // 可直接解压执行的 zip 包
      // arch: ['x64', 'ia32'], // ia32: 低版本 32 位，x64: 高版本 64 位 这个意思是打出来 32+64 的包，但是要注意：这样打包出来的安装包体积比较大，所以建议直接打 32 的安装包。
      icon: 'dist/res/electron/icons/icon.ico',
    },
    nsis: {
      language: 2052, // 语言
      artifactName: '${productName}-Windows-${version}-Setup.${ext}', // 安装包名称
      allowElevation: true, // 允许请求提升 如果为 false，则用户必须使用提升的权限重新启动安装程序。
      installerHeader: 'dist/res/electron/icons/icon.ico', // 安装包头部图标
      installerHeaderIcon: 'dist/res/electron/icons/icon.ico', // 安装包头部图标
      uninstallerIcon: 'dist/res/electron/icons/icon.ico', // 卸载图标
      createDesktopShortcut: true, // 创建桌面图标
      createStartMenuShortcut: true, // 创建开始菜单图标
      allowToChangeInstallationDirectory: true, // 允许改变安装目录
      perMachine: false, // 是否是 perMachine 安装
      oneClick: false, // 一键安装
      deleteAppDataOnUninstall: true, // 卸载时是否删除数据
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
// 进程间通信教学 https://www.electronjs.org/zh/docs/latest/tutorial/ipc
// window.addEventListener('DOMContentLoaded', () => {
//   console.log('My HTML DOMContentLoaded.');
// });
// // Preload (Isolated World)
// // 在 main 与 html 之间通信
// const { contextBridge, ipcRenderer } = require('electron');
// contextBridge.exposeInMainWorld('myIpc', {
//   // From render to main. 渲染器主动与主进程通信
//   send: (channel, args) => {
//     return ipcRenderer.sendSync(channel, args); // ipcRenderer.sendSync API 向主进程发送消息，并 同步 等待响应。(当主进程有响应时) [sendSync(channel, 'ping') => ipcMain.on ... event.returnValue = 'pong']
//     // const result = ipcRenderer.sendSync(channel, 'ping'); // 'pong'
//   },
//   // From main to render. 主进程主动与渲染器进程通信
//   // listener 为自定义的消息处理函数，原型在 renderer.js(custom) 中。
//   receive: (channel, listener) => {
//     ipcRenderer.on(channel, (event, args) => listener(args)); // main.js [send(channel, 'ping') => ipcMain.on ... event.reply(channel, 'pong')] or [mainWindow.webContents.send(channel, 'pong')]
//     // Ps: const webContents = event.sender; const targetWin = BrowserWindow.fromWebContents(webContents); targetWin.setTitle(title);
//     // And So: event.reply == event.sender.send
//   },
//   // From render to main and back again. 双向通信 demo，上面也有例子。
//   invoke: (channel, args) => {
//     return ipcRenderer.invoke(channel, args); //(不推荐) main.js ipcMain.handle(channel, () => 'test value'); // html let result = await window.myIpc.invoke(channel);
//     //(推荐) main.js ipcRenderer.sendSync/send(channel, 'ping') => ipcMain.on(channel, (event, args) => event.returnValue/reply...);
//   },
//   exit: () => {
//     console.log('destroy');
//     ipcRenderer.send('destroy'); // main.js ---> ipcMain.on('destroy', () => app.exit());
//   },
//   getVersion: () => require('./package.json')['version'],
// });

// const baseDir = path.dirname(process.execPath); // 获取运行目录 app.getAppPath()
// const baseRenderDir = path.join(baseDir, 'resources/app');
// const bgPng = path.join(baseRenderDir, 'source', 'bg.png');

// ========================= ELECTRON PRINT PDF FILE START =========================
// https://www.jianshu.com/p/835da0738078
// https://www.sumatrapdfreader.org/docs/Command-line-arguments

// print pdf render page code
// const blob = new Blob([data], {
//   // data 为文件流
//   type: 'application/pdf;charset=utf-8',
// });
// // const pdfUrl = window.webkitURL.createObjectURL(blob) + '#toolbar=0'; // 禁用工具栏
// const reader = new FileReader();
// reader.readAsDataURL(blob);
// reader.addEventListener('loadend', () => {
//   // 通知主进程打印
//   electron.ipcRenderer.send('printPDF', {
//     baseCode: Buffer.from(reader.result.split('base64,')[1], 'base64'),
//     printMachine: 'Printer Name',
//   });
// });

// print pdf main code
// ipcMain.on('printPDF', (e, arg) => {
//   const cp = require('child_process');
//   const path = require('path');
//   const fs = require('fs');

//   let dir = path.join(app.getAppPath(), process.env.NODE_ENV === 'development' ? './src/static' : './static');
//   let pdfUrl = dir + '/temp/print_content.pdf';
//   let cmdPath = dir + '/temp';

//   const writeFile = () => {
//     fs.writeFile(pdfUrl, arg.baseCode, { encoding: 'utf8' }, err => {
//       // 失败
//       if (err) {
//         e.reply('printFailed', err); // ipcRenderer.on
//       } else {
//         switch (process.platform) {
//           case 'darwin':
//           case 'linux':
//             cp.exec(
//               `SumatraPDF.exe -print-to "${arg.printMachine}"  "${pdfUrl}"`, // 注意此处 pdfUrl 是否支持绝对路径，不支持则使用 './print_content.pdf'。
//               {
//                 windowsHide: true,
//                 cwd: cmdPath,
//               },
//               error => {
//                 if (error) {
//                   throw error;
//                 }
//               },
//             );
//             break;
//           case 'win32':
//             cp.exec(
//               `SumatraPDF_32.exe -print-to "${arg.printMachine}"  "${pdfUrl}"`, // 注意此处 pdfUrl 是否支持绝对路径，不支持则使用 './print_content.pdf'。
//               {
//                 windowsHide: true,
//                 cwd: cmdPath,
//               },
//               error => {
//                 fs.unlink(pdfUrl, err => {
//                   console.log(err);
//                 });
//                 if (error) {
//                   throw error;
//                 }
//               },
//             );
//             break;
//           default:
//             throw new Error('Platform not supported.');
//         }
//       }
//     });
//   };

//   if (fs.existsSync(dir)) {
//     writeFile();
//   } else {
//     fs.mkdir(dir, { recursive: true }, err => {
//       if (err) {
//         throw err;
//       } else {
//         writeFile();
//       }
//     });
//   }
// });
// ========================= ELECTRON PRINT PDF FILE END =========================
