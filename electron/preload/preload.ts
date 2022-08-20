/*
 * @Author: HxB
 * @Date: 2022-08-18 10:34:52
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-08-20 18:00:20
 * @Description: preload
 * @FilePath: \react-view\electron\preload\preload.ts
 */
import { contextBridge, ipcRenderer, ipcMain } from 'electron';
import pkg from '../../package.json';
// 引入了 json 文件，tsc 编译时会默认带上原路径，所以不用写详细目标路径。

window.addEventListener('DOMContentLoaded', () => {
  console.log('HTML DOMContentLoaded');
});

contextBridge.exposeInMainWorld('myIpc', {
  send: (channel, args) => {
    return ipcRenderer.send(channel, args);
  },
  on: (channel, listener) => {
    ipcRenderer.on(channel, (event, args) => listener(args));
  },
  invoke: (channel, args) => {
    return ipcRenderer.invoke(channel, args);
  },
  exit: () => {
    console.log('destroy');
    ipcRenderer.send('destroy');
  },
  getVersion: () => pkg['version'],
});
