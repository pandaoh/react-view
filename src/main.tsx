/*
 * @Author: HxB
 * @Date: 2022-04-12 16:53:31
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-07-15 11:32:51
 * @Description: 主页面
 * @FilePath: \react-view\src\main.tsx
 */
import '@tools/css/reset.css';
import 'antd/dist/antd.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { Provider } from 'react-redux';
import store from '@/redux';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
