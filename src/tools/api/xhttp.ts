/*
 * @Author: HxB
 * @Date: 2022-04-13 11:18:13
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-04-22 14:17:21
 * @Description: 全局请求工具
 * @FilePath: \react-view\src\tools\js\xhttp.ts
 */
import XHttp from 'js-xhttp';

// 可以直接使用 XHttp，也可以全局初始化一个实例即可，所有配置如下，均为可选参数。也可以直接 XHttp.create(); 初始化。
const $http = XHttp.create({
  timeout: 1000, // 超时时间 default: 30000
  cancelDuplicatedRequest: true, // 是否取消重复请求 default: true
  retryConfig: {
    // 重试配置
    retry: 3, // 次数
    delay: 1000, // 每次重试的基础延迟时间
  },
  requestHandler: config => {
    console.log('requestHandler', config); // 请求前的拦截处理 可自行打印日志log
  },
  responseHandler: response => {
    console.log('responseHandler', response.status); // 响应后的拦截处理 可自行打印日志log
  },
  errorHandler: error => {
    console.log('errorHandler', error); // 错误处理 可自行打印日志log
  },
  setRequestHeaders: config => {
    return config; // 返回配置对象，可修改请求头。必须返回一个请求头对象，否则会抛出错误。
  },
  requestFinally: () => {
    console.log('requestFinally Hooks'); // 请求完成时的回调，无论结果如何。
  },
});

export default $http;
// 也可直接导出常用的方法 get post put patch delete request 等
