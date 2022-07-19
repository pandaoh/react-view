/*
 * @Author: HxB
 * @Date: 2022-04-13 10:42:30
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-07-15 14:48:12
 * @Description: 动态路由渲染组件
 * @FilePath: \react-view\src\router\RouterView.tsx
 */
import { Route, Switch } from 'react-router-dom'; // 引入 react-router-dom
import React, { Suspense } from 'react'; // Suspense 配合前面的 laze() 使用，不加上会报错
import AuthRouteDom from './AuthRouteDom';
import loadingGif from '@/static/loading.gif';

const RouterView = (props: any) => {
  const { routes } = props;
  return (
    <Suspense
      fallback={<img style={{ margin: 'auto', width: '10%' }} src={loadingGif} title="Loading" alt="Loading" />}
    >
      <Switch>
        {routes.map((item: any, index: number) => {
          return (
            <Route
              key={index}
              exact={item.exact}
              path={item.path}
              render={routeProps => {
                return <AuthRouteDom {...item} {...routeProps} />;
              }}
            />
          );
        })}
      </Switch>
    </Suspense>
  );
};

export default RouterView;
