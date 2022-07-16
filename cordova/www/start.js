/*
 * @Author: HxB
 * @Date: 2022-04-22 14:23:20
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-07-16 21:59:18
 * @Description: cordova 启动
 * @FilePath: \react-view\cordova\www\start.js
 */
/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready

document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
  // Cordova is now initialized. Have fun!
  console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);

  // Auto start the app
  cordova.plugins.autoStart.enable();
  // Auto start the app service
  cordova.plugins.autoStart.enableService('ReactView');

  // Hide the splash screen
  navigator.splashscreen.hide();

  checkUpdate();
}

function checkUpdate() {
  setTimeout(() => {
    const UPDATE_URL = 'https://cdn.biugle.cn/update.json';
    let httpRequest = new XMLHttpRequest();
    httpRequest.open('GET', UPDATE_URL, true);
    httpRequest.send();

    httpRequest.onerror = function (error) {
      console.log(error);
      toMainApp();
    };

    httpRequest.ontimeout = function () {
      console.log(error);
      toMainApp();
    };

    httpRequest.onreadystatechange = async function () {
      if (httpRequest.readyState == 4 && httpRequest.status == 200) {
        const jsonText = httpRequest.responseText;
        try {
          // const responseDemo = {
          //   date: '2022-07-15',
          //   version: '1.0.1',
          //   remark: '1. 更新内容1\n2. 更新内容2',
          //   downloadUrl: 'https://cdn.biugle.cn/app-debug.apk',
          //   size: 30,
          // };
          const response = JSON.parse(jsonText);
          const remoteVersion = response.version;
          const installedVersion = (await ApkUpdater.getInstalledVersion()).version.name;
          if (checkVersion(remoteVersion, installedVersion) == 1) {
            // 弹窗可以自己去优化，默认只用原生 confirm 方便展示逻辑。
            let result = confirm(
              `发现新版本(V${response.version})，点击确定应用将在后台进行升级。\n[更新时间：${response.date}]-{文件大小：${response.size} M}\n${response.remark}\n`,
            );
            if (result) {
              await ApkUpdater.download(response.downloadUrl);
              await ApkUpdater.install();
            }
            toMainApp();
          }
        } catch (error) {
          console.log(error);
          toMainApp();
        }
      }
    };
  }, 0);
}

function checkVersion(targetVersion, currentVersion, testStr = '-rc') {
  let targetVersionList = targetVersion.replace(testStr, '').split('.');
  let currentVersionList = currentVersion.replace(testStr, '').split('.');
  let length =
    targetVersionList.length > currentVersionList.length ? targetVersionList.length : currentVersionList.length;

  for (let i = 0; i < length; i++) {
    let targetVersionValue = i < targetVersionList.length ? targetVersionList[i] || 0 : 0;
    let currentVersionValue = i < currentVersionList.length ? currentVersionList[i] || 0 : 0;

    if (targetVersionValue > currentVersionValue) {
      return 1;
    }

    if (targetVersionValue < currentVersionValue) {
      return -1;
    }
  }

  return 0;
}

function toMainApp() {
  setTimeout(() => {
    window.location.href = 'dist/index.html';
  }, 1000);
}

