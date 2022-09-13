/*
 * @Author: HxB
 * @Date: 2022-04-13 10:36:17
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-09-13 11:03:27
 * @Description: 路由配置
 * @FilePath: \react-view\src\router\_config.ts
 */
import { sleep } from 'js-xxx';
import { lazy } from 'react';

const routes = [
  {
    path: '/',
    exact: true,
    name: 'Home',
    component: lazy(() => import('@pages/Home')),
    meta: {
      title: '首页',
    },
  },
  {
    path: '/test/:paramsName',
    // this.props.match.params.paramsName
    name: 'Test',
    exact: false, // 有子路由需设置为 false
    component: lazy(() => import('@pages/Home')),
    meta: {
      title: 'test',
    },
    // 若有子页面，此为参考
    routes: [
      {
        path: '/test/:paramsName/demo1',
        name: 'TestDemo1',
        exact: true,
        component: lazy(() => import('@pages/Settings')),
      },
      {
        path: '/test/:paramsName/demo2',
        name: 'TestDemo2',
        exact: true,
        component: lazy(() => import('@pages/Settings')),
      },
    ],
  },
  {
    path: '/settings',
    name: 'Settings',
    roles: ['admin'],
    keepAlive: true,
    component: lazy(() => import('@pages/Settings')),
    meta: {
      title: '配置页面',
    },
    exact: true,
  },
  {
    path: '/login',
    name: 'Login',
    component: lazy(() => import('@pages/Login')),
    meta: {
      title: '登录页面',
    },
    exact: true,
  },
  {
    path: '*', // 不设置 null，兼容一些第三方组件（例如缓存组件）。
    name: '404',
    component: lazy(async () => {
      await sleep(3000);
      return import('@/pages/404');
    }),
    meta: {
      title: '404',
    },
    exact: true,
  },
];

export default routes;
