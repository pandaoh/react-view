/*
 * @Author: HxB
 * @Date: 2022-04-13 10:41:35
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-04-20 14:29:18
 * @Description: 路由组件入口
 * @FilePath: \react-view\src\router\index.tsx
 */
import React from 'react';
import routes from './_config'; // 路由列表，有其他的路由列表页面可以继续引入
import RouterView from './RouterView'; // 封装好的 Router
import {HashRouter} from 'react-router-dom';

const AppRouter = () => {
  return (
    <HashRouter>
      <RouterView routes={routes} />
    </HashRouter>
  );
};

export default AppRouter;
