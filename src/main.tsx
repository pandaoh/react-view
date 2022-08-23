/*
 * @Author: HxB
 * @Date: 2022-04-12 16:53:31
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-08-23 17:51:27
 * @Description: 主页面
 * @FilePath: \react-view\src\main.tsx
 */
import '@tools/css/reset.css';
import 'antd/dist/antd.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConfigProvider, message, notification } from 'antd';
import App from './app';
import store from '@/redux';

notification.config({
  placement: 'topRight',
  top: 30,
  duration: 3,
  rtl: false,
});

message.config({
  top: 60,
  duration: 2,
  maxCount: 3,
  rtl: true,
});

// ConfigProvider.config({
//   prefixCls: 'tai-ji', // 需配合 css 变量使用
// });

ReactDOM.render(
  <Provider store={store}>
    <ConfigProvider input={{ autoComplete: 'off' }}>
      <App />
    </ConfigProvider>
  </Provider>,
  document.getElementById('root'),
);
