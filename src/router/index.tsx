/*
 * @Author: HxB
 * @Date: 2022-04-13 10:41:35
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-09-13 10:18:31
 * @Description: 主路由组件入口
 * @FilePath: \react-view\src\router\index.tsx
 */
import React from 'react';
import { HashRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { AliveScope } from 'react-activation';
import RouterView from './RouterView'; // 封装好的 Router
import RouterListener from './RouterListener';
import { selectors } from '@/redux';
import loadingImg from '@/static/img/loading.gif';

type AppRouterProps = {
  routes: any;
};

const AppRouter: React.FC<AppRouterProps> = (props: any) => {
  return (
    <HashRouter>
      <div
        style={{
          width: '100%',
          height: '100%',
          position: 'fixed',
          textAlign: 'center',
          color: '#333',
          fontSize: 'large',
          fontWeight: 'bold',
          top: 0,
          left: 0,
          zIndex: '999999',
          background: 'rgba(255, 255, 255, 0.25)',
          display: props.isLoading ? 'flex' : 'none',
          overflow: 'hidden',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <img style={{ width: '10%' }} src={loadingImg} title="Loading" alt="Loading"></img>
        {props.msg}
      </div>
      <AliveScope>
        <RouterView routes={props.routes} defaultRoute="/" />
      </AliveScope>
      <RouterListener />
    </HashRouter>
  );
};

export default connect(selectors.loading)(AppRouter);
