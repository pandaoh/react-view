/*
 * @Author: HxB
 * @Date: 2022-04-20 15:42:27
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-11-09 16:19:34
 * @Description: electron 打包与启动文件
 * @FilePath: \react-view\electron\main\main.ts
 */
// https://vitejs.cn/guide/env-and-mode.html#env-files

import * as path from 'path';
import { app, BrowserWindow, globalShortcut } from 'electron';
// eslint-disable-next-line no-undef
const mode = process.argv[2];

let mainWindow: BrowserWindow | null = null;

const createWindow = () => {
  // https://www.csdn.net/tags/NtjaEg1sODUxNDktYmxvZwO0O0OO0O0O.html
  mainWindow = new BrowserWindow({
    // 16:9
    center: true,
    // icon: path.join(__dirname, 'dist/res/electron/icons/icon.ico'),
    autoHideMenuBar: true, // 隐藏菜单
    alwaysOnTop: true, // 总在最前
    resizable: false, // 能否改变大小，false 可能导致 win.restore() 改变窗口大小失效。
    // transparent: false, // 透明，true 可能导致 win.restore() 改变窗口大小失效。
    // movable: true, // 能否移动窗口，false 可能导致 win.restore() 改变窗口大小失效。
    // fullscreen: true, // 默认全屏
    // minWidth: 1680, // min width
    // minHeight: 945, // min height
    // show: false, // is show
    // useContentSize: true,
    // frame: false, // 无边框
    // width: 1280,
    // height: 720,
    width: 1024,
    height: 576,
    webPreferences: {
      webSecurity: false, // 是否禁用同源策略(上线时删除此配置)
      // eslint-disable-next-line no-undef
      preload: path.join(__dirname, '../preload/preload.js'),
      nodeIntegration: true, // 解决无法使用 require 加载的 bug
      // contextIsolation: false, // preload 单独的运行环境
    },
  });
  if (mode === 'dev') {
    // !app.isPackaged
    mainWindow.loadURL('http://localhost:1998/');
    mainWindow.webContents.openDevTools();
  } else {
    // mainWindow.loadURL(
    //   url.format({
    //     pathname: path.join(__dirname, './dist/index.html'),
    //     protocol: 'file:',
    //     slashes: true,
    //   }),
    // );
    mainWindow.loadFile('dist/index.html').catch(() => null);
  }

  // 关闭 window 时触发下列事件
  mainWindow.on('closed', function () {
    mainWindow = null;
  });

  // mainWindow.maximize(); // max size if mainWindow show=false
  // mainWindow.show(); // control mainWindow show
};

app.commandLine.appendSwitch('disable-features', 'OutOfBlinkCors'); // 兼容各个版本关闭跨域(上线时删除此配置)

// 绑定 ready 方法，当 electron 应用创建成功时，创建一个窗口。
app.whenReady().then(() => {
  globalShortcut.register('CommandOrControl+Alt+D', () => {
    mainWindow?.webContents.isDevToolsOpened()
      ? mainWindow?.webContents.closeDevTools()
      : mainWindow?.webContents.openDevTools();
  });
  globalShortcut.register('CommandOrControl+Shift+I', () => {
    console.log('CLOSE DEV TOOLS 关闭默认控制台打开事件');
  });

  createWindow();

  if (!mainWindow?.isFocused()) {
    mainWindow?.focus();
  }

  mainWindow?.setMenuBarVisibility(false); // 设置菜单栏不可见
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  mainWindow.menuBarVisible = false;
  mainWindow?.setAutoHideMenuBar(false);

  // eslint-disable-next-line no-undef
  if (process.platform != 'darwin') {
    mainWindow?.setIcon('dist/res/electron/icons/icon.ico');
  }

  // 绑定 activate 方法，当 electron 应用激活时，创建一个窗口。这是为了点击关闭按钮之后从 dock 栏打开。
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
    // macOS 中点击 Dock 图标时没有已打开的其余应用窗口时，则通常在应用中重建一个窗口。
    if (mainWindow === null) {
      createWindow();
    }
  });
});

// app.on('ready', createWindow);

// 绑定关闭方法，当 electron 应用关闭时，退出 electron 。 macos 系统因为具有 dock 栏机制，可选择不退出。
app.on('window-all-closed', function () {
  // macOS 中除非用户按下 `Cmd + Q` 显式退出，否则应用与菜单栏始终处于活动状态。
  // eslint-disable-next-line no-undef
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

const gotTheLock = app.requestSingleInstanceLock();
if (!gotTheLock) {
  app.quit();
} else {
  app.on('second-instance', (event, commandLine, workingDirectory) => {
    // 当运行第二个实例时，将会聚焦到 mainWindow 这个窗口。
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore();
      mainWindow.focus();
      mainWindow.show();
    }
  });
}
