/*
 * @Author: HxB
 * @Date: 2022-04-13 10:42:30
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-08-24 16:20:23
 * @Description: 路由渲染组件
 * @FilePath: \react-view\src\router\RouterView.tsx
 */
import { Redirect, Route, Switch } from 'react-router-dom'; // 引入 react-router-dom
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
        {routes.map((route: any) => {
          return route.redirect ? (
            <Route key={route.path} exact={route.exact} path={route.path}>
              <Redirect to={route.redirect} />
            </Route>
          ) : (
            <Route
              key={route.path}
              exact={route.exact && !route.routes?.length}
              path={route.path}
              render={routeProps => {
                return <AuthRouteDom {...route} {...routeProps} />;
              }}
            />
          );
        })}
        {props.defaultRoute && <Redirect to={props.defaultRoute} />}
      </Switch>
    </Suspense>
  );
};

export default RouterView;
