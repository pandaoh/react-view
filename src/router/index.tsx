/*
 * @Author: HxB
 * @Date: 2022-04-13 10:41:35
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-07-15 14:58:51
 * @Description: 路由组件入口
 * @FilePath: \react-view\src\router\index.tsx
 */
import React from 'react';
import routes from './_config'; // 路由列表，有其他的路由列表页面可以继续引入
import RouterView from './RouterView'; // 封装好的 Router
import { HashRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectors } from '@/redux';
import loadingImg from '@/static/img/loading.gif';

const AppRouter = (props: any) => {
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
      <RouterView routes={routes} />
    </HashRouter>
  );
};

export default connect(selectors.loading)(AppRouter);
