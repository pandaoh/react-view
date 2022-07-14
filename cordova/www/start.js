/*
 * @Author: HxB
 * @Date: 2022-04-22 14:23:20
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-07-14 14:20:21
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

  setTimeout(function () {
    window.location.href = 'dist/index.html';
  }, 1000);
}

