/*
 * @Author: HxB
 * @Date: 2022-04-20 15:42:27
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-04-27 14:56:30
 * @Description: electron 打包与启动文件
 * @FilePath: \react-view\electron_build.ts
 */
// https://vitejs.cn/guide/env-and-mode.html#env-files
import { app, BrowserWindow, globalShortcut } from 'electron';
// eslint-disable-next-line @typescript-eslint/no-var-requires
// const path = require('path');

const mode = process.argv[2];

let mainWindow: BrowserWindow | null = null;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    // 16:9
    center: true,
    // icon: path.join(__dirname, 'dist/res/electron/icons/icon.ico'),
    autoHideMenuBar: true, // 隐藏菜单
    // useContentSize: true,
    // frame: false, // 无边框
    width: 1280,
    height: 720,
    webPreferences: {
      // preload: path.join(__dirname, 'preload.js'),
      // nodeIntegration: true, // 解决无法使用require加载的bug
      // contextIsolation: false, // 解决无法使用require加载的bug
    },
  });
  if (mode === 'dev') {
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

  // 关闭window时触发下列事件.
  mainWindow.on('closed', function () {
    mainWindow = null;
  });
};
// 绑定ready方法，当electron应用创建成功时，创建一个窗口。
app.whenReady().then(() => {
  globalShortcut.register('CommandOrControl+Alt+D', () => {
    mainWindow.webContents.isDevToolsOpened()
      ? mainWindow.webContents.closeDevTools()
      : mainWindow.webContents.openDevTools();
  });
  globalShortcut.register('CommandOrControl+Shift+I', () => {
    console.log('CLOSE DEV TOOLS 关闭默认控制台打开事件');
  });

  createWindow();

  if (!mainWindow.isFocused()) {
    mainWindow.focus();
  }

  mainWindow.setMenuBarVisibility(false); // 设置菜单栏不可见
  mainWindow.menuBarVisible = false;
  mainWindow.setAutoHideMenuBar(false);

  if (process.platform != 'darwin') {
    mainWindow.setIcon('dist/res/electron/icons/icon.ico');
  }

  // 绑定activate方法，当electron应用激活时，创建一个窗口。这是为了点击关闭按钮之后从dock栏打开。
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
    // macOS中点击Dock图标时没有已打开的其余应用窗口时,则通常在应用中重建一个窗口
    if (mainWindow === null) {
      createWindow();
    }
  });
});

// app.on('ready', createWindow);

// 绑定关闭方法，当electron应用关闭时，退出electron。macos系统因为具有dock栏机制，可选择不退出。
app.on('window-all-closed', function () {
  // macOS中除非用户按下 `Cmd + Q` 显式退出,否则应用与菜单栏始终处于活动状态.
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
